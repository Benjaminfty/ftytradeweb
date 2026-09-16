import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 10 * 60_000) { hits.set(ip, { n: 1, t: now }); return false; }
  h.n += 1;
  return h.n > 8;
}

function db() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    auth: { persistSession: false },
  });
}

function fromAddress() {
  const f = process.env.EMAIL_FROM || "noreply@ftytrade.com";
  return f.includes("<") ? f : `Ftytrade Futures <${f}>`;
}

async function sendKeyEmail(to: string, firstName: string, key: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload: any = {
    from: fromAddress(),
    to: [to],
    subject: "Your Reward Key is reserved · Ftytrade Futures",
    template: { id: "waitlist", variables: { TRADER_NAME: firstName, REWARD_KEY: key, TRADER_EMAIL: to } },
  };
  const { error } = await resend.emails.send(payload);
  if (error) throw new Error(typeof error === "string" ? error : JSON.stringify(error));
}

export async function POST(req: Request) {
  try {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
    if (limited(ip)) return NextResponse.json({ ok: false, error: "too_many" }, { status: 429 });

    const body = await req.json().catch(() => ({}));
    const first = String(body.first || "").trim().slice(0, 60);
    const last = String(body.last || "").trim().slice(0, 60);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 120);
    const lang = body.lang === "es" ? "es" : "en";
    if (!first || !last) return NextResponse.json({ ok: false, error: "name" }, { status: 400 });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ ok: false, error: "email" }, { status: 400 });

    const sb = db();

    const { data: existing } = await sb
      .from("waitlist_signups").select("id, code, email_sent_at, first_name").eq("email", email).maybeSingle();
    if (existing?.code) {
      if (!existing.email_sent_at) {
        try {
          await sendKeyEmail(email, existing.first_name || first, existing.code);
          await sb.from("waitlist_signups").update({ email_sent_at: new Date().toISOString(), email_error: null }).eq("id", existing.id);
        } catch (e) {
          await sb.from("waitlist_signups").update({ email_error: String(e) }).eq("id", existing.id);
        }
      }
      return NextResponse.json({ ok: true, key: existing.code, existing: true });
    }

    let key: { id: string; code: string; note: string | null } | null = null;
    for (let i = 0; i < 5 && !key; i++) {
      const { data: free } = await sb
        .from("reward_keys").select("id, code, note, uses, max_uses")
        .like("note", "BATCH-%").filter("uses", "lt", 1).limit(50);
      if (!free || free.length === 0) break;
      const pick = free[Math.floor(Math.random() * free.length)];
      const { data: claimed } = await sb
        .from("reward_keys").update({ uses: (pick.uses || 0) + 1 })
        .eq("id", pick.id).eq("uses", pick.uses || 0)
        .select("id, code, note").maybeSingle();
      if (claimed) key = claimed;
    }
    if (!key) return NextResponse.json({ ok: false, error: "no_keys" }, { status: 409 });

    const ua = req.headers.get("user-agent") || null;
    const { data: row, error: insErr } = await sb
      .from("waitlist_signups")
      .insert({ name: `${first} ${last}`, first_name: first, last_name: last, email, lang,
                key_id: key.id, code: key.code, prize_note: key.note, ip, user_agent: ua })
      .select("id").single();
    if (insErr) {
      await sb.from("reward_keys").update({ uses: 0 }).eq("id", key.id);
      const { data: again } = await sb.from("waitlist_signups").select("code").eq("email", email).maybeSingle();
      if (again?.code) return NextResponse.json({ ok: true, key: again.code, existing: true });
      throw insErr;
    }

    try {
      await sendKeyEmail(email, first, key.code);
      await sb.from("waitlist_signups").update({ email_sent_at: new Date().toISOString() }).eq("id", row.id);
    } catch (e) {
      await sb.from("waitlist_signups").update({ email_error: String(e) }).eq("id", row.id);
    }

    return NextResponse.json({ ok: true, key: key.code, existing: false });
  } catch (e) {
    console.error("waitlist error:", e);
    return NextResponse.json({ ok: false, error: "server" }, { status: 500 });
  }
}

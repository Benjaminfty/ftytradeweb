"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { trackLead } from "@/components/Analytics";

const input =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white " +
  "placeholder:text-white/35 outline-none transition focus:border-white/30 focus:bg-white/[0.06]";

export default function Waitlist() {
  const { t, lang } = useI18n();
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState<{ key: string; existing: boolean } | null>(null);
  const [copied, setCopied] = useState(false);

  const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim());
  const canSubmit = first.trim() && last.trim() && emailOk && terms && !loading;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (!first.trim() || !last.trim()) return setErr(t("wl_err_name"));
    if (!emailOk) return setErr(t("wl_err_email"));
    if (!terms) return setErr(t("wl_err_terms"));
    setLoading(true);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL || "";
      const res = await fetch(`${base}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first: first.trim(), last: last.trim(), email: email.trim(), lang }),
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok || !j.ok) {
        const code = j?.error;
        setErr(code === "too_many" ? t("wl_err_many") : code === "no_keys" ? t("wl_err_nokeys") : code === "email" ? t("wl_err_email") : t("wl_err_server"));
        return;
      }
      if (!j.existing) trackLead(lang);
      setDone({ key: j.key, existing: !!j.existing });
    } catch {
      setErr(t("wl_err_server"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="relative z-10 mx-auto w-[min(1100px,calc(100%-32px))] py-28">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        {/* izquierda */}
        <div
          className="relative flex min-h-[640px] flex-col justify-end overflow-hidden rounded-3xl
                     border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/waitlist/chest.webp"
            alt="Reward Box"
            className="pointer-events-none absolute left-1/2 top-6 w-[78%] max-w-none -translate-x-1/2 select-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9D00]" />
              {t("wl_tag")}
            </span>
            <h3 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white">
              {t("wl_h1")}<br />{t("wl_h2")} <em className="font-serif font-normal italic">{t("wl_h3")}</em>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-white/60">{t("wl_p")}</p>
          </div>
        </div>

        {/* derecha */}
        <div className="mx-auto w-full max-w-md">
          {done ? (
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white">{t("wl_done_t")}</h3>
              <p className="mt-3 text-sm text-white/60">{done.existing ? t("wl_done_existing") : t("wl_done_p")}</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h3 className="text-center text-3xl font-semibold text-white">{t("wl_title")}</h3>
              <p className="mt-2 text-center text-sm text-white/55">{t("wl_sub")}</p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <input className={input} placeholder={t("wl_first")} autoComplete="given-name"
                  value={first} onChange={(e) => setFirst(e.target.value)} />
                <input className={input} placeholder={t("wl_last")} autoComplete="family-name"
                  value={last} onChange={(e) => setLast(e.target.value)} />
              </div>
              <input className={`${input} mt-3`} type="email" placeholder={t("wl_email")}
                autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label className="mt-4 flex items-start gap-2.5 text-xs text-white/60">
                <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 accent-white" />
                <span>
                  {t("wl_terms_pre")}{" "}
                  <a href="/terms" className="text-white underline underline-offset-2">{t("wl_terms_link")}</a>.
                </span>
              </label>

              {err && <p className="mt-3 text-xs text-red-400">{err}</p>}

              <button
                type="submit"
                disabled={!canSubmit}
                className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-semibold text-black
                           transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? t("wl_loading") : t("wl_btn")}
              </button>

              <p className="mt-3 text-center text-xs text-white/40">{t("wl_nospam")}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

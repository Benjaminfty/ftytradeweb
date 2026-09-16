"use client";

import { useState } from "react";
import { useI18n, type Key } from "@/lib/i18n";

type LinkDef = { label: string | Key; href: string; i18n?: boolean };

const DISCORD = "https://discord.gg/kDuDqF6Pd";

const COLS: { title: Key; links: LinkDef[] }[] = [
  { title: "f_programs", links: [
    { label: "Challenge Rapid", href: "#" }, { label: "Challenge Steady", href: "#" }, { label: "Fty Direct", href: "#" } ] },
  { title: "f_company", links: [
    { label: "f_about", href: "#", i18n: true }, { label: "Discord", href: DISCORD }, { label: "f_support", href: "mailto:support@ftytrade.com", i18n: true } ] },
  { title: "f_resources", links: [
    { label: "f_faq", href: "#faq", i18n: true }, { label: "f_terms", href: "/terms", i18n: true }, { label: "f_privacy", href: "/privacy", i18n: true } ] },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const SOCIAL = [
  { name: "X", href: "https://x.com/ftytrade", d: "M18.9 2H22l-7 8 8.2 12h-6.4l-5-6.6L5.9 22H2.8l7.5-8.6L2.4 2h6.6l4.5 6 5.4-6Z" },
  { name: "Instagram", href: "https://www.instagram.com/ftytrade/", d: "M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.4 5.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM21 7.9c-.1-1.6-.4-3-1.6-4.2S16.7 2.2 15.1 2.1C13.4 2 10.6 2 8.9 2.1 7.3 2.2 5.9 2.5 4.7 3.7S3.1 6.3 3 7.9c-.1 1.7-.1 4.5 0 6.2.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.7.1 4.5.1 6.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.2-1.7.2-4.5.2-6.2ZM19 15.5c-.3.9-1 1.6-1.9 1.9-1.3.5-4.4.4-5.1.4s-3.8.1-5.1-.4c-.9-.3-1.6-1-1.9-1.9-.5-1.3-.4-4.4-.4-5.1s-.1-3.8.4-5.1c.3-.9 1-1.6 1.9-1.9 1.3-.5 4.4-.4 5.1-.4s3.8-.1 5.1.4c.9.3 1.6 1 1.9 1.9.5 1.3.4 4.4.4 5.1s.1 3.8-.4 5.1Z" },
  { name: "Discord", href: DISCORD, d: "M20.3 4.4A19.6 19.6 0 0 0 15.4 3l-.2.4a13.3 13.3 0 0 1 4.3 2.2 15.6 15.6 0 0 0-15 0A13.3 13.3 0 0 1 8.8 3.4L8.6 3a19.6 19.6 0 0 0-4.9 1.4C.6 9.1-.2 13.6.2 18a19.7 19.7 0 0 0 6 3l1.3-2.1a12.6 12.6 0 0 1-2-1l.5-.4a14 14 0 0 0 12 0l.5.4a12.6 12.6 0 0 1-2 1l1.3 2.1a19.7 19.7 0 0 0 6-3c.5-5.1-.8-9.6-3.5-13.6ZM8.5 15.3c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Zm7 0c-1.2 0-2.1-1.1-2.1-2.4s.9-2.4 2.1-2.4 2.2 1.1 2.1 2.4c0 1.3-.9 2.4-2.1 2.4Z" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/ftytrade/", d: "M20.4 2H3.6A1.6 1.6 0 0 0 2 3.6v16.8A1.6 1.6 0 0 0 3.6 22h16.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 20.4 2ZM8 19H5V9h3v10ZM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V19h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19Z" },
];

function SoonLink({ href, label }: { href: string; label: string }) {
  const { t } = useI18n();
  const [soon, setSoon] = useState(false);
  const pending = href === "#";
  return (
    <span className="relative inline-flex items-center">
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (!pending) return;
          e.preventDefault();
          setSoon(true);
          setTimeout(() => setSoon(false), 1500);
        }}
        className="text-sm text-white/50 transition hover:text-white"
      >
        {label}
      </a>
      <span
        className={`pointer-events-none ml-2 rounded-full border border-[#FF9D00]/40 bg-[#FF9D00]/15 px-2 py-0.5
                    text-[10px] font-semibold uppercase tracking-wider text-[#FF9D00] transition-opacity duration-200
                    ${soon ? "opacity-100" : "opacity-0"}`}
      >
        {t("f_soon")}
      </span>
    </span>
  );
}

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative z-10 mt-10 border-t border-white/10 bg-black pb-10 pt-24">
      <div className="mx-auto w-[min(1100px,calc(100%-32px))]">
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t("f_title")}</h2>
          <p className="mt-4 max-w-md text-[15px] text-white/65">{t("f_p")}</p>
          <a
            href="#waitlist"
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-2 pl-5 pr-2 text-sm text-white/60 transition hover:border-white/30"
          >
            {t("f_join")}
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">{t("f_claim")}</span>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col justify-between gap-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Ftytrade" className="h-7 w-auto self-start" />
            <div className="flex items-center gap-4 text-white/45">
              {SOCIAL.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="transition hover:text-white">
                  <Icon d={s.d} />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="text-sm font-medium text-white">{t(c.title)}</p>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <SoonLink href={l.href} label={l.i18n ? t(l.label as Key) : l.label} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/45">&copy; {new Date().getFullYear()} FTY MARKET LLC. {t("f_rights")}</p>
            <div className="flex gap-6 text-xs text-white/45">
              <a href="/terms" className="transition hover:text-white">{t("f_terms")}</a>
              <a href="/privacy" className="transition hover:text-white">{t("f_privacy")}</a>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-[11px] leading-relaxed text-white/35">{t("f_legal")}</p>
        </div>
      </div>
    </footer>
  );
}

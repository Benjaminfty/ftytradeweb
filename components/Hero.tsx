"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t, lang } = useI18n();
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-16 pt-[11vh] text-center sm:px-10">
      <div className="flex max-w-3xl flex-col items-center">
        {/* Badge — igual que referencia: pill oscuro, borde fino, mono */}
        <span className="relative inline-flex overflow-hidden rounded-full p-px">
          <span
            aria-hidden
            className="absolute inset-[-150%] animate-[spin_3s_linear_infinite]"
            style={{ background: "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(255,157,0,0.25) 300deg, #FF9D00 335deg, #FFD08A 350deg, transparent 360deg)" }}
          />
          <span className="relative inline-flex items-center rounded-full border border-[#FF9D00]/20 bg-[#0B0B0D] px-5 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-white/90">
            {t("hero_badge")}
          </span>
        </span>

        {/* Title — 2 líneas, 60px máx */}
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[52px] md:text-[60px]">
          {t("hero_turn")} {t("hero_trading")}
          <br />
          <span className="text-[#FF9D00]">{t("hero_into")}</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 max-w-[560px] text-[17px] leading-[1.45] text-white/70 sm:text-[18px]">
          {t("hero_sub_a")}<span className="font-semibold text-white">{t("hero_sub_b1")}</span>{t("hero_sub_c")}<span className="font-semibold text-white">{t("hero_sub_b2")}</span>{t("hero_sub_d")}
        </p>

        {/* Benefits — caja de icono 36px con borde, texto 18px */}
        <ul className={`${lang === "en" ? "mt-20" : "mt-7"} flex w-fit flex-col gap-3 text-left`}>
          {(["hero_p1", "hero_p2", "hero_p3"] as const).map((k) => (
            <li key={k} className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FF9D00]/35 bg-[#0E0E11]">
                <Image src="/bolticon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
              </span>
              <span className="text-[17px] font-medium text-white/70 sm:text-[18px]">{t(k)}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#waitlist"
          className="mt-9 inline-flex rounded-full bg-gradient-to-b from-[#FFB84D] to-[#FF9D00]
                     px-7 py-3 text-sm font-semibold text-black
                     shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                     transition hover:brightness-110"
        >
          {t("hero_cta")}
        </a>
      </div>
    </section>
  );
}

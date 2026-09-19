"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-[16vh] text-center sm:px-10">
      {/* Badge */}
      <span className="mb-6 inline-flex items-center rounded-full border border-[#FF9D00]/60 bg-[#0B0B0D] px-5 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 shadow-[0_0_14px_rgba(255,157,0,0.35),inset_0_0_10px_rgba(255,157,0,0.15)]">
        {t("hero_badge")}
      </span>

      {/* Title */}
      <h1 className="max-w-4xl text-[40px] font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-[64px]">
        {t("hero_turn")} {t("hero_trading")}
        <br />
        <span className="text-[#FF9D00]">{t("hero_into")}</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/75 sm:text-lg">
        {t("hero_sub_a")}<span className="font-semibold text-white">{t("hero_sub_b1")}</span>{t("hero_sub_c")}<span className="font-semibold text-white">{t("hero_sub_b2")}</span>{t("hero_sub_d")}
      </p>

      {/* Benefits */}
      <ul className="mt-7 flex w-fit flex-col items-start gap-3.5 text-left">
        {(["hero_p1", "hero_p2", "hero_p3"] as const).map((k) => (
          <li key={k} className="flex items-center gap-3.5 text-[17px] font-medium text-white/90">
            <Image src="/bolticon.png" alt="" width={32} height={32} className="h-8 w-8 shrink-0 rounded-lg" />
            <span>{t(k)}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#waitlist"
        className="mt-8 rounded-full bg-gradient-to-b from-[#FFB84D] to-[#FF9D00]
                   px-7 py-3 text-sm font-semibold text-black
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                   transition hover:brightness-110"
      >
        {t("hero_cta")}
      </a>
    </section>
  );
}

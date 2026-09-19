"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="flex flex-col items-center px-6 pt-[24vh] text-center">
      <h1
        className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text
                   text-6xl font-bold leading-[1.05] tracking-tight text-transparent
                   sm:text-7xl md:text-8xl"
      >
        {t("hero_turn")}{" "}
        <Image
          src="/heroicon.png"
          alt=""
          width={210}
          height={190}
          priority
          className="mx-2 inline-block h-[0.92em] w-auto translate-y-[-0.05em] align-middle"
        />{" "}
        {t("hero_trading")}
        <br />
        <span className="bg-gradient-to-b from-[#FFB84D] via-[#FF9D00] to-[#FF9D00]/70 bg-clip-text text-transparent">
          {t("hero_into")}
        </span>
      </h1>

      <p className="mt-5 max-w-md text-[13px] leading-relaxed text-white/45 sm:text-sm">
        {t("hero_sub")}
      </p>

      <a
        href="#waitlist"
        className="mt-7 rounded-full bg-gradient-to-b from-[#FFB84D] to-[#FF9D00]
                   px-6 py-2.5 text-[13px] font-semibold text-black
                   shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                   transition hover:brightness-110"
      >
        {t("hero_cta")}
      </a>
    </section>
  );
}

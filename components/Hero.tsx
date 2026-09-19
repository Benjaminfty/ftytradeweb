"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="flex flex-col items-center px-6 pt-[24vh] text-center">
      <h1
        className="text-white
                   text-6xl font-bold leading-[1.05] tracking-tight
                   sm:text-7xl md:text-8xl"
      >
        {t("hero_turn")} {t("hero_trading")}
        <br />
        <span className="text-[#FF9D00]">
          {t("hero_into")}
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
        {t("hero_sub_a")}<span className="font-semibold text-white">{t("hero_sub_b1")}</span>{t("hero_sub_c")}<span className="font-semibold text-white">{t("hero_sub_b2")}</span>{t("hero_sub_d")}
      </p>

      <ul className="mx-auto mt-8 flex w-fit flex-col items-start gap-5 text-left">
        {(["hero_p1", "hero_p2", "hero_p3"] as const).map((k) => (
          <li key={k} className="flex items-center gap-4 text-lg font-medium text-white sm:text-xl">
            <Image src="/crownicon.png" alt="" width={44} height={44} className="h-11 w-11 shrink-0" />
            {t(k)}
          </li>
        ))}
      </ul>

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

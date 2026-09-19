"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-[11vh] sm:px-10">
      <div className="max-w-3xl">
        {/* Badge — igual que referencia: pill oscuro, borde fino, mono */}
        <span className="inline-flex items-center rounded-lg border border-[#FF9D00]/45 bg-[#0E0E11] px-3.5 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-white shadow-[0_0_0_1px_rgba(255,157,0,0.08),0_0_18px_rgba(255,157,0,0.18)]">
          {t("hero_badge")}
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
        <ul className="mt-7 flex flex-col gap-3">
          {(["hero_p1", "hero_p2", "hero_p3"] as const).map((k) => (
            <li key={k} className="flex items-center gap-3.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FF9D00]/35 bg-[#0E0E11]">
                <Image src="/bolticon.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
              </span>
              <span className="text-[17px] font-medium text-white sm:text-[18px]">{t(k)}</span>
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

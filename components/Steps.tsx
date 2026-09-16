"use client";

import { useI18n, type Key } from "@/lib/i18n";

// x: desplazamiento horizontal (px) · y: vertical (px) · h: alto del visual (px)
const STEPS: { n: string; t: Key; d: Key; img: string; x: number; y: number; h: number }[] = [
  { n: "1", t: "s1_t", d: "s1_d", img: "/steps/step1v2.webp", x: 0, y: 12, h: 290 },
  { n: "2", t: "s2_t", d: "s2_d", img: "/steps/step2v2.webp", x: 40, y: 12, h: 270 },
  { n: "3", t: "s3_t", d: "s3_d", img: "/steps/step3v2.webp", x: 70, y: 12, h: 270 },
];

export default function Steps() {
  const { t } = useI18n();
  return (
    <section className="relative z-10 mx-auto w-[min(1100px,calc(100%-32px))] py-28">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {t("steps_title")}
      </h2>
      <p className="mx-auto mt-3 max-w-md text-center text-[15px] text-white/65">{t("steps_sub")}</p>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="relative h-[480px] overflow-hidden rounded-3xl
                       border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl"
          >
            <div className="relative z-10 p-7">
              <span className="pointer-events-none absolute right-6 top-2 text-[128px] font-bold leading-none tracking-tight text-white/[0.07]">{s.n}</span>
              <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">{t(s.t)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{t(s.d)}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.img}
              alt=""
              className="pointer-events-none absolute bottom-0 left-1/2 w-auto max-w-none select-none"
              style={{ height: s.h, transform: `translate(calc(-50% + ${s.x}px), ${s.y}px)` }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

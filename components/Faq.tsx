"use client";

import { useState } from "react";
import { useI18n, type Key } from "@/lib/i18n";

const FAQS: { q: Key; a: Key }[] = [
  { q: "q1", a: "a1" }, { q: "q2", a: "a2" }, { q: "q3", a: "a3" }, { q: "q4", a: "a4" },
  { q: "q5", a: "a5" }, { q: "q6", a: "a6" }, { q: "q7", a: "a7" },
];

export default function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative z-10 mx-auto w-[min(1100px,calc(100%-32px))] py-28">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            {t("faq_t1")}<br />{t("faq_t2")}
          </h2>
          <p className="mt-4 max-w-sm text-[15px] text-white/65">{t("faq_p")}</p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`relative overflow-hidden rounded-2xl border px-7 py-6 text-left
                            bg-gradient-to-b from-[#161618] to-[#0B0B0C] transition-all duration-300
                            ${isOpen ? "border-[#FF9D00]/40" : "border-white/[0.08] hover:border-white/20"}`}
              >
                <span
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(55% 120% at 0% 100%, rgba(255,120,0,0.32) 0%, rgba(255,120,0,0.10) 40%, transparent 70%)",
                    opacity: isOpen ? 1 : 0.7,
                  }}
                />
                <div className="relative flex items-center justify-between gap-6">
                  <span className="text-base font-semibold text-white">{t(f.q)}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-lg leading-none transition
                                ${isOpen ? "border-white bg-white text-black" : "border-white/20 text-[#FF9D00]"}`}
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </div>
                <div
                  className="relative grid transition-[grid-template-rows] duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 text-[15px] leading-relaxed text-white/70">{t(f.a)}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function GlassBar() {
  const { lang, setLang } = useI18n();
  return (
    <div
      className="fixed left-1/2 top-4 z-50 flex w-[min(1100px,calc(100%-32px))]
                 -translate-x-1/2 items-center justify-center rounded-2xl
                 border border-white/20 px-6 py-3.5
                 bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.03]
                 shadow-[0_10px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.06)]
                 backdrop-blur-2xl backdrop-saturate-150"
    >
      <span
        className="pointer-events-none absolute inset-x-6 top-0 h-px
                   bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />
      <Image src="/logo.png" alt="Ftytrade" width={128} height={30} priority className="h-[30px] w-auto" />

      {/* selector de idioma */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-full border border-white/15 bg-black/30 p-0.5 text-[11px] font-semibold">
        {(["en", "es"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-full px-2.5 py-1 uppercase transition ${
              lang === l ? "bg-white text-black" : "text-white/60 hover:text-white"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

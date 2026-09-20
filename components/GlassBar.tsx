"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n, langPath } from "@/lib/i18n";

export default function GlassBar() {
  const { lang } = useI18n();
  return (
    <div
      className="fixed left-1/2 top-4 z-50 flex w-[min(1100px,calc(100%-24px))]
                 -translate-x-1/2 items-center justify-between rounded-2xl
                 border border-white/20 px-4 py-3 sm:px-6 sm:py-3.5
                 bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.03]
                 shadow-[0_10px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.06)]
                 backdrop-blur-2xl backdrop-saturate-150"
    >
      <span
        className="pointer-events-none absolute inset-x-6 top-0 h-px
                   bg-gradient-to-r from-transparent via-white/60 to-transparent"
      />

      <Link href={langPath(lang)} aria-label="Ftytrade" className="shrink-0">
        <Image src="/logo.png" alt="Ftytrade" width={128} height={30} priority className="h-[26px] w-auto sm:h-[30px]" />
      </Link>

      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://discord.gg/kDuDqF6Pd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[12px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition hover:border-white/30 hover:bg-black/60 sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px]"
        >
          <span className="hidden xs:inline sm:inline">Join </span>Discord
          <Image src="/bolticon.png" alt="" width={16} height={16} className="h-4 w-4 rounded sm:h-[18px] sm:w-[18px]" />
        </a>

        <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-black/30 p-0.5 text-[11px] font-semibold">
          {(["en", "es"] as const).map((l) => (
            <Link
              key={l}
              href={langPath(l)}
              hrefLang={l}
              className={`rounded-full px-2 py-1 uppercase transition sm:px-2.5 ${
                lang === l ? "bg-white text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

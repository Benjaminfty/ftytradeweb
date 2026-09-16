"use client";

import { useI18n } from "@/lib/i18n";

const LOGOS = [
  { name: "MotiveWave", file: "motivewave.png" },
  { name: "Quantower", file: "quantower.png" },
  { name: "Tradesea", file: "tradesea.png" },
  { name: "Rithmic", file: "rithmic.png" },
];

function Group() {
  return (
    <div className="flex shrink-0 items-center">
      {LOGOS.map((l) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={l.file}
          src={`/partners/${l.file}`}
          alt={l.name}
          className="mr-20 h-7 w-auto opacity-50 transition hover:opacity-100"
        />
      ))}
    </div>
  );
}

export default function Partners() {
  const { t } = useI18n();
  return (
    <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-5">
      <p className="text-sm font-medium text-white/60">{t("partners")}</p>
      <div
        className="w-[min(900px,100%)] overflow-hidden
                   [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="flex w-max" style={{ animation: "fty-marquee-right 30s linear infinite" }}>
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
}

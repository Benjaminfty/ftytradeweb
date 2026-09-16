export default function HeroStripes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/backfan2.webp"
        alt=""
        className="w-full max-w-none translate-y-[30%] select-none
                   opacity-65 [filter:brightness(0.36)_contrast(1.05)]"
      />
    </div>
  );
}

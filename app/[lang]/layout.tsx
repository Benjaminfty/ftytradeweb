import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { I18nProvider, type Lang } from "@/lib/i18n";

const archivo = Archivo({ subsets: ["latin"], display: "swap" });

const SITE = "https://ftytrade.com";
const LANGS: Lang[] = ["en", "es"];

const SEO = {
  en: {
    title: "Ftytrade Futures — Futures Prop Firm | Join the Waitlist & Claim Your Reward Key",
    description:
      "Ftytrade Futures is a futures prop firm launching soon. Join the waitlist and claim one of 1,000 Reward Keys — every box hides a funded account, a discount of up to 80% or a free reset.",
  },
  es: {
    title: "Ftytrade Futures — Empresa de fondeo de futuros | Lista de espera y Reward Key",
    description:
      "Ftytrade Futures es una empresa de fondeo de futuros que lanza muy pronto. Únete a la lista de espera y consigue una de las 1.000 Reward Keys: cada caja esconde una cuenta fondeada, un descuento de hasta el 80 % o un reset gratis.",
  },
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l: Lang = lang === "es" ? "es" : "en";
  const path = l === "es" ? "/es" : "/";
  return {
    metadataBase: new URL(SITE),
    title: SEO[l].title,
    description: SEO[l].description,
    alternates: {
      canonical: path,
      languages: { en: "/", es: "/es", "x-default": "/" },
    },
    openGraph: {
      type: "website",
      url: path,
      siteName: "Ftytrade Futures",
      title: SEO[l].title,
      description: SEO[l].description,
      locale: l === "es" ? "es_ES" : "en_US",
      alternateLocale: l === "es" ? ["en_US"] : ["es_ES"],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ftytrade Futures" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ftytrade",
      title: SEO[l].title,
      description: SEO[l].description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!LANGS.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  return (
    <html lang={l} className={archivo.className}>
      <body className="bg-black text-white antialiased">
        <I18nProvider lang={l}>{children}</I18nProvider>
      </body>
    </html>
  );
}

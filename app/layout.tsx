import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const archivo = Archivo({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Ftytrade Futures — Join the waitlist",
  description: "Join the Ftytrade Futures waitlist and claim your Reward Key. Every box hides a funded account, a discount or a free reset.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.className}>
      <body className="bg-black text-white antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

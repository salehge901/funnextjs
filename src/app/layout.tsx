import type { Metadata } from "next";
import { Geist_Mono, Onest } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

import { FigmaOverlay } from "@/components/figma/FigmaOverlay";
import { SiteFooter } from "@/components/shell/SiteFooter";
import { CurrencyProvider } from "@/components/shell/CurrencyProvider";
import { SiteHeader } from "@/components/shell/SiteHeader";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VirtGold",
  description: "MMO services and boosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${geistMono.variable} font-sans antialiased bg-[#0D0C1D] text-white`}>
        <CurrencyProvider>
          <SiteHeader />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
          <SiteFooter marketplaceCards={[]} />
        </CurrencyProvider>
        <Suspense fallback={null}>
          <FigmaOverlay />
        </Suspense>
      </body>
    </html>
  );
}


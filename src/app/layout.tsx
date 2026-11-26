import "./globals.css";
import PortfolioFrame from "@/components/portfolio/portfolio-frame";
import { navigation } from "@/content/navigation";

import { Geist, Geist_Mono, Inter, Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kieran Ho | Projects, lifestyle & writing",
  description: "Kieran Ho — Business Analytics at NUS. Projects, experience, lifestyle, and things I’m working on.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const reenieBeanie = Reenie_Beanie({
  variable: "--font-reenie-beanie",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${reenieBeanie.variable} antialiased`}
        suppressHydrationWarning
      >
        <PortfolioFrame navigation={navigation}>{children}</PortfolioFrame>
        <Analytics />
      </body>
    </html>
  );
}

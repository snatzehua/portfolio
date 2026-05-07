import "./styles.css";
import "./globals.css";

import { Geist, Geist_Mono, Inter, Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "@/components/page-transition/page-transition";

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
        <PageTransition>
          {children}
          <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}

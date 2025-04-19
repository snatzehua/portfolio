"use client";

import "./styles.css";
import "./globals.css";

import { Geist, Geist_Mono, Inter, Reenie_Beanie } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavBar from "@/components/navbar/navbar";
import MobileWarning from "@/components/mobile-warning/mobile-warning";

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
  const pathname = usePathname();

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh(); // Run on mount
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${reenieBeanie.variable} antialiased`}
      >
        <MobileWarning />

        <NavBar />
        <motion.div
          key={pathname}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full"
          style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
        >
          {children}
          <Analytics />
        </motion.div>
        <footer className="site-footer">
          <p>© 2025 Kieran Ho. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

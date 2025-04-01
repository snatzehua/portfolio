"use client";

import "./styles.css";
import "./globals.css";

import { Geist, Geist_Mono, Inter, Reenie_Beanie } from "next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar/navbar"; // Adjust path accordingly

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${reenieBeanie.variable} antialiased`}
      >
        <NavBar />
        <motion.div
          key={pathname}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          exit={{ y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="min-h-screen w-full bg-[#EDEBE9]" // or whatever your page bg is
        >
          {children}
        </motion.div>
        <footer className="site-footer">
          <p>© 2025 Kieran Ho. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// O'ZGARTIRILDI: variable qo'shildi
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kitobchi",
  description: "Kitobchi - Kitoblar do'konini qidirish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* O'ZGARTIRILDI: asosiy shrift Space Grotesk bo'lishi uchun body'ga className berildi */}
      <body className={`${spaceGrotesk.className} min-h-full flex flex-col`}>
        <Navbar />
        {children}
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
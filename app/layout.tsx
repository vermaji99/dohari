import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import ScrollAnimationBg from "@/components/ScrollAnimationBg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dohrighat | Where Heritage Meets the River",
  description: "Official website for Dohrighat, Uttar Pradesh - Explore heritage, culture, temples, canals, rivers, education, food, and the beautiful Ghaghara River.",
  keywords: ["Doharighat", "Dohrighat Uttar Pradesh", "Ghaghara River", "Dohrighat temples", "Dohrighat canals", "Dohrighat tourism", "Muktidham Dohrighat"],
  openGraph: {
    title: "Dohrighat | Where Heritage Meets the River",
    description: "Official website for Dohrighat, Uttar Pradesh - Explore heritage, culture, temples, canals, rivers, education, food, and the beautiful Ghaghara River.",
    type: "website",
    locale: "en_IN",
    siteName: "Dohrighat Official",
    images: [
      {
        url: "/images/canal_dam.png",
        width: 1200,
        height: 630,
        alt: "Dohrighat Canal Dam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dohrighat | Where Heritage Meets the River",
    description: "Official website for Dohrighat, Uttar Pradesh - Explore heritage, culture, temples, canals, rivers, education, food, and the beautiful Ghaghara River.",
    images: ["/images/canal_dam.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        <LenisProvider>
          <ScrollAnimationBg />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

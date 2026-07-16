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
  title: "Dohrighat - Official Website | Dohrighat Mau Uttar Pradesh",
  description: "Official website for Dohrighat (Mau, Uttar Pradesh). Explore heritage, temples, canals, Ghaghara River, education, food, tourism, and culture of Dohrighat - Mau.",
  keywords: ["Doharighat", "Dohrighat Mau", "Mau Dohari", "Dohrighat Uttar Pradesh", "Dohrighat Mau UP", "Ghaghara River", "Dohrighat temples", "Dohrighat canals", "Dohrighat tourism", "Muktidham Dohrighat", "Dohrighat city", "Dohrighat Mau district"],
  metadataBase: new URL("https://dohari.vercel.app"),
  openGraph: {
    title: "Dohrighat - Official Website | Dohrighat Mau Uttar Pradesh",
    description: "Official website for Dohrighat (Mau, Uttar Pradesh). Explore heritage, temples, canals, Ghaghara River, education, food, tourism, and culture of Dohrighat - Mau.",
    type: "website",
    locale: "en_IN",
    siteName: "Dohrighat Official",
    url: "https://dohari.vercel.app",
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
    title: "Dohrighat - Official Website | Dohrighat Mau Uttar Pradesh",
    description: "Official website for Dohrighat (Mau, Uttar Pradesh). Explore heritage, temples, canals, Ghaghara River, education, food, tourism, and culture of Dohrighat - Mau.",
    images: ["/images/canal_dam.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dohari.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "City",
    name: "Dohrighat",
    alternateName: ["Dohari", "Dohrighat Mau"],
    description: "Official website for Dohrighat (Mau, Uttar Pradesh). Explore heritage, temples, canals, Ghaghara River, education, food, tourism, and culture of Dohrighat - Mau.",
    url: "https://dohari.vercel.app",
    containedIn: {
      "@type": "AdministrativeArea",
      name: "Mau",
      containedIn: {
        "@type": "State",
        name: "Uttar Pradesh",
        addressCountry: "IN"
      }
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Uttar Pradesh",
      addressLocality: "Mau",
      addressCountry: "IN"
    },
    sameAs: []
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

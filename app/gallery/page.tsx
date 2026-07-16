import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Photo Gallery - Dohrighat Images | Dohari Mau",
  description: "Browse through beautiful photos of Dohrighat, including temples, canals, rivers, and more in this photo gallery.",
  keywords: ["Dohrighat gallery", "Dohrighat photos", "Dohrighat images", "photo gallery Mau", "Ghaghara River photos"]
};

export default function GalleryPage() {
  return <GalleryClient />;
}

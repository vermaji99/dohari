import type { Metadata } from "next";
import PlacesClient from "./places-client";

export const metadata: Metadata = {
  title: "Famous Places - Dohrighat Tourist Attractions | Dohari Mau",
  description: "Discover the famous places and tourist attractions in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat places", "Dohrighat tourist spots", "famous places Mau", "Dohrighat attractions", "tourism Dohrighat"]
};

export default function PlacesPage() {
  return <PlacesClient />;
}

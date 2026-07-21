import type { Metadata } from "next";
import JewelleryClient from "./jewellery-client";

export const metadata: Metadata = {
  title: "Jewellery Shops - Local Jewelers | Dohrighat Mau",
  description: "Explore local jewellery shops and jewelers in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat jewellery", "jewellers Dohrighat", "jewelry shops Mau", "gold shops Dohrighat"]
};

export default function JewelleryPage() {
  return <JewelleryClient />;
}

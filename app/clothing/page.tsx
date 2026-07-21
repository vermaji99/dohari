import type { Metadata } from "next";
import ClothingClient from "./clothing-client";

export const metadata: Metadata = {
  title: "Clothing & Sarees - Local Shops | Dohrighat Mau",
  description: "Find clothing stores, saree shops, and fashion retailers in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat clothing", "saree shops Dohrighat", "fashion stores Mau", "textile shops Dohrighat"]
};

export default function ClothingPage() {
  return <ClothingClient />;
}

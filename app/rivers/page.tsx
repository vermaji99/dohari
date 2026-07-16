import type { Metadata } from "next";
import RiversClient from "./rivers-client";

export const metadata: Metadata = {
  title: "Rivers & Pools - Dohrighat Natural Beauty | Dohari Mau",
  description: "Explore the rivers and pools of Dohrighat, including the sacred Ghaghara River in Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat rivers", "Ghaghara River", "Dohrighat pools", "rivers Mau UP", "natural beauty Dohrighat"]
};

export default function RiversPage() {
  return <RiversClient />;
}

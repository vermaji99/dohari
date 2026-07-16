import type { Metadata } from "next";
import CanalsClient from "./canals-client";

export const metadata: Metadata = {
  title: "Canals & Dams of Dohrighat - Irrigation System | Dohari Mau",
  description: "Explore the impressive canals and dams of Dohrighat, a crucial engineering marvel for irrigation in Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat canals", "Dohrighat dam", "canals Mau UP", "irrigation Dohrighat", "Dohrighat water system"]
};

export default function CanalsPage() {
  return <CanalsClient />;
}

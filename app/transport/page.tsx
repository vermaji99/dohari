import type { Metadata } from "next";
import TransportClient from "./transport-client";

export const metadata: Metadata = {
  title: "Transport - Local Travel | Dohrighat Mau",
  description: "Information about local transport and travel options in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat transport", "travel Dohrighat", "local transport Mau"]
};

export default function TransportPage() {
  return <TransportClient />;
}

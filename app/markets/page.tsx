import type { Metadata } from "next";
import MarketsClient from "./markets-client";

export const metadata: Metadata = {
  title: "Markets Guide - Local Shopping in Dohrighat | Dohari Mau",
  description: "Explore the local markets of Dohrighat, Uttar Pradesh. Discover shopping areas, markets, and bazaars in this historic town.",
  keywords: ["Dohrighat markets", "Dohrighat shopping", "local markets Mau", "markets guide Dohrighat", "Uttar Pradesh markets"]
};

export default function MarketsPage() {
  return <MarketsClient />;
}

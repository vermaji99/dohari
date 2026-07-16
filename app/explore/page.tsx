import type { Metadata } from "next";
import ExploreClient from "./explore-client";

export const metadata: Metadata = {
  title: "Explore Dohrighat - Discover the Town | Dohari Mau",
  description: "Explore Dohrighat, a historic town in Mau district, Uttar Pradesh. Discover temples, rivers, canals, and more on the banks of Ghaghara River.",
  keywords: ["Explore Dohrighat", "Dohrighat tourism", "Dohrighat attractions", "Ghaghara River", "Mau district tourism"]
};

export default function ExplorePage() {
  return <ExploreClient />;
}

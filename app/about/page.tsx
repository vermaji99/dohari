import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Dohrighat - History, Heritage & Culture | Dohari Mau UP",
  description: "Learn about the rich history and heritage of Dohrighat, a historic town in Mau district, Uttar Pradesh. Discover the cultural significance of this sacred place on the banks of Ghaghara River.",
  keywords: ["About Dohrighat", "Dohrighat history", "Dohrighat heritage", "Dohrighat Mau culture", "Ghaghara River Dohrighat"]
};

export default function AboutPage() {
  return <AboutClient />;
}

import type { Metadata } from "next";
import TemplesClient from "./temples-client";

export const metadata: Metadata = {
  title: "Temples of Dohrighat - Sacred Places | Dohari Mau",
  description: "Explore the sacred temples of Dohrighat, including spiritual sites in Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat temples", "temples Mau UP", "sacred places Dohrighat", "spiritual sites Dohrighat", "Dohrighat mandir"]
};

export default function TemplesPage() {
  return <TemplesClient />;
}

import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Dohrighat - Get in Touch | Dohari Mau UP",
  description: "Contact us for more information about Dohrighat, Uttar Pradesh. Reach out to explore this historic town on the banks of Ghaghara River.",
  keywords: ["Contact Dohrighat", "Dohrighat info", "Dohrighat Mau contact", "Ghaghara River Dohrighat", "Dohrighat tourism"]
};

export default function ContactPage() {
  return <ContactClient />;
}

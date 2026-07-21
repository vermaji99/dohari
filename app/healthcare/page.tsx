import type { Metadata } from "next";
import HealthcareClient from "./healthcare-client";

export const metadata: Metadata = {
  title: "Healthcare - Hospitals & Medical Facilities | Dohrighat Mau",
  description: "Find hospitals, clinics, and medical facilities in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat hospitals", "medical facilities Dohrighat", "healthcare Mau", "clinics Dohrighat"]
};

export default function HealthcarePage() {
  return <HealthcareClient />;
}

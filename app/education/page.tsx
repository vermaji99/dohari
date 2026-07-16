import type { Metadata } from "next";
import EducationClient from "./education-client";

export const metadata: Metadata = {
  title: "Education in Dohrighat - Schools & Colleges | Dohari Mau",
  description: "Discover the educational institutions in Dohrighat, including schools and colleges in Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat schools", "Dohrighat colleges", "education Mau UP", "Dohrighat institutions", "schools in Dohrighat"]
};

export default function EducationPage() {
  return <EducationClient />;
}

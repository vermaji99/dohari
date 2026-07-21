import type { Metadata } from "next";
import EventsClient from "./events-client";

export const metadata: Metadata = {
  title: "Events & Festivals - Local Celebrations | Dohrighat Mau",
  description: "Explore events, festivals, and local celebrations in Dohrighat, Mau district, Uttar Pradesh.",
  keywords: ["Dohrighat events", "festivals Dohrighat", "local celebrations Mau"]
};

export default function EventsPage() {
  return <EventsClient />;
}

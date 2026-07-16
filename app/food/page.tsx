import type { Metadata } from "next";
import FoodClient from "./food-client";

export const metadata: Metadata = {
  title: "Food Guide - Dohrighat Local Cuisine | Dohari Mau",
  description: "Explore the local cuisine and food guide of Dohrighat, Uttar Pradesh. Discover authentic flavors of this historic town.",
  keywords: ["Dohrighat food", "Dohrighat cuisine", "local food Mau", "food guide Dohrighat", "Uttar Pradesh food"]
};

export default function FoodPage() {
  return <FoodClient />;
}

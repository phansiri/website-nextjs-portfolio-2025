import type { Metadata } from "next";
import HomePageClient from "../components/cards/HomePageClient";

export const metadata: Metadata = {
  description: "Welcome to the portfolio of Lit Phansiri. Explore my projects and experience as a Full Stack Data Scientist and U.S. Marine, specializing in Generative AI.",
};

export default function Page() {
  return <HomePageClient />;
}

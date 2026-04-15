import AboutClient from "./AboutClient";

export const metadata = {
  title: "About Us | Clarity Estimates LLC",
  description: "Learn about Clarity Estimates LLC. We provide expert construction estimating and material takeoff services with precision, integrity, and excellence.",
  keywords: ["about Clarity Estimates", "construction consultants", "expert estimators", "precision estimating"],
  openGraph: {
    title: "About Us | Clarity Estimates LLC",
    description: "Expert construction estimating and material takeoff services with precision and integrity.",
    url: "https://www.clarityestimates.com/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

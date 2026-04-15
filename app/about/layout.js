export const metadata = {
  title: "About Us",
  description:
    "Learn about Clarity Estimates LLC — our mission, vision, and the expert team of certified estimators behind every precision-driven construction cost estimate. 12+ years of excellence.",
  keywords: [
    "about Clarity Estimates",
    "construction estimating company",
    "certified estimators",
    "ASPE professional estimators",
    "construction estimation experts",
    "pre-construction consulting team",
  ],
  openGraph: {
    title: "About Us | Clarity Estimates LLC",
    description:
      "Meet the team behind Clarity Estimates LLC. Over 12 years of experience, 5,000+ projects estimated, and $2B+ in bid value managed with absolute precision.",
    url: "https://www.clarityestimates.com/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Clarity Estimates LLC",
      },
    ],
  },
  twitter: {
    title: "About Us | Clarity Estimates LLC",
    description:
      "Meet the team behind Clarity Estimates LLC. Precision. Integrity. Excellence.",
  },
};

export default function AboutLayout({ children }) {
  return children;
}

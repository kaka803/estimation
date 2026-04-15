import { servicesData } from "../../data/servicesData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  const serviceMetaMap = {
    "construction-estimating": {
      keywords: [
        "construction estimating services",
        "construction cost analysis",
        "bid management",
        "material takeoff",
        "construction cost estimator",
      ],
    },
    "residential-estimating": {
      keywords: [
        "residential estimating",
        "home construction estimates",
        "renovation cost estimate",
        "custom home estimating",
        "remodeling takeoff",
      ],
    },
    "commercial-estimating": {
      keywords: [
        "commercial estimating",
        "commercial construction cost",
        "retail construction estimate",
        "office building takeoff",
        "commercial bid management",
      ],
    },
    "industrial-estimating": {
      keywords: [
        "industrial estimating",
        "heavy industrial cost estimate",
        "industrial piping takeoff",
        "structural steel estimating",
        "manufacturing plant estimate",
      ],
    },
    "construction-takeoff": {
      keywords: [
        "construction material takeoff",
        "digital blueprint measurement",
        "quantity takeoff services",
        "lumber takeoff",
        "material list for construction",
      ],
    },
    "estimating-consultant": {
      keywords: [
        "estimating consultant",
        "construction bidding consultant",
        "pre-construction consulting",
        "estimating software selection",
        "construction process audit",
      ],
    },
  };

  const extraKeywords = serviceMetaMap[slug]?.keywords || [];

  return {
    title: data.title,
    description: data.description,
    keywords: [
      ...extraKeywords,
      "Clarity Estimates LLC",
      "construction estimating",
    ],
    openGraph: {
      title: `${data.title} | Clarity Estimates LLC`,
      description: data.subtitle,
      url: `https://www.clarityestimates.com/services/${slug}`,
      images: [
        {
          url: data.image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      title: `${data.title} | Clarity Estimates LLC`,
      description: data.subtitle,
      images: [data.image || "/og-image.png"],
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}

import { servicesData } from "../../data/servicesData";
import ServiceClient from "./ServiceClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} | Clarity Estimates LLC`,
      description: data.description,
      url: `https://www.clarityestimates.com/services/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <ServiceClient slug={slug} />;
}

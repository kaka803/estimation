import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Clarity Estimates LLC for professional construction estimating services. We are here to help you with your next project.",
  keywords: ["contact Clarity Estimates", "get estimating quote", "construction estimator contact"],
  openGraph: {
    title: "Contact | Clarity Estimates LLC",
    description: "Get in touch with Clarity Estimates LLC for professional construction estimating services.",
    url: "https://www.clarityestimates.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

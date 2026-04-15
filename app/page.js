import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import WhyHireUs from "./components/WhyHireUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export const metadata = {
  title: "Clarity Estimates LLC | Expert Construction Estimating & Material Takeoffs",
  description:
    "Clarity Estimates LLC delivers professional construction cost estimating and material takeoff services. Accurate, fast, and data-driven estimates for residential, commercial, and industrial projects.",
  keywords: [
    "construction estimating services",
    "material takeoff services",
    "construction cost estimator",
    "residential estimating",
    "commercial estimating",
    "industrial estimating",
    "construction consultant",
    "bid management",
    "Clarity Estimates LLC",
  ],
  openGraph: {
    title: "Clarity Estimates LLC | Expert Construction Estimating & Material Takeoffs",
    description:
      "Professional material takeoff and construction cost estimating services. Accurate, detailed, and data-driven estimates to help you bid with confidence.",
    url: "https://www.clarityestimates.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <WhyHireUs />
      <FAQ />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

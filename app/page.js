import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import WhyHireUs from "./components/WhyHireUs";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

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

"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2, Shield, Zap, Target, Award, Users, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".about-hero-content", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
      });

      // Reveal Animations for sections
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 92%", // Reveal sooner
          },
        });
      });

    });

    return () => ctx.revert();
  }, []);

  const coreValues = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity",
      desc: "Honest, transparent estimations that build long-lasting partnerships with our clients.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision",
      desc: "Every inch and every nail accounted for. We leave zero room for guesswork.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency",
      desc: "Fast-tracked solutions without compromising the extreme detail your bids require.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      desc: "Striving for the gold standard in construction documentation and cost analysis.",
    },
  ];

  return (
    <main className="min-h-screen bg-bg-dark text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-5 -z-10"></div>
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-hero-content space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5">
                <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">The Clarity Story</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase tracking-tighter leading-[0.95]">
                Precision <br />
                <span className="text-primary italic">Without</span> <br />
                Compromise.
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Founded on the principle of absolute accuracy, Clarity Estimates LLC has transformed 
                how contractors approach pre-construction. We turn complex blueprints into actionable 
                financial roadmaps.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">12+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Years Experience</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">5k+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Projects Estimated</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-white">$2B+</span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Bid Value Managed</span>
                </div>
              </div>
            </div>

            <div className="relative about-hero-content">
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl glass-premium group">
                <img 
                  src="/images/about-main.png" 
                  alt="Construction Planning" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-8 left-8 right-8 p-6 glass backdrop-blur-xl border border-white/10 rounded-2xl">
                  <p className="text-sm font-medium text-zinc-300 italic">
                    "Accuracy isn't just a metric for us—it's the core of our brand. We provide the clarity you need to succeed in a competitive landscape."
                  </p>
                </div>
              </div>
              {/* Floating Element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal-section p-12 rounded-[40px] glass-premium border border-white/10 space-y-6 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                <Target size={28} />
              </div>
              <h2 className="text-4xl font-black font-outfit uppercase tracking-tight">Our Mission</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                To empower construction professionals with the most accurate, detailed, and data-driven 
                estimations in the industry, enabling them to bid with absolute confidence and maximize 
                their project profitability.
              </p>
            </div>

            <div className="reveal-section p-12 rounded-[40px] glass-premium border border-white/10 space-y-6 hover:border-primary/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                <Zap size={28} />
              </div>
              <h2 className="text-4xl font-black font-outfit uppercase tracking-tight">Our Vision</h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                To be the global leader in pre-construction consulting, setting the standard for 
                technological innovation and precision in the construction estimation industry 
                across residential, commercial, and industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20 reveal-section">
            <h3 className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Foundation</h3>
            <h2 className="text-5xl md:text-6xl font-black font-outfit uppercase tracking-tighter">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 values-grid">
            {coreValues.map((value, i) => (
              <div key={i} className="value-card p-10 rounded-[32px] glass border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary group-hover:text-black">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait Section (Founder/Expertise) */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-section relative order-2 lg:order-1">
              <div className="relative rounded-full aspect-square max-w-md mx-auto overflow-hidden border-8 border-primary/20 p-4">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img 
                    src="/images/about-portrait.png" 
                    alt="Expert Estimator" 
                    className="w-full h-full object-cover grayscale brightness-95"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full"></div>
            </div>

            <div className="reveal-section space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-5xl font-black font-outfit uppercase tracking-tighter leading-none">
                Human Expertise. <br />
                <span className="text-primary italic">Digital Accuracy.</span>
              </h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Behind every Clarity Estimate is a team of certified master estimators with years of field experience. 
                We don't just rely on algorithms; we apply decades of construction knowledge to identify 
                complexities that simple software often misses.
              </p>
              <div className="space-y-4">
                {[
                  "Certified ASPE Professional Estimators",
                  "Advanced 3D Modeling Expertise",
                  "Global Material Cost Tracking",
                  "Multi-Layered QA/QC Process"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="text-zinc-300 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 bg-primary text-black font-black py-4 px-10 rounded-xl text-sm tracking-widest hover:bg-white transition-all shadow-xl shadow-primary/20">
                MEET THE TEAM <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Call To Action */}
      <section className="py-32 relative reveal-section">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative p-12 md:p-24 rounded-[60px] glass-premium border border-primary/20 overflow-hidden text-center space-y-8 group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h2 className="text-5xl md:text-7xl font-black font-outfit uppercase tracking-tighter leading-none relative z-10">
              Ready to <span className="text-primary italic">Scale</span> <br />
              Your Bidding?
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto relative z-10">
              Join hundreds of contractors who have transformed their win-rates with Clarity Estimates. 
              Let's build your next project together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10 pt-4">
              <button className="bg-primary text-black font-black py-4 px-12 rounded-xl text-sm tracking-widest hover:bg-white transition-all">
                GET STARTED
              </button>
              <button className="bg-transparent border border-white/20 text-white font-black py-4 px-12 rounded-xl text-sm tracking-widest hover:bg-white/10 transition-all">
                VIEW SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

"use client";
import React, { useEffect, useRef } from "react";
import { FileText, Search, PieChart, CheckCircle, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        ".how-it-works-title span",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Subtitle Animation
      gsap.fromTo(
        ".how-it-works-subtitle",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards Animation
      gsap.fromTo(
        ".process-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Project Information",
      description: "Provide us with necessary project information, requirements and drawings.",
      icon: <FileText className="w-8 h-8" />,
      image: "/images/step1.jpg", // User to replace
    },
    {
      id: "02",
      title: "Expert Reviewing",
      description: "Our team of expert estimators will review your provided information.",
      icon: <Search className="w-8 h-8" />,
      image: "/images/step2.jpg", // User to replace
    },
    {
      id: "03",
      title: "Estimate Document",
      description: "Our team will develop a detailed estimation document with all costs and timeline.",
      icon: <PieChart className="w-8 h-8" />,
      image: "/images/step3.jpg", // User to replace
    },
    {
      id: "04",
      title: "Delivering Documents",
      description: "We will provide you the document in the form of a detailed spreadsheet.",
      icon: <CheckCircle className="w-8 h-8" />,
      image: "/images/step4.jpg", // User to replace
    },
  ];

  const splitText = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-3">
        <span className="inline-block">{word}</span>
      </span>
    ));

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border border-white/10">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Our Process</span>
          </div>
          <h2 className="how-it-works-title text-4xl md:text-6xl font-black text-white mb-6 font-outfit uppercase tracking-tighter">
            {splitText("How It Works")}
          </h2>
          <p className="how-it-works-subtitle text-zinc-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Our streamlined process ensures that your projects are estimated with absolute precision and delivered within record time.
          </p>
        </div>

        <div className="process-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="process-card group relative h-[450px] rounded-3xl overflow-hidden glass border border-white/5 transition-all duration-700 hover:border-primary/50 cursor-default"
            >
              {/* Default Gradient Overlay - Hidden on mobile, shows on desktop until hover */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent pointer-events-none opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

              {/* Default State Content - Hidden on mobile, shows on desktop until hover */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <div className="flex flex-col gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight uppercase">
                    {step.title}
                  </h3>
                </div>
                <div>
                  <div className="text-4xl font-black text-white/5 font-outfit mb-4">{step.id}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Hover State: Image and Overlay - Always visible on mobile, shows on desktop hover */}
              <div className="absolute inset-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 scale-100 md:scale-110 group-hover:scale-100">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-[#0a0a0a]"></div>
                
                {/* Image Placeholder - User can replace src */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover brightness-50"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1000"; }}
                />

                {/* Teal Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent"></div>

                {/* Hover Content - Always up on mobile, translates up on desktop hover */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-30 transform translate-y-0 md:translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                   <div className="mb-4 text-5xl font-black text-white/20 font-outfit">{step.id}</div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter shadow-black/50 drop-shadow-lg">
                    {step.title}
                  </h3>
                  <p className="text-white font-medium text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

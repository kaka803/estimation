"use client";
import React, { useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { servicesData } from "../../data/servicesData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceSidebar from "../../components/ServiceSidebar";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicePage = () => {
  const { slug } = useParams();
  const data = servicesData[slug];

  useEffect(() => {
    if (!data) return;

    let ctx = gsap.context(() => {
      // Hero Header Animation
      gsap.fromTo(
        ".service-hero",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      // Content Blocks Animation
      gsap.fromTo(
        ".content-block",
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-area",
            start: "top 80%"
          }
        }
      );
    });

    return () => ctx.revert();
  }, [slug, data]);

  if (!data) {
    return notFound();
  }

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-bg-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="service-hero relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 mb-6">
            <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase">Service Details</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white font-outfit uppercase tracking-tighter mb-6">
            {data.title.split(" ").slice(0, -1).join(" ")} <span className="text-primary italic">{data.title.split(" ").pop()}</span>
          </h1>
          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 content-area">
            
            {/* Left Column: Content */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* Service Image Section */}
              <div className="content-block relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden glass-premium border border-white/10 group shadow-2xl">
                {data.image ? (
                  <img 
                    src={data.image} 
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-black text-2xl uppercase tracking-widest bg-white/5">
                     [ Service Image Placeholder ]
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                {/* Visual Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Overview */}
              <div className="content-block space-y-6">
                <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight flex items-center gap-4">
                  <span className="w-10 h-[2px] bg-primary"></span>
                  Overview
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                  {data.description}
                </p>
                <div className="p-8 rounded-3xl glass-premium border-l-4 border-l-primary bg-primary/5 italic text-zinc-300">
                  {data.detailedContent}
                </div>
              </div>

              {/* Features List */}
              <div className="content-block space-y-8">
                <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight flex items-center gap-4">
                  <span className="w-10 h-[2px] bg-primary"></span>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl glass border border-white/5 group hover:border-primary/30 hover:bg-white/5 transition-all">
                      <CheckCircle2 size={20} className="text-primary" />
                      <span className="text-white font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Cards */}
              <div className="content-block space-y-8">
                <h2 className="text-3xl font-black text-white font-outfit uppercase tracking-tight flex items-center gap-4">
                  <span className="w-10 h-[2px] bg-primary"></span>
                  Why Choose Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="flex flex-col gap-4 p-8 rounded-3xl glass-premium border border-white/10 hover:border-primary/40 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <ArrowRight size={20} className="-rotate-45" />
                      </div>
                      <h4 className="text-white font-bold text-lg">{benefit.title}</h4>
                      <p className="text-zinc-500 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:w-1/3">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicePage;

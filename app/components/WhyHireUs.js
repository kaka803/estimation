"use client";
import React, { useEffect, useRef } from "react";
import { CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyHireUs = () => {
  const sectionRef = useRef(null);
  const imageClusterRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Content Reveal
      gsap.fromTo(
        ".why-hire-content > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Image Cluster Reveal (Directional Curtain Effect)
      // Image 1: Right to Left
      gsap.to(".curtain-1", {
        x: "-100%",
        duration: 0.7,
        ease: "none",
        scrollTrigger: { trigger: imageClusterRef.current, start: "top 75%" },
      });

      // Image 2: Left to Right
      gsap.to(".curtain-2", {
        x: "100%",
        duration: 0.7,
        ease: "none",
        scrollTrigger: { trigger: imageClusterRef.current, start: "top 75%" },
      });

      // Image 3: Top to Bottom
      gsap.to(".curtain-3", {
        y: "100%",
        duration: 1,
        ease: "none",
        scrollTrigger: { trigger: imageClusterRef.current, start: "top 75%" },
      });

      gsap.fromTo(
        ".cluster-img img",
        { scale: 1 },
        {
          scale: 1,
          duration: 1.8,
          stagger: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: imageClusterRef.current,
            start: "top 75%",
          },
        }
      );

      // 3. Checklist Stagger
      gsap.fromTo(
        ".check-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // 4. CTA Banner Slide Up
      gsap.fromTo(
        ".cta-banner",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why-hire-us" ref={sectionRef} className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Premium Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          {/* Left: Image Cluster */}
          <div ref={imageClusterRef} className="lg:w-1/2 w-full grid grid-cols-2 gap-4 relative">
             {/* Large background decorative shape */}
             <div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-primary/20 opacity-50 hidden lg:block"></div>
             
             {/* Image 1: Right to Left Reveal */}
             <div className="cluster-img relative h-64 rounded-sm overflow-hidden shadow-2xl  bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-bg-dark z-20 curtain-1"></div>
                <Image 
                  src="/images/hire1.jpg" 
                  alt="Team collaboration" 
                  fill 
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"; }}
                />
             </div>

             {/* Image 2: Left to Right Reveal */}
             <div className="cluster-img relative h-64 mt-12 rounded-sm overflow-hidden shadow-2xl  bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-bg-dark z-20 curtain-2"></div>
                <Image 
                  src="/images/hire2.jpg" 
                  alt="Success handshake" 
                  fill 
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"; }}
                />
             </div>

             {/* Image 3 (Large Bottom): Top to Bottom Reveal */}
             <div className="cluster-img relative h-[320px] col-span-2 rounded-sm overflow-hidden shadow-2xl  bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-bg-dark z-20 curtain-3"></div>
                <Image 
                  src="/images/hire3.jpg" 
                  alt="Focus on details" 
                  fill 
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000"; }}
                />
             </div>
          </div>

          {/* Right: Content Section */}
          <div className="why-hire-content lg:w-1/2 w-full">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-8 transform hover:scale-105 transition-transform duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-[10px] font-black tracking-[0.25em] uppercase text-primary">Why Hire Us</span>
             </div>

             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 font-outfit leading-[1.1] tracking-tighter">
                Our team of <span className="text-primary italic">experienced</span> estimators has extensive knowledge.
             </h2>

             <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
                We are committed to delivering accurate and timely estimates, which are essential for managing your project's budget and timelines. Our expert team leverages the latest technology to ensure absolute precision.
             </p>

             <ul className="check-list space-y-5 mb-12">
                {[
                  "Business is the best plan",
                  "Services we provide",
                  "How to improve business",
                ].map((item, idx) => (
                  <li key={idx} className="check-item flex items-center gap-4 group">
                    <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
             </ul>

             <Link href="/about" className="flex items-center gap-3 bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/50 text-white px-8 py-4 rounded-2xl font-bold transition-all group overflow-hidden relative w-fit">
                <span className="relative z-10 uppercase tracking-widest text-xs">Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* CTA Banner Area */}
        <div className="cta-banner relative bg-zinc-900/50 backdrop-blur-3xl rounded-[40px] border border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between p-2 md:p-3">
          
          <div className="px-10 py-12 md:py-0">
             <h3 className="text-2xl md:text-3xl font-black text-white font-outfit tracking-tight">
                Do You Need <span className="text-primary">Estimation Service?</span>
             </h3>
          </div>

          <a href="tel:3466605142" className="relative h-full w-full md:w-auto overflow-hidden group block">
            {/* The Slanted Shape Background */}
            <div className="bg-primary px-12 py-10 md:py-14 flex items-center gap-6 md:rounded-l-[100px] cursor-pointer group-hover:bg-[#12e3b6] transition-colors relative">
               
               {/* Animated Icon */}
               <div className="bg-white/20 p-4 rounded-full group-hover:rotate-12 transition-transform duration-500">
                  <PhoneCall className="w-8 h-8 text-white" />
               </div>

               <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Expert Advisor</span>
                  <span className="text-white text-xl md:text-2xl font-black font-outfit">
                    (346) 660-5142
                  </span>
               </div>

               {/* Decorative Circle in background */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default WhyHireUs;

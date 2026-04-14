"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Hammer, DraftingCompass, HardHat, Ruler } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Main Section Zoom In
      gsap.fromTo(
        ".cta-card",
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Background Pulsating Glow
      gsap.to(".cta-glow", {
        scale: 1.2,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Floating Icons Animation
      gsap.to(".floating-icon", {
        y: -15,
        rotation: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
             each: 0.5,
             from: "random"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={sectionRef} className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Pulsating Background Glow */}
      <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-0"></div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <Hammer className="floating-icon absolute top-20 left-[15%] text-primary w-8 h-8" />
         <DraftingCompass className="floating-icon absolute top-40 right-[10%] text-primary w-10 h-10" />
         <HardHat className="floating-icon absolute bottom-20 left-[10%] text-primary w-12 h-12" />
         <Ruler className="floating-icon absolute bottom-40 right-[20%] text-primary w-8 h-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex justify-center">
        
        <div className="cta-card glass-premium rounded-[50px] border border-white/10 p-10 md:p-20 text-center max-w-4xl relative overflow-hidden">
          
          {/* Subtle Grid overlay inside card */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Ready to scale?</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 font-outfit uppercase tracking-tighter leading-[1.05]">
              Let’s win your next <span className="text-primary italic">successful</span> project together.
            </h2>

            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Join 500+ developers and contractors who rely on our 48h turnaround and 99.9% quantification accuracy. Stop guessing, start winning.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link href="/contact" className="group w-full sm:w-auto bg-primary text-black font-black py-5 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(16,199,159,0.5)] transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  <span className="uppercase tracking-widest text-xs font-bold">Get A Free Quote</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>

               <Link href="/contact" className="w-full sm:w-auto glass border border-white/10 hover:border-primary/50 text-white font-bold py-5 px-10 rounded-2xl transition-all transform hover:scale-105 active:scale-95 text-center">
                  CONSULT AN EXPERT
               </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;

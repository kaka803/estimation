"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reviews = [
  {
    name: "Robert Anderson",
    role: "Project Manager, BuildCorp",
    text: "Clarity Estimates has completely transformed our bidding process. Their 48-hour turnaround and 99.9% accuracy have helped us win more government contracts this year than ever before. Truly the best in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sarah Jenkins",
    role: "Owner, SJ Renovations",
    text: "The level of detail in their material takeoffs is incredible. Our field crews find it so much easier to order supplies without shortages or waste. It's a game-changer for a small firm like ours.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Michael Chen",
    role: "Lead Estimator, Skyline Dev",
    text: "We've used several services in the past, but none match the precision and professional presentation of Clarity Estimates. Their reports are boardroom-ready and instill absolute confidence in our stakeholders.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Elena Rodriguez",
    role: "Architect, Vista Design",
    text: "Partnering with Clarity Estimates allows us to focus on the creative side while they handle the complex quantification. Their commitment to technology and efficiency is evident in every single project.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  const slideToIndex = useCallback((index) => {
    if (!sliderRef.current) return;
    
    gsap.to(sliderRef.current, {
      xPercent: -index * (100 / reviews.length),
      duration: 0.8,
      ease: "power3.inOut",
    });
    
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % reviews.length;
    slideToIndex(nextIndex);
  }, [currentIndex, slideToIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    slideToIndex(prevIndex);
  }, [currentIndex, slideToIndex]);

  // Autoplay functionality
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [nextSlide]);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  const handleNext = () => {
    nextSlide();
    resetAutoplay();
  };

  const handlePrev = () => {
    prevSlide();
    resetAutoplay();
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading Reveal
      gsap.fromTo(
        ".testi-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Slider Reveal
      gsap.fromTo(
        ".testi-slider-container",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Premium Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Background Decor */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <div className="testi-heading mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Client Feedback</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-outfit uppercase tracking-tighter shadow-black/20">
            What Our <span className="text-primary italic">Clients</span> Say.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Don't just take our word for it. Hear from the developers, project managers, and contractors we help every single day.
          </p>
        </div>

        {/* Slider Logic */}
        <div className="testi-slider-container relative max-w-4xl mx-auto">
          
          {/* Main Slider Window */}
          <div className="overflow-hidden rounded-[40px] border border-white/10 glass-premium shadow-2xl relative">
            
            {/* Background Decorative Quote */}
            <Quote className="absolute top-8 right-8 w-32 h-32 text-white/[0.03] -z-0 rotate-12" />

            <div 
              ref={sliderRef}
              className="flex flex-nowrap items-stretch transition-none"
              style={{ width: `${reviews.length * 100}%` }}
            >
              {reviews.map((testi, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-8 py-14 md:py-20 md:px-24 flex flex-col items-center"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                     {[1,2,3,4,5].map(s => (
                       <Star key={s} size={18} className="fill-primary text-primary drop-shadow-[0_0_8px_rgba(16,199,159,0.5)]" />
                     ))}
                  </div>

                  <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white italic leading-snug mb-12 relative z-10 font-outfit">
                    "{testi.text}"
                  </p>

                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary p-1 shadow-[0_0_15px_rgba(16,199,159,0.3)]">
                       <img src={testi.image} alt={testi.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="text-left">
                       <h4 className="text-lg font-black text-white leading-none mb-1 uppercase tracking-tight">{testi.name}</h4>
                       <span className="text-primary text-xs font-bold tracking-widest uppercase">{testi.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
             <button 
               onClick={handlePrev}
               className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90"
             >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
             </button>

             <div className="flex gap-2">
               {reviews.map((_, i) => (
                 <div 
                   key={i} 
                   onClick={() => { slideToIndex(i); resetAutoplay(); }}
                   className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                     currentIndex === i ? "w-8 bg-primary shadow-[0_0_10px_rgba(16,199,159,0.8)]" : "w-2 bg-white/20 hover:bg-white/40"
                   }`}
                 />
               ))}
             </div>

             <button 
               onClick={handleNext}
               className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all group active:scale-90"
             >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

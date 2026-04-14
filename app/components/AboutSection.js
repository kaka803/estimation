"use client";
import React, { useEffect, useRef } from "react";
import { ArrowRight, Target, Zap, BarChart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Title animation
      gsap.fromTo(
        ".about-title span",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Image reveal (white cover)
      gsap.to(".image-cover", {
        x: "100%",
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 3. Right Side Feature Boxes staggered
      gsap.fromTo(".feature-box", 
        { opacity: 0, y: 60 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
        }
      );

      // 4. Left Side Feature Items staggered
      gsap.fromTo(".feature-item", 
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitTitle = (text) =>
    text.split(" ").map((word, idx) => (
      <span key={idx} className="about-title inline-block overflow-hidden">
        <span className="inline-block">{word}&nbsp;</span>
      </span>
    ));

  return (
    <section id="about" ref={sectionRef} className="about-sec relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full mb-10">
          <div className="flex flex-col mb-6 lg:mb-0">
            <p className="bg-primary/20 text-primary mb-5 w-24 h-8 flex justify-center items-center text-[10px] font-bold rounded-full uppercase tracking-widest border border-primary/30">
              Our Vision
            </p>

            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black font-outfit leading-[1.05] tracking-tight">
              {splitTitle("Precision is the heart of")}
              <br />
              <span className="text-primary italic">{splitTitle("every successful bid")}</span>
            </h2>
          </div>

          <p className="text-zinc-500 text-md w-full lg:w-1/2 text-left lg:text-right font-light leading-relaxed max-w-lg">
            Transforming complex blueprints into detailed actionable data. Win more projects with absolute confidence.
          </p>
        </div>

        {/* Main Section - 3 Column Layout Restored & Tightened */}
        <div className="flex flex-col lg:flex-row gap-8 w-full items-start">

          {/* Column 1: Intro & Checklist */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <p className="text-zinc-400 text-[15px] leading-relaxed">
              We're committed to revolutionizing construction estimation. Say goodbye to guesswork and hello to 
              unmatched clarity with our state-of-the-art takeoff solutions.
            </p>

            <ul className="flex flex-col space-y-3">
              {[
                "12+ Years Industry Expertise",
                "24-48h Guaranteed Turnaround",
                "99.9% Quantification Accuracy",
                "Detailed Material Takeoffs",
              ].map((item, index) => (
                <li
                  key={index}
                  className="feature-item flex items-center gap-3 text-zinc-300 text-md font-medium"
                >
                  <FaCheckCircle className="text-primary w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link href="/contact" className="group relative cursor-pointer text-xs overflow-hidden bg-primary text-black font-extrabold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(16,199,159,0.3)] hover:scale-105 flex items-center gap-3 w-fit">
                <span className="z-10 uppercase tracking-widest">Get A Quote</span>
                <ArrowRight size={16} className="relative z-10 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </Link>
            </div>
          </div>

          {/* Column 2: Animated Center Image Cluster */}
          <div className="relative w-full lg:w-1/3 group">
            <div className="image-container relative h-[480px] bg-black overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
              {/* Reveal Overlay */}
              <div className="absolute w-full h-full bg-[#0a0a0a] z-20 left-0 top-0 image-cover"></div>

              {/* Main Image */}
              <Image
                src="/images/about-main.png"
                alt="Construction Team"
                fill
                className="absolute top-0 left-0 object-cover brightness-75 group-hover:brightness-100 transition-all duration-700"
              />

              {/* Shine Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 transition-all duration-1000 group-hover:left-[200%]"></div>
              </div>
            </div>

            {/* Overlapping portrait image */}
            <div className="absolute -bottom-6 -left-6 w-36 h-48 rounded-2xl overflow-hidden border-4 border-[#0a0a0a] shadow-2xl z-30 hidden md:block">
              <Image src="/images/about-portrait.png" alt="Expert" fill className="object-cover" />
            </div>

            {/* Experience Badge - Decent Professional Style */}
            <div className="absolute bg-white/10   backdrop-blur-xl -top-4 -right-4 z-40 glass-premium px-5 py-3 rounded-2xl shadow-2xl border border-primary flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500 cursor-default">
              <span className="text-xl font-bold text-white leading-none">12+</span>
              <span className="text-[7px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Years Exp</span>
            </div>
          </div>

          {/* Column 3: Feature Boxes */}
          <div className="flex flex-col gap-5 lg:w-1/3">
            {[
              { icon: <Target className="w-5 h-5" />, title: "Precision", desc: "99.9% accurate quantification for bids." },
              { icon: <Zap className="w-5 h-5" />, title: "Speed", desc: "Fast 24-48h turnaround time guaranteed." },
              { icon: <BarChart className="w-5 h-5" />, title: "Trade Coverage", desc: "All trades from MEP to Finishing." },
              { icon: <ShieldCheck className="w-5 h-5" />, title: "Reliability", desc: "Expert support for every estimate." },
            ].map((item, idx) => (
              <div key={idx} className="feature-box flex items-start gap-4 p-5 rounded-2xl border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all group">
                <div className="bg-primary/10 text-primary rounded-xl p-3 shrink-0 group-hover:bg-primary group-hover:text-black transition-all">
                  {item.icon}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors tracking-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

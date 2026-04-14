"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// CountUp Component
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const endValue = parseFloat(end);
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * endValue;
      
      setCount(end.includes(".") ? currentCount.toFixed(1) : Math.floor(currentCount));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Typewriter Component
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="relative">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse absolute -right-1 top-0 w-1 h-full bg-primary" />
    </span>
  );
};

const Hero = () => {
  const stats = [
    { 
      label: "Delivery Time", 
      value: "48", 
      suffix: "h",
      prefix: "24-",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      label: "Accuracy Rate", 
      value: "99.9", 
      suffix: "%",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      label: "Bids Won", 
      value: "500", 
      suffix: "+",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      label: "Expert Estimators", 
      value: "15", 
      suffix: "+",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-grid">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Precision Meets Technology</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.2]">
          <span className="text-white font-outfit">Precision Estimating for</span>
          <br />
          <span className="text-white font-outfit">Future-Ready</span>
          <br />
          <span className="text-primary font-outfit">
            <Typewriter words={["Construction", "Projects", "Engineering", "Renovation"]} />
          </span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
          Win more bids with unmatched clarity and accuracy. <span className="text-white font-medium">Clarity Estimates LLC</span> delivers professional material takeoff and cost estimation services within 24-48 hours.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 text-center">
          <Link href="/contact" className="w-full sm:w-auto bg-primary text-black font-black py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(16,199,159,0.5)] transform hover:scale-105 active:scale-95 cursor-pointer">
            START YOUR PROJECT
          </Link>
          <Link href="/#services" className="w-full sm:w-auto glass border border-white/10 hover:border-primary/50 text-white font-bold py-4 px-10 rounded-xl transition-all cursor-pointer">
            VIEW SAMPLES
          </Link>
        </div>

        {/* Upgraded Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="relative flex flex-col items-center p-10 rounded-4xl glass-premium transition-all duration-500 group hover:-translate-y-3 cursor-default overflow-hidden border border-white/5 hover:border-primary/40"
            >
              {/* Animated Glow Blob */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-700"></div>

              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                {stat.icon}
              </div>
              
              <span className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                {stat.prefix}<CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              
              <span className="text-[11px] font-semibold text-zinc-400 group-hover:text-primary transition-colors tracking-[0.25em] uppercase text-center">
                {stat.label}
              </span>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-linear-to-r from-transparent via-primary to-transparent group-hover:w-1/2 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Graphic Element */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-bg-dark to-transparent -z-10"></div>
    </section>
  );
};

export default Hero;

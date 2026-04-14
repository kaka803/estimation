"use client";
import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const accordionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Section Heading Animation
      gsap.fromTo(
        ".faq-heading",
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

      // Accordion Items Stagger
      gsap.fromTo(
        ".faq-item",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "Why should I hire a construction estimating service?",
      answer: (
        <div className="space-y-4">
          <p>
            There are several critical reasons why someone should hire a professional construction estimating service:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Accurate Cost Estimates",
              "Significant Time Saving",
              "Better Budget Management",
              "Improved Decision Making",
              "Competitive Advantage",
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="border-l-4 border-primary/30 pl-4 py-2 italic text-zinc-400">
            Accurate cost estimates can provide a competitive advantage in bidding for projects. By having a detailed understanding of the project's cost, you can develop more competitive bids, increasing your chances of winning the project.
          </p>
        </div>
      ),
    },
    {
      question: "What is your typical turnaround time?",
      answer: "We guarantee a professional material takeoff and cost estimation within 24 to 48 hours for most standard projects. For larger or highly complex projects, we'll provide a custom timeline together with our initial quote.",
    },
    {
      question: "How accurate are the cost estimates you provide?",
      answer: "We pride ourselves on 99.9% Quantification Accuracy. Our expert estimators use advanced software and industry-standard databases to ensure every nut, bolt, and cubic yard is accounted for.",
    },
    {
      question: "Which trades do you cover in your takeoffs?",
      answer: "We cover all major construction trades, including MEP (Mechanical, Electrical, Plumbing), Structural, Civil, Finishing, Landscaping, and more. No matter the scope, our team has the expertise to handle it.",
    },
    {
      question: "Can I see samples of your previous estimate reports?",
      answer: "Absolutely! We believe in transparency. You can click the 'View Samples' button in our hero section or contact our advisor to receive a portfolio of our work tailored to your specific trade.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Premium Section Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Decorative Watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase font-outfit">
        FAQ
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Column: Heading */}
          <div className="faq-heading lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-8">
               <HelpCircle className="w-4 h-4 text-primary" />
               <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Our Answers</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-outfit leading-tight tracking-tighter">
              Common <br /> <span className="text-primary italic">Questions.</span>
            </h2>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-sm">
              Everything you need to know about our construction estimation and takeoff services.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div ref={accordionRef} className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`faq-item group rounded-3xl overflow-hidden transition-all duration-500 border-2 ${
                  openIndex === index 
                    ? "bg-primary/5 border-primary/30 shadow-[0_0_30px_rgba(16,199,159,0.1)]" 
                    : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-7 text-left transition-all"
                >
                  <span className={`text-xl font-bold transition-all duration-300 ${
                    openIndex === index ? "text-primary" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`p-2 rounded-xl transition-all duration-500 ${
                    openIndex === index ? "bg-primary text-black rotate-180" : "bg-white/5 text-zinc-400 group-hover:text-primary"
                  }`}>
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-7 pt-0 text-zinc-400 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

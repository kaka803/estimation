import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    serviceType: "MEP Estimation",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ submitting: false, success: true, error: null });
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        serviceType: "MEP Estimation",
        message: "",
      });

      // Reset success status after 5 seconds
      setTimeout(() => setStatus((prev) => ({ ...prev, success: false })), 5000);
    } catch (err) {
      setStatus({ submitting: false, success: false, error: err.message });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Heading Animation
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // Info Cards Staggered Animation
      gsap.fromTo(
        ".info-card",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Form Animation
      gsap.fromTo(
        ".contact-form-container",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us Anytime",
      value: "(346) 660-5142",
      href: "tel:+13466605142",
      label: "Support 24/7",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      value: "info@clarityestimates.com",
      href: "mailto:info@clarityestimates.com",
      label: "Fast Response",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      value: "Construction Lane, TX 75001",
      href: "#",
      label: "Headquarters",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 bg-bg-dark overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 contact-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/5 mb-6">
            <MessageSquare size={14} className="text-primary" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Get in touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white font-outfit uppercase tracking-tighter">
            Let's Start Your <span className="text-primary italic">Success</span> Story
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Ready to win more bids with absolute precision? Fill out the form below or reach out directly to our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-5 space-y-6 info-container">
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="info-card group flex items-center gap-6 p-6 rounded-3xl glass-premium border border-white/5 hover:border-primary/40 transition-all duration-500 block"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 transform group-hover:rotate-6">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">
                    {item.label}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-zinc-400 font-medium group-hover:text-white transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="info-card p-10 rounded-4xl glass-premium border border-white/5 relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 font-outfit uppercase tracking-tight">Follow Our Updates</h3>
                <div className="flex items-center gap-4">
                  {[
                    { Icon: FaInstagram, href: "#" },
                    { Icon: FaLinkedinIn, href: "#" },
                    { Icon: FaTwitter, href: "#" }
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 transition-all transform hover:-translate-y-2">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 contact-form-container">
            <div className="glass-premium rounded-[40px] border border-white/10 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+1 (346) 660-5142"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Service Type</label>
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-zinc-400 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all appearance-none cursor-pointer"
                    >
                      <option className="bg-bg-dark">Construction Estimating</option>
                      <option className="bg-bg-dark">Residential Estimating</option>
                      <option className="bg-bg-dark">Commercial Estimating</option>
                      <option className="bg-bg-dark">Industrial Estimating</option>
                      <option className="bg-bg-dark">Material Takeoffs</option>
                      <option className="bg-bg-dark">Estimating Consultant</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status.error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl text-sm italic">
                    {status.error}
                  </div>
                )}
                {status.success && (
                  <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-xl text-sm font-bold uppercase tracking-widest text-center">
                    Message Sent Successfully!
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={status.submitting}
                  className={`group w-full bg-primary text-black font-black py-5 px-10 rounded-2xl transition-all shadow-[0_0_30px_rgba(16,199,159,0.3)] hover:shadow-[0_0_40px_rgba(16,199,159,0.5)] transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mt-4 ${status.submitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  <span className="uppercase tracking-widest text-xs">
                    {status.submitting ? "Sending..." : "Send Message"}
                  </span>
                  {!status.submitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

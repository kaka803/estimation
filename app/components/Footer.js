"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaInstagram, href: "https://www.instagram.com/clarity_estimatesllc" },
  ];

  return (
    <footer className="bg-bg-dark pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group cursor-pointer inline-block">
              <Image 
                src="/logo3.png" 
                alt="Clarity Estimates Logo" 
                width={160} 
                height={160} 
                className="h-10 max-md:h-7 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Empowering construction professionals with absolute quantification precision and industry-leading turnaround times since 2012.
            </p>
            <div className="flex items-center gap-4">
               {socialIcons.map(({ Icon, href }, i) => (
                 <a key={i} href={href} className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 transition-all">
                    <Icon size={16} />
                 </a>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-primary transition-all text-sm flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">Our Expertise</h4>
            <ul className="space-y-3">
              {[
                { name: "Construction Estimating", href: "/services/construction-estimating" },
                { name: "Residential Estimating", href: "/services/residential-estimating" },
                { name: "Commercial Estimating", href: "/services/commercial-estimating" },
                { name: "Industrial Estimating", href: "/services/industrial-estimating" },
                { name: "Construction Takeoff", href: "/services/construction-takeoff" },
                { name: "Estimating Consultant", href: "/services/estimating-consultant" },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-zinc-500 hover:text-primary transition-all text-sm flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all"></div>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg uppercase tracking-tight">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                 <MapPin className="text-primary w-5 h-5 shrink-0" />
                 <span className="text-zinc-500 text-sm leading-relaxed">
                   123 Construction Lane, <br />
                   Bidding District, TX 75001
                 </span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="text-primary w-5 h-5 shrink-0" />
                 <a href="tel:3466605142" className="text-zinc-500 hover:text-primary transition-colors text-sm leading-relaxed">(346) 660-5142</a>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="text-primary w-5 h-5 shrink-0" />
                 <a href="mailto:info@clarityestimates.com" className="text-zinc-500 hover:text-primary transition-colors text-sm leading-relaxed">info@clarityestimates.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.25em]">
            © 2026 Clarity Estimates LLC. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-8">
             <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase font-bold tracking-widest transition-colors">Privacy Policy</a>
             <a href="#" className="text-zinc-600 hover:text-zinc-400 text-[10px] uppercase font-bold tracking-widest transition-colors">Terms of Service</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
          >
             <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

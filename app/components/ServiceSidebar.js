"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";

const ServiceSidebar = () => {
  const pathname = usePathname();
  
  const services = [
    { name: "Construction Estimating", id: "construction-estimating" },
    { name: "Residential Estimating", id: "residential-estimating" },
    { name: "Commercial Estimating", id: "commercial-estimating" },
    { name: "Industrial Estimating", id: "industrial-estimating" },
    { name: "Construction Takeoff", id: "construction-takeoff" },
    { name: "Estimating Consultant", id: "estimating-consultant" },
  ];

  return (
    <aside className="space-y-8 h-fit lg:sticky lg:top-32">
      {/* Services List */}
      <div className="glass-premium rounded-3xl border border-white/10 overflow-hidden">
        <div className="bg-primary/10 px-8 py-5 border-b border-primary/20">
          <h3 className="text-white font-black uppercase tracking-widest text-sm">Our Services</h3>
        </div>
        <div className="p-2">
          {services.map((service) => {
            const isActive = pathname === `/services/${service.id}`;
            return (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive 
                    ? "bg-primary text-black" 
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="font-bold text-sm tracking-tight">{service.name}</span>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform duration-300 ${
                    isActive ? "translate-x-1" : "group-hover:translate-x-1"
                  }`} 
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Contact Info */}
      <div className="glass-premium rounded-3xl border border-white/10 p-8 space-y-6">
        <h3 className="text-white font-black uppercase tracking-widest text-sm mb-4">Contact Us</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
              <p className="text-white text-sm leading-relaxed">123 Construction Lane, TX 75001</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone</p>
              <p className="text-white text-sm">(346) 660-5142</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email</p>
              <p className="text-white text-sm">info@clarityestimates.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions CTA */}
      <div className="relative rounded-3xl overflow-hidden group">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md -z-10 transition-all duration-700 group-hover:scale-110"></div>
        <div className="p-8 text-center space-y-4">
          <div className="w-14 h-14 bg-white rounded-full mx-auto flex items-center justify-center text-primary shadow-xl mb-2">
             <Phone size={24} className="animate-pulse" />
          </div>
          <h4 className="text-white font-black text-xl font-outfit uppercase tracking-tight">Got any Questions?</h4>
          <p className="text-white/80 text-xs leading-relaxed">Our experts are ready to provide a free consultation and quote.</p>
          <a href="tel:3466605142" className="block w-full bg-white text-primary font-black py-4 rounded-xl text-sm transition-transform active:scale-95 shadow-lg">
            (346) 660-5142
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;

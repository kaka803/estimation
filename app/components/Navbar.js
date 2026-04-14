"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Construction Estimating", id: "construction-estimating" },
    { name: "Residential Estimating", id: "residential-estimating" },
    { name: "Commercial Estimating", id: "commercial-estimating" },
    { name: "Industrial Estimating", id: "industrial-estimating" },
    { name: "Construction Takeoff", id: "construction-takeoff" },
    { name: "Estimating Consultant", id: "estimating-consultant" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleServices = (e) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out border border-transparent ${
          scrolled || isMobileMenuOpen
            ? "py-4 backdrop-blur-xl bg-white/10 border-white/20 mx-4 mt-4 rounded-2xl shadow-xl shadow-black/5"
            : "py-6 bg-transparent mx-0 mt-0 rounded-none border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={closeMenus} className="relative z-50">
            <Image 
              src="/logo3.png" 
              alt="Clarity Estimates Logo" 
              width={160} 
              height={160} 
              className="h-10 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative py-2 text-sm font-semibold tracking-widest transition-colors hover:text-primary ${
                pathname === '/' 
                  ? 'text-primary' 
                  : (scrolled ? 'text-zinc-300' : 'text-white')
              }`}
            >
              Home
              {pathname === '/' && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary animate-in fade-in slide-in-from-left-1" />}
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => window.innerWidth >= 768 && setIsServicesOpen(true)}
              onMouseLeave={() => window.innerWidth >= 768 && setIsServicesOpen(false)}
            >
              <button 
                onClick={toggleServices}
                className={`flex items-center gap-1.5 py-4 text-sm font-semibold tracking-widest transition-colors hover:text-primary ${
                  pathname.includes('/services') 
                    ? 'text-primary' 
                    : (scrolled ? 'text-zinc-300' : 'text-white')
                }`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-360" : ""}`} />
                {pathname.includes('/services') && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />}
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <div className="backdrop-blur-3xl bg-zinc-950/90 rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="p-2 grid grid-cols-1 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        onClick={closeMenus}
                        className={`group flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                          pathname === `/services/${s.id}` 
                            ? "bg-primary/10 text-primary border-primary/20" 
                            : "text-zinc-200 hover:bg-white/5 hover:text-primary transition-all duration-300"
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-[14px] font-semibold  tracking-wider">{s.name}</span>
                          <span className={`text-[9px] font-medium transition-colors ${
                            pathname === `/services/${s.id}` ? "text-primary/70" : "text-zinc-400 group-hover:text-zinc-500"
                          }`}>
                            Professional Estimation
                          </span>
                        </div>
                        <div className={`p-1.5 rounded-lg transition-all transform group-hover:translate-x-1 ${
                          pathname === `/services/${s.id}` ? "bg-primary/20 text-primary" : "bg-[#10c79f] text-white group-hover:bg-primary/10 group-hover:text-primary"
                        }`}>
                          <ChevronDown size={12} className="-rotate-90" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-semibold tracking-widest transition-colors hover:text-primary ${
                  pathname === link.href 
                    ? 'text-primary' 
                    : (scrolled ? 'text-zinc-300' : 'text-white')
                }`}
              >
                {link.name}
                {pathname === link.href && <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />}
              </Link>
            ))}
          </div>

          {/* Mobile Burger Menu Button */}
          <div className="md:hidden flex items-center gap-4 relative z-50">
            <button onClick={toggleMobileMenu} className={`transition-colors duration-300 ${scrolled || isMobileMenuOpen ? "text-zinc-300" : "text-white"}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden md:block bg-primary border border-primary text-black hover:bg-transparent hover:text-primary font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-[0_5px_15px_rgba(16,199,159,0.3)] text-xs tracking-widest text-center">
            Get A Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 h-[100vh] bg-black/60 backdrop-blur-md z-[70] transition-opacity duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenus}
      />

      {/* Mobile Menu Sidebar (Drawer) */}
      <div 
        className={`fixed right-0 top-0 bottom-0 w-[85%] max-w-[380px] bg-zinc-950/95 backdrop-blur-3xl z-[80] transition-transform duration-500 ease-in-out md:hidden border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 gap-6 relative">
          {/* Close button inside sidebar for visibility */}
          <button 
            onClick={closeMenus}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-colors border border-white/10"
          >
            <X size={20} />
          </button>

          <Link 
            href="/" 
            onClick={closeMenus} 
            className={`text-2xl font-semibold transition-colors ${pathname === '/' ? "text-primary italic" : "text-white hover:text-primary"}`}
          >
            Home
          </Link>
          
          <div className="w-full">
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`text-2xl font-semibold transition-colors flex items-center justify-between w-full group ${pathname.includes('/services') ? "text-primary italic" : "text-white hover:text-primary"}`}
            >
              Services
              <ChevronDown size={24} className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-500 ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
               {services.map(s => (
                 <Link 
                  key={s.id} 
                  href={`/services/${s.id}`} 
                  onClick={closeMenus} 
                  className={`group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                    pathname === `/services/${s.id}` 
                      ? "bg-primary/10 text-primary border border-primary/20" 
                      : "text-zinc-400 hover:bg-white/5 hover:text-white border border-transparent"
                  }`}
                 >
                   <div className="flex items-center gap-3">
                     <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                       pathname === `/services/${s.id}` ? "bg-primary scale-125 shadow-[0_0_8px_rgba(16,199,159,0.5)]" : "bg-zinc-600 group-hover:bg-zinc-400"
                     }`}></span>
                     <span className="font-medium text-sm tracking-tight">{s.name}</span>
                   </div>
                   <ChevronDown size={14} className={`-rotate-90 opacity-0 group-hover:opacity-100 transition-all transform translate-x-1 group-hover:translate-x-0 ${pathname === `/services/${s.id}` ? "opacity-100 text-primary" : "text-zinc-600"}`} />
                 </Link>
               ))}
            </div>
          </div>

          <Link 
            href="/about" 
            onClick={closeMenus} 
            className={`text-2xl font-semibold transition-colors ${pathname === '/about' ? "text-primary italic" : "text-white hover:text-primary"}`}
          >
            About
          </Link>
          <Link 
            href="/#pricing" 
            onClick={closeMenus} 
            className={`text-2xl font-semibold transition-colors ${pathname === '/#pricing' ? "text-primary italic" : "text-white hover:text-primary"}`}
          >
            Pricing
          </Link>
          <Link 
            href="/#contact" 
            onClick={closeMenus} 
            className={`text-2xl font-semibold transition-colors ${pathname === '/#contact' ? "text-primary italic" : "text-white hover:text-primary"}`}
          >
            Contact
          </Link>
          
          <div className="mt-auto pb-8">
            <Link href="/contact" onClick={closeMenus} className="w-full bg-primary text-center block text-black font-black py-4 px-10 rounded-xl text-sm tracking-widest shadow-[0_10px_30px_rgba(16,199,159,0.3)]">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";

const ContactClient = () => {
  return (
    <main className="min-h-screen bg-bg-dark flex flex-col relative">
      <Navbar />
      
      {/* Spacer for navbar */}
      <div className="pt-24 md:pt-32 bg-bg-dark"></div>
      
      <div className="flex-grow">
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  );
};

export default ContactClient;

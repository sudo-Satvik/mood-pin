import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import React from "react";

const Landing: React.FC = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Features />
      <WhySection />
      <CallToAction />
      <Footer />
      {/* <MoodpinApp /> */}
    </main>
  );
};

export default Landing;

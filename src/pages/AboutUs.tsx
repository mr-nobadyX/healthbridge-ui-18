
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Journey from "@/components/about/Journey";
import Achievements from "@/components/about/Achievements";
import Leadership from "@/components/about/Leadership";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AboutHero />
        <MissionVision />
        <Journey />
        <Achievements />
        <Leadership />
        <AboutTestimonials />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

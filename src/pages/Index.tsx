
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Doctors from "@/components/home/Doctors";
import Testimonials from "@/components/home/Testimonials";
import EmergencyContact from "@/components/home/EmergencyContact";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <EmergencyContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

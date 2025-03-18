
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import SocialLinks from "@/components/contact/SocialLinks";
import AnimatedCard from "@/components/ui/AnimatedCard";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactInfo />
        <section className="max-w-7xl mx-auto px-4 py-16">
          <AnimatedCard className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in <span className="text-primary-600">Touch</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </AnimatedCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedCard>
              <ContactForm />
            </AnimatedCard>
            <AnimatedCard delay={200}>
              <ContactMap />
            </AnimatedCard>
          </div>
        </section>
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

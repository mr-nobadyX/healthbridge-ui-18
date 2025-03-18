
import { useToast } from "@/hooks/use-toast";

const ContactHero = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              We're Here to Help!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have questions or need assistance? Reach out to us anytime, and our dedicated team will be happy to assist you with any inquiries or concerns you may have.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/contact-hero.jpg"
              alt="Medical receptionist assisting patients"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

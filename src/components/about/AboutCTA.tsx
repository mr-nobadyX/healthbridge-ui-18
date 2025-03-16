
import { Send, Phone } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedCard direction="right" className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to experience exceptional healthcare?</h2>
            <p className="text-xl opacity-90">
              Take the first step towards better health by scheduling an appointment 
              or joining our community of healthcare professionals.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100">
                <Send className="mr-2 h-5 w-5" />
                Book an Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </AnimatedCard>
          
          <AnimatedCard delay={300} className="md:text-right">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Join Our Healthcare Team</h3>
              <p className="opacity-90 mb-6">
                We're always looking for talented, passionate healthcare professionals to join our team. 
                Explore career opportunities at HealthHub and be part of our mission to transform healthcare.
              </p>
              <Button variant="secondary" size="lg">
                View Careers
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;

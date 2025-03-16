
import { Send, Phone } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard direction="right" className="space-y-6 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to experience exceptional healthcare?</h2>
          <p className="text-xl opacity-90">
            Take the first step towards better health by scheduling an appointment 
            or contacting our team for more information.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center">
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
      </div>
    </section>
  );
};

export default AboutCTA;

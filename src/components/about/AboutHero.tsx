
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";

const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-white/80 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedCard direction="right" className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              About HealthHub – Your Health, Our Commitment
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              For over two decades, HealthHub has been dedicated to providing exceptional healthcare 
              with compassion and expertise. Our mission is to improve lives through innovative 
              medical solutions and personalized care.
            </p>
            <Button 
              className="mt-6 group" 
              size="lg"
              onClick={() => {
                const journeySection = document.getElementById('our-journey');
                journeySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </AnimatedCard>
          
          <AnimatedCard delay={300} className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Medical professionals in consultation" 
              className="w-full h-[450px] object-cover"
            />
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

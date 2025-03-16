
import { Flag, Clock, Book, Award, Lightbulb } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const TimelineItem = ({ year, title, description, icon, delay }: TimelineItemProps) => (
  <AnimatedCard delay={delay} className="min-w-[280px] md:min-w-[320px] flex-shrink-0">
    <div className="bg-white rounded-xl shadow-md p-6 h-full border-l-4 border-primary-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <div className="text-primary-600 font-bold text-xl mb-2">{year}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </AnimatedCard>
);

const Journey = () => {
  return (
    <section id="our-journey" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tracing the evolution of HealthHub from its founding to becoming a leading healthcare provider.
          </p>
        </AnimatedCard>

        <div className="relative mt-12 pt-8 pb-4">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>
          
          <ScrollArea className="w-full py-8">
            <div className="flex space-x-6 pb-4 px-4">
              <TimelineItem
                year="2000"
                title="Foundation"
                description="HealthHub was founded with a vision to provide accessible healthcare services to all."
                icon={<Flag className="h-6 w-6" />}
                delay={100}
              />
              <TimelineItem
                year="2005"
                title="Expansion"
                description="Opened three new branches across the state to serve more communities."
                icon={<Book className="h-6 w-6" />}
                delay={200}
              />
              <TimelineItem
                year="2010"
                title="Technology Upgrade"
                description="Implemented state-of-the-art medical technology and digital patient records."
                icon={<Lightbulb className="h-6 w-6" />}
                delay={300}
              />
              <TimelineItem
                year="2015"
                title="Research Center"
                description="Established a research center dedicated to advancing medical knowledge."
                icon={<Clock className="h-6 w-6" />}
                delay={400}
              />
              <TimelineItem
                year="2020"
                title="Global Recognition"
                description="Received international accreditation for excellence in healthcare services."
                icon={<Award className="h-6 w-6" />}
                delay={500}
              />
              <TimelineItem
                year="2023"
                title="Present Day"
                description="Continuing to grow and innovate while maintaining our commitment to exceptional patient care."
                icon={<Clock className="h-6 w-6" />}
                delay={600}
              />
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default Journey;

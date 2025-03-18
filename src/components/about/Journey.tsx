
import { Flag, Clock, Book, Award, Lightbulb, Rocket, MapPin } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const TimelineItem = ({ year, title, description, icon, delay }: TimelineItemProps) => (
  <AnimatedCard delay={delay} className="mb-6 relative">
    <div className="flex items-start">
      {/* Timeline dot and line */}
      <div className="hidden md:flex flex-col items-center mr-6">
        <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white z-10">
          {icon}
        </div>
        <div className="w-1 bg-primary-200 h-full absolute top-10 bottom-0 left-5 -z-10"></div>
      </div>
      
      {/* Card content */}
      <Card className="flex-1 border-l-4 border-primary-500 hover:shadow-lg transition-all duration-300">
        <CardContent className="p-4">
          <div className="md:hidden h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center mb-3 text-white">
            {icon}
          </div>
          <div className="text-primary-600 font-bold text-lg mb-1">{year}</div>
          <h3 className="text-base font-semibold mb-1 text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </div>
  </AnimatedCard>
);

const Journey = () => {
  const isMobile = useIsMobile();
  
  const timelineItems = [
    {
      year: "2000",
      title: "Foundation",
      description: "HealthHub was founded with a vision to provide accessible healthcare services.",
      icon: <Flag className="h-5 w-5" />,
      delay: 100
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Opened three new branches across the state to serve more communities.",
      icon: <MapPin className="h-5 w-5" />,
      delay: 200
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Implemented state-of-the-art medical technology and digital patient records.",
      icon: <Lightbulb className="h-5 w-5" />,
      delay: 300
    },
    {
      year: "2015",
      title: "Research Center",
      description: "Established a research center dedicated to advancing medical knowledge.",
      icon: <Book className="h-5 w-5" />,
      delay: 400
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Received international accreditation for excellence in healthcare services.",
      icon: <Award className="h-5 w-5" />,
      delay: 500
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Continuing to grow while maintaining our commitment to exceptional care.",
      icon: <Rocket className="h-5 w-5" />,
      delay: 600
    },
  ];

  return (
    <section id="our-journey" className="py-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Our Journey
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Tracing the evolution of HealthHub from its founding to becoming a leading healthcare provider.
          </p>
        </AnimatedCard>

        {isMobile ? (
          <div className="mt-8">
            <Carousel>
              <CarouselContent>
                {timelineItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="border-l-4 border-primary-500">
                        <CardContent className="p-4">
                          <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center mb-3 mx-auto text-white">
                            {item.icon}
                          </div>
                          <div className="text-primary-600 font-bold text-lg mb-1 text-center">{item.year}</div>
                          <h3 className="text-base font-semibold mb-1 text-gray-900 text-center">{item.title}</h3>
                          <p className="text-sm text-gray-600 text-center">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        ) : (
          <div className="relative mt-8">
            <div className="space-y-0">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  delay={item.delay}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;

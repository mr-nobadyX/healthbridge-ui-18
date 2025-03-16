
import { ArrowRight, Star } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "The care I received at HealthHub was exceptional. The doctors were attentive, and the staff went above and beyond to make me comfortable.",
    name: "Rebecca Thompson",
    location: "San Francisco, CA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    quote: "After my surgery, the follow-up care was impeccable. The entire team made sure I understood my recovery process and supported me every step of the way.",
    name: "Marcus Johnson",
    location: "Chicago, IL",
    rating: 5,
    image: "https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    quote: "The pediatric department at HealthHub is amazing. They made my son feel at ease during what could have been a scary experience for a child.",
    name: "Sophia Rodriguez",
    location: "Austin, TX",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    quote: "I've been a patient at HealthHub for years, and the quality of care has consistently exceeded my expectations. I wouldn't trust my health to anyone else.",
    name: "David Chen",
    location: "Seattle, WA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, location, rating, image }: TestimonialProps) => (
  <div className="bg-white rounded-xl shadow-md p-6">
    <StarRating rating={rating} />
    <p className="mt-4 text-gray-600 italic">"{quote}"</p>
    <div className="mt-6 flex items-center">
      <Avatar className="h-12 w-12 mr-4">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  </div>
);

const AboutTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCard className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people whose lives have been transformed by our care.
          </p>
        </AnimatedCard>

        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <AnimatedCard delay={index * 100} className="h-full">
                    <TestimonialCard {...testimonial} />
                  </AnimatedCard>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </div>
          </Carousel>

          <div className="text-center mt-10">
            <Button variant="outline" className="group">
              See More Testimonials
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonials;

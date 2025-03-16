
import { useState } from "react";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import AnimatedCard from "../ui/AnimatedCard";

const testimonials = [
  {
    id: 1,
    name: "Jessica Thompson",
    role: "Patient",
    testimonial: "I've been a patient at HealthHub for over 5 years and have always received exceptional care. The staff is friendly and the doctors are knowledgeable and attentive.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Martinez",
    role: "Patient",
    testimonial: "The emergency care I received was outstanding. From the moment I arrived, I was treated with compassion and respect. Thank you to the entire team for your dedication.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Lee",
    role: "Parent",
    testimonial: "My son's pediatrician is amazing! She takes the time to listen to our concerns and explains everything clearly. We feel fortunate to have found such a caring doctor.",
    rating: 4,
  },
  {
    id: 4,
    name: "Robert Johnson",
    role: "Patient",
    testimonial: "After my surgery, the follow-up care was excellent. The nurses checked on me regularly and my surgeon visited daily. I'm grateful for the personalized care I received.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = testimonials.length - displayCount;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  return (
    <section className="section-padding px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-gray-900 mb-4">
              Patient <span className="text-primary-600">Testimonials</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Hear what our patients have to say about their experience with our healthcare services.
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prev}
              className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="p-2 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / displayCount)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <AnimatedCard
                key={testimonial.id}
                className={`px-3 min-w-full md:min-w-[50%] lg:min-w-[33.333%]`}
                delay={index * 100}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-shadow h-full flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{testimonial.testimonial}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

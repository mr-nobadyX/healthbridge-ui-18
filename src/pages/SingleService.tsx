
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Stethoscope, Microscope, Heart, ArrowRight, Star, Clock, Users, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Service features
const serviceFeatures = [
  {
    icon: <Stethoscope className="h-10 w-10" />,
    title: "Expert Doctors",
    description: "Our team of specialists have years of experience and are leaders in their respective fields"
  },
  {
    icon: <Microscope className="h-10 w-10" />,
    title: "Advanced Equipment",
    description: "State-of-the-art technology ensuring precise diagnosis and effective treatment"
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Personalized Care",
    description: "Tailored treatment plans designed specifically for your unique healthcare needs"
  }
];

// Patient journey steps
const patientJourney = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Initial Consultation",
    description: "Meet with our specialists to discuss your symptoms and concerns"
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Diagnosis",
    description: "Comprehensive testing and evaluation to determine the root cause"
  },
  {
    icon: <Stethoscope className="h-6 w-6" />,
    title: "Treatment Plan",
    description: "Personalized treatment strategy tailored to your specific needs"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Care Delivery",
    description: "Expert care from our team of healthcare professionals"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Follow-up",
    description: "Regular check-ins to monitor progress and adjust treatment as needed"
  }
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    text: "The care I received was exceptional. The doctors took the time to explain everything and made me feel comfortable throughout the entire process.",
    rating: 5
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "My experience with this service was nothing short of amazing. The staff was attentive and the results exceeded my expectations.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "From the moment I walked in, I knew I was in good hands. The facility is state-of-the-art and the doctors are truly experts in their field.",
    rating: 4
  }
];

// Related services
const relatedServices = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Cardiology",
    description: "Comprehensive heart care and treatment",
    link: "/services/cardiology"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Family Medicine",
    description: "Healthcare for the entire family",
    link: "/services/family-medicine"
  },
  {
    icon: <Microscope className="h-6 w-6" />,
    title: "Laboratory Services",
    description: "Advanced testing and diagnostics",
    link: "/services/laboratory"
  }
];

const SingleService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Advanced Surgical Care"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <AnimatedCard>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Advanced Surgical Care</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                State-of-the-art surgical procedures performed by experienced specialists using the latest technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white" asChild>
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20" asChild>
                  <Link to="/contact">Contact a Specialist</Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Key Service Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose Our Service</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide exceptional care with a focus on patient comfort and the best possible outcomes
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceFeatures.map((feature, index) => (
                <AnimatedCard key={index} delay={index * 100} className="group">
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-1">
                    <div className="bg-primary-50 rounded-full p-4 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Journey */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Patient Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're with you every step of the way - from consultation to recovery
              </p>
            </AnimatedCard>

            <div className="mt-12 relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {patientJourney.map((step, index) => (
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                      <div className="p-1">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 h-full">
                          <div className="flex flex-col items-center text-center">
                            <div className="bg-primary-100 text-primary-700 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                              {step.icon}
                            </div>
                            <div className="text-xl font-bold text-primary-600 mb-1">Step {index + 1}</div>
                            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 sm:-left-6" />
                <CarouselNext className="-right-4 sm:-right-6" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from our patients about their experiences with our surgical care
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 150} className="h-full">
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our other specialized healthcare services
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <div className="p-6">
                      <div className="bg-primary-50 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link 
                        to={service.link}
                        className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
                      >
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedCard>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Schedule Your Appointment?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our team of healthcare professionals is ready to provide you with exceptional surgical care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50" asChild>
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" /> Emergency Contact
                  </Link>
                </Button>
              </div>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SingleService;

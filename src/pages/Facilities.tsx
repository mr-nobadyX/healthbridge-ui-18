
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Building2, 
  Wifi, 
  Bed, 
  Utensils, 
  ParkingSquare, 
  Stethoscope, 
  Microscope,
  Syringe,
  ActivitySquare,
  Baby,
  Heart,
  Medical,
  Workflow
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";

// Facility data
const facilities = [
  {
    icon: Medical,
    title: "Emergency & Trauma Care",
    description: "24/7 emergency services with specialized medical teams for critical situations",
    image: "/facility-emergency.jpg"
  },
  {
    icon: Microscope,
    title: "Advanced Diagnostic Center",
    description: "Fully equipped lab & imaging services including MRI, CT scan, and X-ray facilities",
    image: "/facility-diagnostic.jpg"
  },
  {
    icon: Syringe,
    title: "Modern Operation Theatres",
    description: "Cutting-edge surgical technology with sterile environments for all types of procedures",
    image: "/facility-surgery.jpg"
  },
  {
    icon: ActivitySquare,
    title: "Intensive Care Units",
    description: "State-of-the-art ICU & NICU providing critical care for adults & newborns",
    image: "/facility-icu.jpg"
  },
  {
    icon: Workflow,
    title: "Rehabilitation & Physiotherapy",
    description: "Comprehensive post-surgery recovery & therapy services for optimal healing",
    image: "/facility-rehab.jpg"
  },
  {
    icon: Stethoscope,
    title: "Specialized Consultation Rooms",
    description: "Private and comfortable spaces for doctor consultations and examinations",
    image: "/facility-consultation.jpg"
  },
  {
    icon: Bed,
    title: "Patient Rooms & Suites",
    description: "Comfortable, fully-furnished rooms designed for patient comfort and recovery",
    image: "/facility-rooms.jpg"
  },
  {
    icon: Utensils,
    title: "Cafeteria & Nutrition Services",
    description: "Healthy meal plans and dietary counseling to support patient recovery",
    image: "/facility-cafeteria.jpg"
  },
  {
    icon: Heart,
    title: "Pharmacy & Medication",
    description: "On-site pharmacy with 24/7 service providing all necessary medications",
    image: "/facility-pharmacy.jpg"
  }
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    text: "The facilities at HealthHub are truly world-class. During my stay, I was impressed by the clean rooms, advanced equipment, and attentive staff. The rehabilitation center helped me recover faster than expected."
  },
  {
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "After my surgery, I spent a week in the patient suite. The modern amenities, nutritious food, and comfortable environment made a significant difference in my recovery journey."
  },
  {
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    text: "The diagnostic center at HealthHub is impressive. I received my test results quickly, and the staff explained everything clearly. The consultation rooms provided privacy and comfort during my visits."
  }
];

// Image gallery data
const galleryImages = [
  "/gallery-reception.jpg",
  "/gallery-surgery.jpg",
  "/gallery-patient-room.jpg",
  "/gallery-diagnostic.jpg",
  "/gallery-cafeteria.jpg",
  "/gallery-lobby.jpg"
];

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedCard>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  State-of-the-Art Facilities for <span className="text-primary-600">Exceptional Care</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  From advanced diagnostics to world-class operation theatres, we provide top-notch facilities to ensure the best patient care. Our modern infrastructure is designed with your comfort and well-being in mind.
                </p>
                <Button className="bg-primary-600 hover:bg-primary-700 text-white" size="lg" asChild>
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
              </AnimatedCard>
              <AnimatedCard delay={300}>
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="Modern hospital facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Key Facility Highlights */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary-600">Facilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive range of modern medical facilities designed to provide you with the highest standard of healthcare.
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <AnimatedCard key={index} delay={index * 100} className="group">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`https://source.unsplash.com/random/800x600/?hospital,medical,${facility.title.toLowerCase().replace(/&|\s+/g, ',')}`}
                        alt={facility.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-50 rounded-full p-3 mr-4">
                          <facility.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{facility.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Tour - Image Gallery */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Take a <span className="text-primary-600">Visual Tour</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our hospital facilities through this gallery of images showcasing our modern infrastructure.
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <AnimatedCard key={index} delay={index * 100}>
                  <div className="rounded-lg overflow-hidden shadow-md h-64">
                    <img
                      src={`https://source.unsplash.com/random/800x600/?hospital,medical,facility,healthcare,${index}`}
                      alt={`Hospital facility ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patient <span className="text-primary-600">Testimonials</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our patients about their experiences with our facilities and care.
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 150}>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    </div>
                    <p className="text-gray-600 italic flex-grow">"{testimonial.text}"</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Us & Experience World-Class Care!
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Our team of healthcare professionals is ready to provide you with the exceptional care you deserve.
              </p>
              <Button className="bg-white text-primary-600 hover:bg-primary-50" size="lg" asChild>
                <Link to="/appointments">Book an Appointment</Link>
              </Button>
            </AnimatedCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;

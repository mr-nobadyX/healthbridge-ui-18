
import { useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, Clock, FileText, Heart, Microscope, Phone, Star, Stethoscope, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { servicesData } from "@/data/servicesData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SingleService = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { "*": serviceId } = useParams();
  
  const service = serviceId ? servicesData[serviceId] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!service) {
      toast({
        title: "Service not found",
        description: "The requested service doesn't exist or has been moved.",
        variant: "destructive"
      });
      
      // Redirect to services page if service not found
      setTimeout(() => {
        navigate("/services");
      }, 2000);
    }
  }, [service, toast, navigate]);
  
  // If service not found, show minimal content with redirection
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Loading service information...</h1>
            <p className="text-gray-600 mb-6">You'll be redirected to our services page shortly.</p>
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <AnimatedCard>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {service.shortDescription}
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

        {/* Detailed Description Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <AnimatedCard>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our {service.title} Service</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="text-lg leading-relaxed mb-6">{service.detailedDescription}</p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Our Procedures Include:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.procedures.map((procedure, index) => (
                        <li key={index} className="flex items-center">
                          <div className="bg-primary-50 rounded-full p-1 mr-3">
                            <ArrowRight className="h-4 w-4 text-primary-600" />
                          </div>
                          <span className="text-gray-700">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </div>

              <div>
                <AnimatedCard delay={200}>
                  <Card className="bg-blue-50 border-primary-100">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-700">Who Is This Service For?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {service.targetAudience}
                      </p>
                      <div className="flex items-center justify-center mt-4">
                        <service.icon className="h-20 w-20 text-primary-400 opacity-80" />
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our {service.title} Service</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine expertise, advanced technology, and compassionate care to provide exceptional results
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.keyHighlights.map((highlight, index) => (
                <AnimatedCard key={index} delay={index * 100} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary-50">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">
                        {highlight.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        {highlight.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore other specialized healthcare services that might complement your care
              </p>
            </AnimatedCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedServices.map((relatedServiceId, index) => {
                const relatedService = servicesData[relatedServiceId];
                
                if (!relatedService) return null;
                
                return (
                  <AnimatedCard key={index} delay={index * 100}>
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="p-6">
                        <div className="bg-primary-50 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                          <relatedService.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{relatedService.title}</h3>
                        <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                        <Link 
                          to={`/services/${relatedServiceId}`}
                          className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors"
                        >
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
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
                Our team of healthcare professionals is ready to provide you with exceptional {service.title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50" asChild>
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" /> Contact Us
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

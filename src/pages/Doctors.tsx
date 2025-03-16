
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample doctor data
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15 years",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 4.9,
    featured: true,
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology and has helped thousands of patients manage and improve their heart health."
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12 years",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    featured: false
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "10 years",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4.9,
    featured: false
  },
  {
    id: 4,
    name: "Dr. Robert Wilson",
    specialty: "Orthopedics",
    experience: "20 years",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5.0,
    featured: false
  },
  {
    id: 5,
    name: "Dr. Jessica Parker",
    specialty: "Dermatology",
    experience: "8 years",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 4.7,
    featured: false
  },
  {
    id: 6,
    name: "Dr. David Kim",
    specialty: "General Medicine",
    experience: "14 years",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4.6,
    featured: false
  },
  {
    id: 7,
    name: "Dr. Amanda Nelson",
    specialty: "Oncology",
    experience: "16 years",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    rating: 4.9,
    featured: false
  },
  {
    id: 8,
    name: "Dr. Thomas Reyes",
    specialty: "Psychiatry",
    experience: "11 years",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    rating: 4.8,
    featured: false
  }
];

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: "Jennifer Smith",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    doctor: "Dr. Sarah Johnson",
    rating: 5,
    review: "Dr. Johnson was incredibly thorough and took the time to explain everything. Her care was exceptional, and I felt completely at ease."
  },
  {
    id: 2,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
    doctor: "Dr. Robert Wilson",
    rating: 5,
    review: "My knee surgery with Dr. Wilson was a complete success. His expertise and the care provided by his team were outstanding."
  },
  {
    id: 3,
    name: "Sophia Garcia",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    doctor: "Dr. Emily Rodriguez",
    rating: 4,
    review: "Dr. Rodriguez has a wonderful way with children. My son actually looks forward to his appointments now!"
  }
];

// All specialties extracted from doctor data
const specialties = ["All", ...new Set(doctorsData.map(doctor => doctor.specialty))];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  
  // Filter doctors based on search term and active specialty
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = activeSpecialty === "All" || doctor.specialty === activeSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  // Get featured doctor
  const featuredDoctor = doctorsData.find(doctor => doctor.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedCard className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet Our Team of <span className="text-primary-600">Expert Healthcare Professionals</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our doctors bring years of experience, specialized training, and a compassionate approach to every patient interaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary-600 hover:bg-primary-700" asChild>
                  <a href="#find-doctor">Find a Specialist</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/appointments">Book an Appointment</Link>
                </Button>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={300} className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                  alt="Healthcare professionals" 
                  className="w-full h-[350px] md:h-[400px] object-cover"
                />
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section id="find-doctor" className="py-12 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by doctor name or specialty..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Tabs defaultValue="All" className="w-full md:w-auto">
                  <TabsList className="grid grid-cols-2 md:flex md:space-x-2">
                    {specialties.map((specialty, index) => (
                      <TabsTrigger 
                        key={index} 
                        value={specialty}
                        onClick={() => setActiveSpecialty(specialty)}
                      >
                        {specialty}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Featured Doctor */}
        {featuredDoctor && (
          <section className="py-16 px-4 md:px-8 bg-blue-50">
            <div className="max-w-7xl mx-auto">
              <AnimatedCard className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Featured Doctor of the Month
                </h2>
              </AnimatedCard>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="md:col-span-1">
                    <img 
                      src={featuredDoctor.image}
                      alt={featuredDoctor.name}
                      className="w-full h-full object-cover object-center"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredDoctor.name}</h3>
                    <p className="text-primary-600 text-lg mb-2">{featuredDoctor.specialty}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(featuredDoctor.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">{featuredDoctor.rating}</span>
                      <span className="ml-1 text-gray-600">•</span>
                      <span className="ml-1 text-gray-600">{featuredDoctor.experience} experience</span>
                    </div>
                    <p className="text-gray-600 mb-6">{featuredDoctor.bio}</p>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-primary-600 hover:bg-primary-700" asChild>
                        <Link to="/appointments">Schedule an Appointment</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to={`/doctors/${featuredDoctor.id}`}>View Full Profile</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Doctors Grid */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary-600">Specialists</span>
              </h2>
              <p className="text-lg text-gray-600">
                Each doctor brings specialized expertise and a commitment to providing exceptional patient care.
              </p>
            </AnimatedCard>
            
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredDoctors.map((doctor) => (
                  <AnimatedCard key={doctor.id} className="group">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                      <div className="relative pt-[100%] bg-gray-100">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <CardContent className="p-5 flex-grow flex flex-col">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">{doctor.name}</h3>
                        <p className="text-primary-600 mb-2">{doctor.specialty}</p>
                        <div className="flex items-center mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(doctor.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-600">{doctor.rating}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                        <div className="mt-auto">
                          <Link
                            to={`/doctors/${doctor.id}`}
                            className="text-primary-600 inline-flex items-center hover:text-primary-700 transition-colors"
                          >
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No doctors found matching your criteria.</p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveSpecialty("All");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 md:px-8 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedCard className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Patient <span className="text-primary-600">Testimonials</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read what our patients have to say about their experiences with our doctors.
              </p>
            </AnimatedCard>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={testimonial.id} delay={index * 100}>
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-6 flex-grow">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">Patient of {testimonial.doctor}</p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/testimonials" className="inline-flex items-center">
                  See More Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <AnimatedCard>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Medical Assistance? Consult Our Experts
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">
                Schedule an appointment with one of our specialists today and take the first step towards better health.
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

export default Doctors;

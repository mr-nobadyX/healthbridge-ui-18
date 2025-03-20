
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  Star, 
  Award, 
  User, 
  Stethoscope, 
  BookOpen, 
  MessageSquare,
  CheckCircle, 
  ChevronRight, 
  Calendar as CalendarIcon 
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import AnimatedCard from "@/components/ui/AnimatedCard";

// Sample doctor data - in a real app, this would come from an API
const doctorsData = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    title: "Chief of Cardiology",
    experience: "15+ years",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    backgroundImage: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3173&q=80",
    rating: 4.9,
    totalReviews: 124,
    awards: ["Best Cardiologist 2022", "Research Excellence Award"],
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "2008" },
      { degree: "Cardiology Fellowship", institution: "Mayo Clinic", year: "2012" }
    ],
    bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. Her approach combines cutting-edge techniques with compassionate patient care. Dr. Johnson specializes in preventive cardiology, interventional procedures, and has helped thousands of patients manage and improve their cardiovascular health.",
    specializations: [
      { name: "Preventive Cardiology", description: "Heart disease prevention through lifestyle and medication" },
      { name: "Interventional Procedures", description: "Minimally invasive cardiac procedures" },
      { name: "Heart Failure Management", description: "Comprehensive treatment plans for heart failure patients" },
      { name: "Cardiac Rehabilitation", description: "Programs to improve heart health after cardiac events" }
    ],
    schedule: [
      { day: "Monday", hours: "9:00 AM - 4:00 PM" },
      { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 4:00 PM" },
      { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
      { day: "Friday", hours: "9:00 AM - 3:00 PM" }
    ],
    reviews: [
      { id: 1, name: "Michael Brown", rating: 5, date: "June 12, 2023", comment: "Dr. Johnson is exceptional. She took the time to thoroughly explain my condition and treatment options. Her expertise and bedside manner are outstanding." },
      { id: 2, name: "Jennifer Smith", rating: 5, date: "May 28, 2023", comment: "After seeing multiple specialists for my heart condition, Dr. Johnson was the one who finally got to the root of the problem. I'm grateful for her thoroughness and care." },
      { id: 3, name: "Robert Davis", rating: 4, date: "April 15, 2023", comment: "Very knowledgeable doctor. The wait times can be long, but the quality of care is worth it." }
    ],
    languages: ["English", "Spanish", "French"],
    publications: [
      { title: "Advances in Preventive Cardiology: A Comprehensive Review", journal: "Journal of Cardiovascular Medicine", year: "2021" },
      { title: "Impact of Lifestyle Modifications on Heart Failure Outcomes", journal: "American Heart Journal", year: "2019" }
    ]
  }
];

const DoctorProfile = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const [doctor, setDoctor] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simulate fetching doctor data
    setTimeout(() => {
      const foundDoctor = doctorsData.find(d => d.id === doctorId) || doctorsData[0];
      setDoctor(foundDoctor);
      setIsLoading(false);
    }, 500);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [doctorId]);

  if (isLoading || !doctor) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse h-20 w-20 rounded-full bg-primary-100"></div>
          <div className="text-lg text-primary-600">Loading doctor profile...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Immersive Split Screen */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] w-full mt-16">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/70 to-transparent"
            style={{ zIndex: 1 }}
          ></div>
          <img 
            src={doctor.backgroundImage} 
            alt="Medical environment" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Doctor Portrait - Positioned on the right */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%] z-0">
          <div className="h-full relative">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-950/10 via-blue-900/30 to-transparent" style={{ zIndex: 1 }}></div>
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover object-center"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <div className="flex flex-col md:flex-row justify-between h-full">
            {/* Left side - Doctor info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl py-10 md:py-24 flex flex-col justify-center"
            >
              <div className="md:hidden mb-8 mx-auto rounded-full border-4 border-white shadow-xl w-40 h-40 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="text-primary-600 bg-white/90 text-sm py-1 font-medium">
                  {doctor.specialty}
                </Badge>
                <Badge variant="outline" className="text-white border-white/50 bg-white/10 text-sm py-1 font-medium">
                  {doctor.experience} Experience
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                {doctor.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                {doctor.title}
              </p>
              
              <p className="text-white/80 text-lg md:max-w-xl mb-8">
                {doctor.bio.split('.')[0] + '.'}
              </p>
              
              <div className="flex flex-wrap gap-4 mt-2">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="/appointments">
                    <CalendarIcon className="mr-1" size={20} />
                    Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 gap-2">
                  <a href="#about">Learn More</a>
                  <ChevronRight size={18} />
                </Button>
              </div>
            </motion.div>
            
            {/* Right side - Stats card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden md:flex md:items-center"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl w-80">
                <CardContent className="p-6">
                  <div className="space-y-4 text-white">
                    <div className="flex items-center gap-3 py-2">
                      <div className="p-2 rounded-full bg-primary-600/20">
                        <User size={20} className="text-primary-100" />
                      </div>
                      <div>
                        <p className="font-medium">Patients Treated</p>
                        <p className="text-2xl font-bold">5,000+</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 py-2">
                      <div className="p-2 rounded-full bg-primary-600/20">
                        <Stethoscope size={20} className="text-primary-100" />
                      </div>
                      <div>
                        <p className="font-medium">Years of Experience</p>
                        <p className="text-2xl font-bold">{doctor.experience.replace('+', '')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 py-2">
                      <div className="p-2 rounded-full bg-primary-600/20">
                        <Star size={20} className="text-primary-100" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="font-medium">Rating</p>
                          <div className="flex ml-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${
                                  i < Math.floor(doctor.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-white/30"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-2xl font-bold">{doctor.rating} <span className="text-sm font-normal">({doctor.totalReviews} reviews)</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 py-2">
                      <div className="p-2 rounded-full bg-primary-600/20">
                        <Award size={20} className="text-primary-100" />
                      </div>
                      <div>
                        <p className="font-medium">Awards</p>
                        <p className="text-lg font-bold">{doctor.awards.length} Achievements</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-white/80 text-sm mb-2">Scroll for more</p>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div 
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Nav - Appears when scrolling */}
      <div className={`sticky top-16 z-30 transition-all duration-300 bg-white shadow-md ${
        scrolled ? "translate-y-0" : "-translate-y-20 opacity-0"
      }`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-primary-100">
              <AvatarImage src={doctor.image} alt={doctor.name} />
              <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-primary-600 text-sm">{doctor.specialty}</p>
            </div>
          </div>
          <Button size="sm" asChild>
            <Link to="/appointments">Book Appointment</Link>
          </Button>
        </div>
      </div>
      
      {/* Main Content Section */}
      <main className="flex-grow bg-white">
        {/* Doctor Tabs */}
        <section id="about" className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="flex space-x-2 mb-8 w-full max-w-3xl mx-auto justify-center">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="specializations">Specializations</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
              </TabsList>
              
              {/* About Tab */}
              <TabsContent value="about">
                <AnimatedCard className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">About Dr. {doctor.name.split(' ')[1]}</h2>
                      <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="mb-4">{doctor.bio}</p>
                        <p>Dr. Johnson is dedicated to providing personalized care and developing treatment plans tailored to each patient's specific needs. She believes in empowering patients through education and involving them in decision-making regarding their heart health.</p>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Education & Training</h3>
                      <div className="space-y-4">
                        {doctor.education.map((edu, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                              <BookOpen size={18} className="text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{edu.degree}</p>
                              <p className="text-gray-600">{edu.institution}, {edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Awards & Recognition</h3>
                      <div className="space-y-4">
                        {doctor.awards.map((award, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0 mt-1">
                              <Award size={18} className="text-primary-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{award}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="w-full h-60 object-cover object-center"
                          />
                          <div className="p-6 space-y-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Languages</h3>
                              <div className="flex flex-wrap gap-2">
                                {doctor.languages.map((language, index) => (
                                  <Badge key={index} variant="outline" className="text-gray-600">
                                    {language}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                              <p className="text-gray-600">For appointments and inquiries:</p>
                              <p className="text-primary-600 font-medium">+1 (555) 123-4567</p>
                              <p className="text-primary-600 font-medium">johnson@healthhub.com</p>
                            </div>
                            
                            <Button className="w-full mt-4" asChild>
                              <Link to="/appointments">Schedule a Visit</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              {/* Specializations Tab */}
              <TabsContent value="specializations">
                <AnimatedCard>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Specialized Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {doctor.specializations.map((specialization, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary-600">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {specialization.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {specialization.description}
                          </p>
                          <div className="mt-4">
                            <Link 
                              to="#" 
                              className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700"
                            >
                              Learn more
                              <ChevronRight size={16} className="ml-1" />
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              {/* Schedule Tab */}
              <TabsContent value="schedule">
                <AnimatedCard>
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Consultation Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                            <Calendar className="mr-2 text-primary-600" size={20} />
                            Weekly Schedule
                          </h3>
                          <div className="space-y-4">
                            {doctor.schedule.map((slot, index) => (
                              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                                <p className="font-medium text-gray-900">{slot.day}</p>
                                <div className="flex items-center gap-2">
                                  <Clock size={16} className="text-gray-500" />
                                  <p className="text-gray-600">{slot.hours}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardContent className="p-6 space-y-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Information</h3>
                          
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                            <p className="text-gray-600">
                              HealthHub Medical Center<br />
                              123 Medical Plaza, Suite 456<br />
                              New York, NY 10001
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Appointment Types</h4>
                            <div className="space-y-2">
                              <div className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-600">In-person consultations</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-600">Telehealth appointments</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-600">Emergency consultations (for existing patients)</p>
                              </div>
                            </div>
                          </div>
                          
                          <Button className="w-full" asChild>
                            <Link to="/appointments">Book an Appointment</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              {/* Reviews Tab */}
              <TabsContent value="reviews">
                <AnimatedCard>
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900">Patient Reviews</h2>
                      <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              className={`${
                                i < Math.floor(doctor.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-lg font-medium">{doctor.rating}</span>
                        <span className="text-gray-600">({doctor.totalReviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {doctor.reviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarFallback className="bg-primary-100 text-primary-600">{review.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium text-gray-900">{review.name}</p>
                                  <p className="text-gray-500 text-sm">{review.date}</p>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={`${
                                      i < review.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-600">"{review.comment}"</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <Button variant="outline">View All Reviews</Button>
                    </div>
                  </div>
                </AnimatedCard>
              </TabsContent>
              
              {/* Publications Tab */}
              <TabsContent value="publications">
                <AnimatedCard>
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Publications</h2>
                    <div className="space-y-6">
                      {doctor.publications.map((pub, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="outline" className="text-primary-600 border-primary-200 bg-primary-50">
                                {pub.journal}
                              </Badge>
                              <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50">
                                {pub.year}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4">
                              This research paper explores advancements in the field of cardiology and their implications for patient care and treatment outcomes.
                            </p>
                            <Button variant="link" className="text-primary-600 p-0 h-auto">
                              Read Abstract
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      {/* Floating Appointment Button (Mobile) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40">
        <Button size="lg" className="rounded-full h-14 w-14 p-0 shadow-lg" asChild>
          <Link to="/appointments">
            <CalendarIcon size={24} />
          </Link>
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorProfile;

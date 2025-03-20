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
  Calendar as CalendarIcon,
  ArrowRight
} from "lucide-react";
import { motion } from "@/components/ui/motion";
import AnimatedCard from "@/components/ui/AnimatedCard";

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
      
      <section className="relative min-h-[90vh] w-full mt-16 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[65%] h-full bg-primary-600 skew-x-[-12deg] origin-top-right transform -translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-2/3 h-24 bg-primary-100 skew-x-[-12deg] origin-bottom-left"></div>
        </div>
        
        <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="w-full h-full opacity-15">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: `${Math.random() * 300 + 50}px`,
                    height: `${Math.random() * 300 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: 0.2
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
            
            <div className="lg:col-span-6 z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="inline-block relative">
                  <span className="absolute -left-4 -top-4 w-12 h-12 bg-primary-100 rounded-full"></span>
                  <Badge variant="secondary" className="relative z-10 text-primary-700 font-semibold py-2 px-4 text-sm">
                    {doctor.specialty} Specialist
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight relative">
                  {doctor.name}
                  <span className="absolute -top-6 -left-6 text-9xl text-primary-50 font-bold z-[-1] opacity-80">Dr</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-primary-700">
                  {doctor.title}
                </p>
                
                <div className="max-w-lg">
                  <p className="text-gray-700 text-lg">
                    {doctor.bio.split('.')[0] + '.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-white shadow-md flex flex-col items-center">
                    <div className="p-2 rounded-full bg-primary-50">
                      <Star size={24} className="text-yellow-500" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{doctor.rating}</p>
                    <p className="text-sm text-gray-500">Rating</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white shadow-md flex flex-col items-center">
                    <div className="p-2 rounded-full bg-primary-50">
                      <User size={24} className="text-primary-600" />
                    </div>
                    <p className="text-2xl font-bold mt-2">5K+</p>
                    <p className="text-sm text-gray-500">Patients</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white shadow-md flex flex-col items-center">
                    <div className="p-2 rounded-full bg-primary-50">
                      <Award size={24} className="text-primary-600" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{doctor.awards.length}</p>
                    <p className="text-sm text-gray-500">Awards</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white shadow-md flex flex-col items-center">
                    <div className="p-2 rounded-full bg-primary-50">
                      <Stethoscope size={24} className="text-primary-600" />
                    </div>
                    <p className="text-2xl font-bold mt-2">{doctor.experience.replace('+', '')}</p>
                    <p className="text-sm text-gray-500">Years</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button size="lg" className="gap-2 rounded-full px-8" asChild>
                    <Link to="/appointments">
                      <CalendarIcon className="mr-1" size={20} />
                      Book Appointment
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-primary-200 text-primary-700 hover:bg-primary-50 gap-2 rounded-full px-8">
                    <a href="#about">Doctor Profile</a>
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-6 z-10 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-xl relative z-10">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary-200 rounded-full z-0"></div>
                  
                  <div className="absolute -top-4 right-0 transform translate-x-1/2 bg-white rounded-full py-3 px-6 shadow-lg">
                    <p className="text-primary-700 font-bold">{doctor.experience} Experience</p>
                  </div>
                  
                  <div className="absolute -bottom-4 left-0 transform -translate-x-1/3 bg-white rounded-full py-3 px-6 shadow-lg">
                    <p className="text-primary-700 font-bold flex items-center">
                      <BookOpen size={16} className="mr-2" />
                      {doctor.education[0].institution}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-gray-600 text-sm mb-2">Scroll for more</p>
            <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex justify-center">
              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
            </div>
          </motion.div>
        </div>
      </section>
      
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
      
      <main className="flex-grow bg-white">
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

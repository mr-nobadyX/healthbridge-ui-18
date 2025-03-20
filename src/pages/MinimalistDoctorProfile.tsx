
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "@/components/ui/motion";
import { 
  Calendar, 
  Clock,
  User, 
  Award, 
  GraduationCap,
  Stethoscope, 
  ArrowRight,
  ChevronDown,
  Mail,
  Phone
} from "lucide-react";

// Sample doctor data
const doctor = {
  id: "1",
  name: "Dr. Sarah Johnson",
  specialty: "Cardiology",
  title: "Chief of Cardiology",
  experience: "15+",
  image: "https://randomuser.me/api/portraits/women/21.jpg",
  education: [
    { degree: "M.D.", institution: "Harvard Medical School", year: "2008" },
    { degree: "Cardiology Fellowship", institution: "Mayo Clinic", year: "2012" }
  ],
  stats: [
    { label: "Experience", value: "15+ years" },
    { label: "Surgeries", value: "500+" },
    { label: "Patients", value: "5,000+" }
  ],
  bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. Her approach combines cutting-edge techniques with compassionate patient care.",
  expertise: [
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
  contact: {
    email: "sarah.johnson@medicalhub.com",
    phone: "+1 (555) 123-4567",
    office: "Medical Center, Suite 304"
  }
};

const MinimalistDoctorProfile = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMoreBio, setShowMoreBio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section - Minimalist Split Diagonal */}
      <section className="relative mt-16 min-h-[80vh] overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute bottom-0 right-0 w-[70%] h-[85%] bg-primary-50 transform -skew-x-12 origin-bottom-right z-0"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Doctor Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 transform scale-110 z-0"></div>
                <Avatar className="w-64 h-64 md:w-80 md:h-80 border-8 border-white shadow-xl relative z-10">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </Avatar>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow-md p-3 z-20">
                  <Badge variant="outline" className="bg-primary-50 border-primary-100 text-primary-800 px-3 py-1.5">
                    {doctor.experience} Years
                  </Badge>
                </div>
              </div>
            </motion.div>
            
            {/* Doctor Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-7 space-y-6 text-center md:text-left"
            >
              <div>
                <Badge variant="secondary" className="mb-3">
                  {doctor.specialty}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h1>
                <p className="text-xl text-primary-800 font-medium">
                  {doctor.title}
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto md:mx-0">
                {doctor.stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-white shadow-sm">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              {/* Education Summary */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-gray-700">
                <GraduationCap className="h-5 w-5 text-primary-600" />
                <div>
                  <p className="font-medium">
                    {doctor.education[0].degree} - {doctor.education[0].institution}
                  </p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="gap-2" asChild>
                  <Link to="#details">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <Link to="#details" className="flex flex-col items-center text-gray-400 hover:text-primary-600 transition-colors">
              <p className="text-sm mb-2">Scroll for more</p>
              <ChevronDown className="animate-bounce" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Nav - Appears when scrolling */}
      <div className={`sticky top-16 z-30 transition-all duration-300 bg-white shadow-md ${
        scrolled ? "translate-y-0" : "-translate-y-20 opacity-0"
      }`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border-2 border-primary-100">
              <img src={doctor.image} alt={doctor.name} />
            </Avatar>
            <div>
              <h3 className="font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-primary-600 text-sm">{doctor.specialty}</p>
            </div>
          </div>
          <Button size="sm" asChild>
            <Link to="#contact">Contact</Link>
          </Button>
        </div>
      </div>
      
      {/* Main Content Section */}
      <main id="details" className="container mx-auto px-4 py-16 space-y-20">
        {/* About Section */}
        <section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="text-primary-600" />
              About
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {showMoreBio ? doctor.bio : `${doctor.bio.split('.')[0]}.`}
                </p>
                {doctor.bio.split('.').length > 1 && (
                  <Button 
                    variant="link" 
                    onClick={() => setShowMoreBio(!showMoreBio)}
                    className="mt-2 p-0 h-auto text-primary-600"
                  >
                    {showMoreBio ? 'Show Less' : 'Read More'}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Areas of Expertise */}
        <section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Stethoscope className="text-primary-600" />
              Areas of Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {doctor.expertise.map((area, index) => (
                <Card key={index} className="bg-white border-l-4 border-l-primary-200">
                  <CardContent className="p-4">
                    <h3 className="font-bold text-gray-900 mb-1">{area.name}</h3>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Availability & Timings */}
        <section>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Calendar className="text-primary-600" />
              Availability & Timings
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableBody>
                    {doctor.schedule.map((slot, index) => (
                      <TableRow key={index} className="border-b border-gray-100">
                        <TableCell className="py-3 font-medium">{slot.day}</TableCell>
                        <TableCell className="py-3 text-right flex items-center justify-end gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          {slot.hours}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <Card className="overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center gap-6">
                <Badge variant="outline" className="px-4 py-2 bg-blue-50 border-blue-100 text-blue-700 mb-2">
                  Now Accepting New Patients
                </Badge>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
                  <Button variant="outline" className="gap-2 h-14" asChild>
                    <a href={`mailto:${doctor.contact.email}`}>
                      <Mail className="h-5 w-5" />
                      Email
                    </a>
                  </Button>
                  <Button className="gap-2 h-14" asChild>
                    <a href={`tel:${doctor.contact.phone}`}>
                      <Phone className="h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
                
                <div className="text-sm text-gray-500 mt-4">
                  <p>Office: {doctor.contact.office}</p>
                  <p className="mt-1">For emergency appointments, please call directly.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MinimalistDoctorProfile;

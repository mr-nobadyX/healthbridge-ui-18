import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Building2, Wifi, Bed, Utensils, ParkingSquare, Stethoscope } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description: "State-of-the-art medical facilities with the latest technology"
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description: "Stay connected throughout your stay with high-speed internet"
  },
  {
    icon: Bed,
    title: "Comfortable Rooms",
    description: "Private and semi-private rooms with modern amenities"
  },
  {
    icon: Utensils,
    title: "Cafeteria",
    description: "Nutritious meals prepared under strict hygiene standards"
  },
  {
    icon: ParkingSquare,
    title: "Parking Space",
    description: "Ample parking space for patients and visitors"
  },
  {
    icon: Stethoscope,
    title: "24/7 Pharmacy",
    description: "Round-the-clock pharmacy services for emergencies"
  }
];

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary-600">Facilities</span>
              </h2>
              <p className="text-gray-600">
                Experience healthcare in a modern and comfortable environment with our state-of-the-art facilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-primary-50 rounded-lg p-3 w-fit mb-4">
                    <facility.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;


import { MapPin, Phone, Mail } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Healthcare Blvd", "Medical City, CA 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["Emergency: (800) 555-0123", "General: (800) 555-0124"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["appointments@healthhub.com", "support@healthhub.com"],
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary-50 p-4 rounded-full mb-4">
                <item.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              {item.details.map((detail, idx) => (
                <p
                  key={idx}
                  className="text-gray-600 mb-1"
                >
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

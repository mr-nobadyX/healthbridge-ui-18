
import { MapPin } from "lucide-react";

const ContactMap = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Find Us
      </h2>
      <div className="flex items-start mb-6">
        <MapPin className="h-5 w-5 text-primary-600 mr-2 mt-1" />
        <p className="text-gray-600">123 Healthcare Blvd, Medical City, CA 12345</p>
      </div>
      <div className="h-[400px] rounded-lg overflow-hidden border border-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1647427857671!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hospital Location"
          className="rounded-lg"
        ></iframe>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Click on the map for directions</p>
      </div>
    </div>
  );
};

export default ContactMap;

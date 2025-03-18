
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const SocialLinks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Connect With Us
        </h2>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-primary-600 transition-colors"
              aria-label={link.label}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;

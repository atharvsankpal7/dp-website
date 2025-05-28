import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.5) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info - Enhanced */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <span className="flex items-center text-2xl lg:text-3xl font-bold">
                <span className="mr-2 group-hover:text-blue-400 transition-colors duration-300">
                  Display
                </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Promotion
                </span>
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              Your prime choice for professional digital marketing solutions. We
              help businesses grow their online presence and achieve measurable
              results through innovative strategies.
            </p>

            {/* Social Media Links - Improved */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://www.facebook.com/displaypromo"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/displaypromo"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/display-promotion-19799131b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-blue-700 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link
                href="https://www.youtube.com/@displaydigitalpromotionage8308"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Services Links - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                {
                  href: "/services/development",
                  text: "Website Design & Development",
                },
                { href: "/services/graphic-design", text: "Graphics Design" },
                {
                  href: "/services/content-creation",
                  text: "Content Creation",
                },
                {
                  href: "/services/digital-marketing",
                  text: "Digital Marketing",
                },
                {
                  href: "/services/social-media-marketing",
                  text: "Social Media Marketing",
                },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group text-sm lg:text-base"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 text-gray-300 group">
                <div className="bg-white/10 p-2.5 rounded-xl mt-1 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm lg:text-base">
                  <p className="font-medium text-white mb-1">Visit Us</p>
                  <p>Display Promotion, PAP3, near BSNL Office,</p>
                  <p>MIDC Area, Baramati, Maharashtra 413133</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 text-gray-300 group">
                <div className="bg-white/10 p-2.5 rounded-xl mt-1 group-hover:bg-green-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm lg:text-base">
                  <p className="font-medium text-white mb-1">Call Us</p>
                  <Link
                    href="tel:+917767808010"
                    className="hover:text-green-400 transition-colors duration-300"
                  >
                    +91 9689 433 293
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 text-gray-300 group">
                <div className="bg-white/10 p-2.5 rounded-xl mt-1 group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm lg:text-base">
                  <p className="font-medium text-white mb-1">Email Us</p>
                  <Link
                    href="mailto:displaypromo0110@gmail.com"
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    displaypromo0110@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Enhanced */}
            <Link
              href="https://wa.me/+917767808010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-sm lg:text-base font-medium"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default FooterComponent;

import React from "react";
import Link from "next/link";

import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

interface Props {}

const FooterComponent = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link href="/" className="text-2xl font-bold">
                <span className="flex items-center">
                  <span className="mr-2">Display</span>
                  <span className="text-orange-500">Promotion</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Your prime choice for professional digital marketing solutions. We
              help businesses grow their online presence and achieve measurable
              results.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/displaypromo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition duration-300"
              >

                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/displaypromo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition duration-300"
              >

                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/display-promotion-19799131b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition duration-300"
              >

                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@displaydigitalpromotionage8308"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition duration-300"
              >

                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="https://wa.me/+919689433293"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-green-600 p-2 rounded-full transition duration-300"
              >

                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/website-design"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Web App & Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content-creation"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-marketing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Display Promotion, PAP3, near BSNL Office,
                  <br />
                  MIDC Area, Baramati, Maharashtra 413133
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+91 9689 433 293</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@displaypromotion.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-gray-400 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  Mon-Fri: 9:00 AM - 6:00 PM IST
                  <br />
                  Sat: 10:00 AM - 2:00 PM IST
                </span>
              </li>
            </ul>

            {/* WhatsApp Link */}
            <Link
              href="https://wa.me/+919689433293"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300"
            >

              <MessageCircle className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest digital marketing
              trends and tips.
            </p>
            <form className="mb-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Display Promotion. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white text-sm transition duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
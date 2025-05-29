"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="bg-white text-gray-900 py-16 md:py-32 overflow-hidden relative min-h-screen flex items-center justify-center border-b-2 border-blue-300 flex-col md:flex-row"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
          {/* Mascot/Image Content */}
          <div
            className={`w-full md:w-1/2 relative z-10 transition-all duration-1000 ease-out delay-300 order-first md:order-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <Image
                  src="/mascot.png?height=600&width=600"
                  alt="Digital Growth Mascot Character"
                  width={600}
                  height={600}
                  className="mx-auto w-full max-w-md md:max-w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl"
                  loading="lazy"
                />

                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 hidden sm:block">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-2xl font-bold block leading-none">
                        320%
                      </span>
                      <span className="text-sm font-medium block text-blue-100">
                        Avg. ROI
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#FFD700"
                          stroke="#FFD700"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xl font-bold block text-gray-900 leading-none">
                        5-Star
                      </span>
                      <span className="text-sm font-medium block text-gray-500">
                        Rated Agency
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`w-full md:w-1/2 mb-12 md:mb-0 z-10 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-50 to-blue-50 border border-blue-100">
              <div className="flex items-center">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                <span className="text-sm font-medium text-blue-700">
                  Digital Marketing Experts
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="relative inline-block">
                <span
                  className={` relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 `}
                >
                  PRIME CHOICE
                </span>
                <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-gradient-to-r  opacity-30 rounded"></span>
              </span>{" "}
              to Grow Your Profession
            </h1>
            <p className="text-lg md:text-xl mb-8 md:mb-10 text-gray-600 leading-relaxed max-w-xl">
              Boost your digital presence with customized strategies that
              deliver measurable results. Our expert team creates solutions
              tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <Link
                href="#services"
                className="relative overflow-hidden group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>

              <Link
                href="#contact"
                className="relative overflow-hidden group px-6 py-3 md:px-8 md:py-4 bg-white text-blue-600 font-medium rounded-xl border-2 border-blue-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
            <div className="mt-12 md:mt-16 lg:block hidden">
              <p className="font-medium mb-6 text-gray-700 flex items-center text-lg">
                <Star className="h-5 w-5 text-yellow-500 mr-3" fill="#EAB308" />
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                {[
                  {
                    name: "Sakal Vidya Expo",
                    logo: "/logos/sakal_vidya_expo_logo.jpg",
                  },
                  {
                    name: "Baramati Sports Foundation",
                    logo: "/logos/bsf_logo.png",
                  },
                  {
                    name: "Samarth Business Group",
                    logo: "/logos/sbg_logo.png",
                  },
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100/70 group w-48 h-32 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        width={120} 
                        height={60}
                        className="opacity-75 group-hover:opacity-100 transition-all duration-300 filter group-hover:brightness-110 object-contain w-full h-full" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-pulse">
        <span className="text-sm mb-2 text-gray-500 hover:text-blue-600 transition-colors duration-300">
          Scroll to explore
        </span>
        <div className="w-8 h-12 border-2 border-blue-300 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

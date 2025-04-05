"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      className="bg-white text-gray-900 py-24 md:py-32 overflow-hidden relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div
            className={`w-full md:w-1/2 mb-12 md:mb-0 z-10 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100">
              <div className="flex items-center">
                <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2"></span>
                <span className="text-sm font-medium text-purple-700">Digital Marketing Experts</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600">
                  Prime Choice
                </span>
                <span className="absolute -bottom-1.5 left-0 w-full h-3 bg-gradient-to-r from-purple-200 to-blue-200 opacity-30 rounded"></span>
              </span>{" "}
              to Grow Your Profession
            </h1>

            <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed max-w-xl">
              Boost your digital presence with customized strategies that deliver measurable results. Our expert team
              creates solutions tailored to your business goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#services"
                className="relative overflow-hidden group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-xl shadow-lg shadow-purple-200 hover:shadow-xl hover:shadow-purple-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              <Link
                href="#contact"
                className="relative overflow-hidden group px-8 py-4 bg-white text-purple-600 font-medium rounded-xl border-2 border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>

            <div className="mt-16">
              <p className="font-medium mb-4 text-gray-600 flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" fill="#EAB308" />
                Trusted by leading brands
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                {[
                  { name: "COMPANY", logo: "/placeholder.svg?height=30&width=120" },
                  { name: "BRAND", logo: "/placeholder.svg?height=30&width=100" },
                  { name: "ENTERPRISE", logo: "/placeholder.svg?height=30&width=140" },
                ].map((brand, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <Image
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      width={index === 0 ? 120 : index === 1 ? 100 : 140}
                      height={30}
                      className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mascot/Image Content */}
          <div
            className={`w-full md:w-1/2 relative z-10 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Digital Growth Mascot Character"
                  width={600}
                  height={600}
                  className="mx-auto max-w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl"
                />

                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-5 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      <span className="text-2xl font-bold block leading-none">320%</span>
                      <span className="text-sm font-medium block text-blue-100">Avg. ROI</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#9333EA"
                          stroke="#9333EA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xl font-bold block text-gray-900 leading-none">5-Star</span>
                      <span className="text-sm font-medium block text-gray-500">Rated Agency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full filter blur-3xl"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer animate-pulse">
        <span className="text-sm mb-2 text-gray-500 hover:text-purple-600 transition-colors duration-300">
          Scroll to explore
        </span>
        <div className="w-8 h-12 border-2 border-purple-300 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


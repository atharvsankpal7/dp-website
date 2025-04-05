"use client"
import React, { useState, useEffect } from 'react';
import TestimonialCard from './testimonial-card';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechNova",
      quote: "Our organic traffic increased by 156% in just three months after implementing their SEO strategy. The team's expertise is unmatched. They are responsive and truly invested in our success.",
      result: "156% increase in organic traffic"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "Bright Solutions",
      quote: "Their content creation team revitalized our brand image completely. We've seen a 78% engagement increase on social media and higher conversion rates across all channels.",
      result: "78% increase in social engagement"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Manager",
      company: "GreenLife",
      quote: "The PPC campaign management has been outstanding. We've reduced our cost per acquisition by 42% while increasing conversions. Their data-driven approach makes all the difference.",
      result: "42% reduction in acquisition costs"
    },
    {
      name: "David Williams",
      position: "Founder",
      company: "InnovateTech",
      quote: "As a startup, their comprehensive digital marketing approach gave us the visibility we needed. Our lead generation increased by 230% in the first six months of working together.",
      result: "230% increase in lead generation"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handlePrevSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNextSlide = () => {
    setIsAutoPlaying(false);
    setActiveSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have transformed their digital presence with our solutions.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative testimonial-carousel max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="testimonial-slider flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  name={testimonial.name}
                  position={testimonial.position}
                  company={testimonial.company}
                  quote={testimonial.quote}
                  result={testimonial.result}
                  imageText={testimonial.name.charAt(0)}
                />
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={handlePrevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg -ml-4 z-10 carousel-prev focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg -mr-4 z-10 carousel-next focus:outline-none hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-10 carousel-indicators">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`h-2 w-8 mx-1 rounded-full transition-all duration-300 ${
                  index === activeSlide ? 'bg-blue-600 w-12' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveSlide(index);
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Become Our Next Success Story
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
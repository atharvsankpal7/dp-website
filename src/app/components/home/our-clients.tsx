"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ClientLogo } from "./client-logo";
import SuccessStoryCard from "./client/success-story";
import clientLogos from "@/app/constants/clients";
import InfiniteSliderHoverSpeed from "./clients-infinite-scroll";

const OurClientComponents = () => {
  const successStoriesData = [
    {
      logo: "/logos/shivjal_logo.png",
      companyName: "Shivjal",
      testimonial:
        "This platform has been instrumental in helping us scale our business. The robust features and reliable performance have exceeded our expectations.",
    },
    {
      logo: "/logos/muktai_logo.png",
      companyName: "Muktai Textile",
      testimonial:
        "Reduced customer acquisition costs by 42% while generating 3x more qualified leads through targeted SEO.",
    },
    {
      logo: "/logos/kmart_logo.png",
      companyName: "KMart",
      testimonial:
        "Achieved 230% growth in lead generation through integrated marketing campaigns and content strategy.",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
      role="region"
      aria-label="Client testimonials and logos"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
              
        {/* Clients Carousel Section */}
        <div className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <h3 className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            Our Valued Clients
          </h3>
        </div>

        {/* Logo carousel container */}
        <InfiniteSliderHoverSpeed />
      </div>
    </section>
  );
};

export default OurClientComponents;

import type React from "react";
import ServiceCard from "./services-card";
import { ArrowRight } from "lucide-react";

const servicesData = [
  {
    title: "Website Design & Development",
    image: "/services/app-dev-hero.png",
    accentColor: "primary" as const,
    linkPage: "development",
  },
  {
    title: "Graphics Design",
    image: "/services/graphic-design-hero.png",
    accentColor: "secondary" as const,
    linkPage: "graphic-design",
  },
  {
    title: "Content Creation",
    image: "/services/content-creation-hero.png",
    accentColor: "tertiary" as const,
    linkPage: "content-creation",
  },
  {
    title: "Reelography",
    image: "/services/reelography-hero.png",
    accentColor: "quaternary" as const,
    linkPage: "reelography",
  },
  {
    title: "Social Media Marketing",
    image: "/services/social-marketing-hero.png",
    accentColor: "primary" as const,
    linkPage: "social-media-marketing",
  },
  {
    title: "WhatsApp Promotion",
    image: "/services/whatsapp-hero.png",
    accentColor: "secondary" as const,
    linkPage: "whatsapp-promotion",
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section
      className="py-8 md:py-12 bg-blue-50/100 border-b-2 border-blue-200"
      id="services"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-20 opacity-0 animate-fade-in">
          <h3 className="text-blue-500 font-bold uppercase text-3xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            Services we Provide
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {/* Mobile: Single column, Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[600px]">
            {/* First column - tall card */}
            <ServiceCard
              {...servicesData[0]}
              className="h-[300px] md:h-full opacity-0 animate-fade-in"
            />

            {/* Second column - stacked cards */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 h-auto md:h-full">
              <ServiceCard
                {...servicesData[1]}
                className="h-[300px] md:h-full opacity-0 animate-fade-in"
              />
              <ServiceCard
                {...servicesData[2]}
                className="h-[300px] md:h-full opacity-0 animate-fade-in"
              />
            </div>

            {/* Third column - wide card */}
            <ServiceCard
              {...servicesData[3]}
              className="h-[300px] md:h-full opacity-0 animate-fade-in"
            />
          </div>

          {/* Bottom row - mobile: single column, desktop: two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[300px]">
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "500ms" }}
            >
              <ServiceCard 
                {...servicesData[4]} 
                className="h-[300px] md:h-full" 
              />
            </div>
            <div
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "550ms" }}
            >
              <ServiceCard 
                {...servicesData[5]} 
                className="h-[300px] md:h-full" 
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-12 md:mt-24 rounded-xl md:rounded-2xl p-6 md:p-12 shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-blue-50 text-base md:text-lg">
                Let's create a customized strategy that drives real results.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
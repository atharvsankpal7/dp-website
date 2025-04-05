import React from 'react';
import ServiceCard from './services-card';

// SVG Icons
const DigitalMarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>
);

const SEOIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const SocialMediaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
  </svg>
);

const ContentCreationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
  </svg>
);

// Services data
const servicesData = [
  {
    icon: <DigitalMarketingIcon />,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that connect with your target audience and drive measurable results.',
    services: ['PPC Advertising', 'Email Campaigns', 'Conversion Optimization'],
    accentColor: 'primary' as const
  },
  {
    icon: <SEOIcon />,
    title: 'SEO',
    description: 'Boost your search rankings and drive organic traffic with data-driven SEO strategies.',
    services: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audits'],
    accentColor: 'secondary' as const
  },
  {
    icon: <SocialMediaIcon />,
    title: 'Social Media Management',
    description: 'Engage your audience across platforms with compelling content and strategic campaigns.',
    services: ['Content Creation', 'Community Management', 'Paid Social Campaigns'],
    accentColor: 'primary' as const
  },
  {
    icon: <ContentCreationIcon />,
    title: 'Content Creation',
    description: 'Compelling content that tells your brand story and drives audience engagement.',
    services: ['Blog Writing', 'Video Production', 'Graphic Design'],
    accentColor: 'secondary' as const
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Core Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to boost your brand's visibility and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              services={service.services}
              accentColor={service.accentColor}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-10 md:p-12 shadow-soft hover-lift transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to grow your business?
              </h3>
              <p className="text-lg text-gray-600">
                Get a customized strategy tailored to your specific goals.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary group min-w-[200px] text-center"
            >
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                Get Started Today
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
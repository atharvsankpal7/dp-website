import React from 'react';
import { TrendingUp, Mail, Globe2, Palette, Film, Phone, Mic, Share2, BarChart3 } from 'lucide-react';
import ServiceCard from './services-card';
import ServicesGrid from './services-grid';


const servicesData = [

  {
    icon: <Globe2 className="h-6 w-6 text-blue-600" />,
    title: 'Website Design & Development',
    description: 'Create stunning, responsive websites and mobile applications that combine cutting-edge technology with intuitive user experience design.',
    services: ['Custom Development', 'UI/UX Design', 'Mobile-First Approach'],
    accentColor: 'primary' as const,
    linkPage:'development'
  },
  {
    icon: <Globe2 className="h-6 w-6 text-blue-600" />,
    title: 'Web App & Mobile App Development',
    description: 'Create stunning, responsive websites and mobile applications that combine cutting-edge technology with intuitive user experience design.',
    services: ['Custom Development', 'UI/UX Design', 'Mobile-First Approach'],
    accentColor: 'primary' as const,
    linkPage:'development'
  },
  {
    icon: <Palette className="h-6 w-6 text-blue-600" />,
    title: 'Content Creation',
    description: 'Transform your brand vision into compelling visual stories through professional design services, from logos to complete brand identity systems.',
    services: ['Brand Identity', 'Marketing Materials', 'Social Media Graphics'],
    accentColor: 'secondary' as const,
    linkPage:'graphic-design'
  },
  {
    icon: <Share2 className="h-6 w-6 text-blue-600" />,
    title: 'Social Media Marketing',
    description: 'Comprehensive social media strategies that build brand awareness, engage audiences, and drive meaningful connections across platforms.',
    services: ['Content Strategy', 'Community Management', 'Paid Campaigns'],
    accentColor: 'secondary' as const,
    linkPage:'social-media-marketing'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing strategies that combine SEO, PPC, and content marketing to enhance your online presence and drive measurable results.',
    services: ['SEO Optimization', 'PPC Management', 'Analytics'],
    accentColor: 'primary' as const,
    linkPage:'digital-marketing'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24  bg-blue-50/100 border-b-2 border-blue-200" id="services">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 opacity-0 animate-fade-in">
          <h3 className="text-blue-500 font-bold uppercase  text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent ">Services we Provide</h3>
          {/* <h2 className="font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            Transforming Businesses Digitally
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to boost your brand's visibility and drive sustainable growth in today's competitive landscape.
          </p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* <ServiceCard {...service} />   */}
              <ServicesGrid {...service}/>
            </div>
          ))}
        </div>

        <div className="mt-20 0 rounded-2xl p-10 md:p-12 shadow-soft opacity-0 animate-fade-in border-2 border-blue-400/100" style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-600">
                Let's create a customized strategy that drives real results.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
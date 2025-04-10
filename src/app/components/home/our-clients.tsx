"use client";

import { useEffect, useRef } from "react";
import { ClientLogo } from "./client-logo";
import SuccessStoryCard from "./client/success-story";

type Props = {};

const OurClientComponents = () => {
  const clientLogos = [
    {
      id: "el-pcfjrb5l",
      src: "/logo1.png",
      alt: "Client Company Logo 1",
    },
    {
      id: "el-chxvdpts",
      src: "/logo2.png",
      alt: "Client Company Logo 2",
    },
    {
      id: "el-gkcaw5fq",
      src: "/logo3.png",
      alt: "Client Company Logo 3",
    },
    {
      id: "el-m7nq2t1e",
      src: "/logo4.png",
      alt: "Client Company Logo 4",
    },
    {
      id: "el-y07kt2po",
      src: "/logo5.png",
      alt: "Client Company Logo 5",
    },
  ];

  // SVG Icons
  const HappyClientsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const CampaignsIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  const ROIIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-green-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const statisticsData = [
    {
      icon: <HappyClientsIcon />,
      number: 500,
      numberSuffix: "+",
      title: "Happy Clients",
      description:
        "Businesses achieving their digital marketing goals with our strategies.",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: <CampaignsIcon />,
      number: 1250,
      numberSuffix: "+",
      title: "Campaigns Delivered",
      description: "Successful campaigns driving measurable business results.",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      icon: <ROIIcon />,
      number: 320,
      numberSuffix: "%",
      title: "Average ROI",
      description: "Return on investment our clients typically experience.",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
  ];

  const successStoriesData = [
    {
      logo: "/logo2.png",
      companyName: "Shivjal",
      testimonial:
        "This platform has been instrumental in helping us scale our business. The robust features and reliable performance have exceeded our expectations.",
    },
    {
      logo: "/logo5.png",
      companyName: "Muktai Textile",
      testimonial:
        "Reduced customer acquisition costs by 42% while generating 3x more qualified leads through targeted SEO.",
    },
    {
      logo: "/logo4.png",
      companyName: "KMart",
      testimonial:
        "Achieved 230% growth in lead generation through integrated marketing campaigns and content strategy.",
    },
  ];

  // Create refs for the logo carousel
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let isHovering = false;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      if (!scrollContainer || isHovering) return;

      scrollPosition += scrollSpeed;
      scrollContainer.scrollLeft = scrollPosition;

      // Reset when reaching the end of the first set of logos
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(animateScroll);

    // Pause animation on hover
    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="container mx-auto px-4" id="el-fuy4npec">
        {/* <div className="text-center mb-16" id="el-lbaq7jft">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900" id="el-bpxkowae">
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" id="el-fa16xi3b">
            Join hundreds of businesses that have achieved remarkable growth through our digital solutions.
          </p>
        </div> */}
        {/* <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Best Service
          </span> 
          <h2 className="text-blue-500 font-bold uppercase  text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent ">
            
            Our Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people who have experienced our services firsthand.
          </p>
        </div> 
        */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} rounded-xl p-8 text-center transition-all duration-300 hover:shadow-md`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className={`rounded-full ${stat.bgColor} p-4 ${stat.textColor}`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className={`text-5xl font-bold mb-2 ${stat.textColor}`}>
                {stat.number}
                {stat.numberSuffix}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {stat.title}
              </h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div> */}

        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            id="el-ybnzq211"
          >
            <span className="text-blue-500 font-bold uppercase  text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent ">
              What Our Clients Say
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {successStoriesData.map((story, index) => (
              <SuccessStoryCard key={index} {...story} />
            ))}
          </div>
        </div>

        <div id="el-tjd3j9c2" className="mb-16">
          <div
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
            id="el-ybnzq211"
          >
            <h3 className="text-blue-500 font-bold uppercase  text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent  ">
              Satisfied Clients
            </h3>
          </div>

          {/* Logo carousel container */}
          <div className="overflow-hidden relative">
            <div
              ref={scrollRef}
              className="flex items-center space-x-12 py-6 whitespace-nowrap overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* First set of logos */}
              {clientLogos.map((logo) => (
                <div key={logo.id} className="flex-shrink-0">
                  <ClientLogo
                    id={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-32 h-32 rounded-full object-contain border-2 border-gray-100 shadow-sm transition-transform"
                  />
                </div>
              ))}
              {/* Duplicate logos for continuous scrolling */}
              {clientLogos.map((logo) => (
                <div key={`dup-${logo.id}`} className="flex-shrink-0">
                  <ClientLogo
                    id={`dup-${logo.id}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-32 h-32 rounded-full object-contain border-2 border-gray-100 shadow-sm transition-transform"
                  />
                </div>
              ))}
              {/* Duplicate logos for continuous scrolling */}
              {clientLogos.map((logo) => (
                <div key={`dup-${logo.id}`} className="flex-shrink-0">
                  <ClientLogo
                    id={`dup-${logo.id}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-32 h-32 rounded-full object-contain border-2 border-gray-100 shadow-sm transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-16 text-center" id="el-2rb2hq7b">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            id="el-msghaojl"
          >
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto" id="el-ucut4z9b">
            Let's discuss how our digital marketing solutions can help your
            business achieve remarkable growth.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300"
            id="el-z4ofixwj"
          >
            Get Started Today
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default OurClientComponents;

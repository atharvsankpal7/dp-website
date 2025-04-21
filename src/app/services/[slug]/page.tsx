import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/header";
import FooterComponent from "@/app/components/footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Service data
const services = {
  "whatsapp-promotion": {
    title: "WhatsApp Promotion",
    description:
      "Leverage the power of WhatsApp to connect with your audience directly and drive engagement through personalized messaging campaigns.",
    hero: "/services/whatsapp-hero.jpg",
    benefits: [
      "Direct customer engagement",
      "Higher open and response rates",
      "Cost-effective marketing",
      "Instant message delivery",
      "Automated campaigns",
      "Rich media sharing",
    ],
    features: [
      {
        title: "Broadcast Messaging",
        description:
          "Reach thousands of customers instantly with targeted broadcast messages.",
      },
      {
        title: "Interactive Campaigns",
        description:
          "Create engaging campaigns with rich media, buttons, and quick replies.",
      },
      {
        title: "Analytics & Tracking",
        description:
          "Monitor message delivery, open rates, and engagement metrics.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/whatsapp/gallery-1.jpg",
          alt: "WhatsApp Campaign Dashboard",
        },
        {
          src: "/services/whatsapp/gallery-2.jpg",
          alt: "Message Templates",
        },
        {
          src: "/services/whatsapp/gallery-3.jpg",
          alt: "Analytics Overview",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "WhatsApp Marketing Success Story",
        },
      ],
    },
  },
  "email-marketing": {
    title: "Email Marketing",
    description:
      "Create powerful email campaigns that engage your audience and drive conversions with our comprehensive email marketing solutions.",
    hero: "/services/email-hero.jpg",
    benefits: [
      "High ROI marketing channel",
      "Targeted audience segmentation",
      "Automated drip campaigns",
      "Detailed analytics",
      "A/B testing capabilities",
      "Personalized content delivery",
    ],
    features: [
      {
        title: "Campaign Management",
        description:
          "Design and schedule sophisticated email campaigns with ease.",
      },
      {
        title: "List Segmentation",
        description: "Target specific audience segments for better engagement.",
      },
      {
        title: "Performance Tracking",
        description: "Monitor open rates, clicks, and conversion metrics.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/email/gallery-1.jpg",
          alt: "Email Campaign Builder",
        },
        {
          src: "/services/email/gallery-2.jpg",
          alt: "Analytics Dashboard",
        },
        {
          src: "/services/email/gallery-3.jpg",
          alt: "Template Library",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Email Marketing Best Practices",
        },
      ],
    },
  },
  development: {
    title: "Web + APP Development",
    description:
      "Create stunning, responsive websites and mobile applications that combine cutting-edge technology with intuitive user experience design.",
    hero: "/services/development-hero.jpg",
    benefits: [
      "Custom-tailored solutions",
      "Responsive design",
      "Cross-platform compatibility",
      "Scalable architecture",
      "Performance optimization",
      "Secure development practices",
    ],
    features: [
      {
        title: "Web Development",
        description:
          "Create modern, responsive websites using the latest technologies and frameworks.",
      },
      {
        title: "Mobile App Development",
        description:
          "Build native and cross-platform mobile applications for iOS and Android.",
      },
      {
        title: "UI/UX Design",
        description:
          "Design intuitive user interfaces that provide exceptional user experiences.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/development/gallery-1.jpg",
          alt: "Web Development Project",
        },
        {
          src: "/services/development/gallery-2.jpg",
          alt: "Mobile App Interface",
        },
        {
          src: "/services/development/gallery-3.jpg",
          alt: "UI/UX Design Process",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Development Process Overview",
        },
      ],
    },
  },
  "graphic-design": {
    title: "Graphic Design",
    description:
      "Transform your brand vision into compelling visual stories through professional design services that capture attention and communicate your message effectively.",
    hero: "/services/design-hero.jpg",
    benefits: [
      "Professional brand identity",
      "Consistent visual language",
      "Engaging visual content",
      "Print and digital design",
      "Custom illustrations",
      "Brand guidelines",
    ],
    features: [
      {
        title: "Brand Identity Design",
        description:
          "Create comprehensive brand identities including logos, color schemes, and typography.",
      },
      {
        title: "Marketing Materials",
        description:
          "Design eye-catching marketing collateral for both print and digital platforms.",
      },
      {
        title: "Social Media Graphics",
        description:
          "Create engaging visual content optimized for social media platforms.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/design/gallery-1.jpg",
          alt: "Brand Identity Project",
        },
        {
          src: "/services/design/gallery-2.jpg",
          alt: "Marketing Materials",
        },
        {
          src: "/services/design/gallery-3.jpg",
          alt: "Social Media Graphics",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Design Process Showcase",
        },
      ],
    },
  },
  reelography: {
    title: "Reelography",
    description:
      "Create engaging short-form video content that captures attention and tells your brand story through compelling visual narratives.",
    hero: "/services/reels-hero.jpg",
    benefits: [
      "Engaging storytelling",
      "Professional production",
      "Platform optimization",
      "Trend alignment",
      "Brand consistency",
      "Increased engagement",
    ],
    features: [
      {
        title: "Content Strategy",
        description:
          "Develop effective content strategies aligned with your brand goals.",
      },
      {
        title: "Professional Production",
        description:
          "Create high-quality video content with professional equipment and editing.",
      },
      {
        title: "Platform Optimization",
        description:
          "Optimize content for different social media platforms and formats.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/reels/gallery-1.jpg",
          alt: "Reel Production",
        },
        {
          src: "/services/reels/gallery-2.jpg",
          alt: "Behind the Scenes",
        },
        {
          src: "/services/reels/gallery-3.jpg",
          alt: "Content Strategy",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Reels Showcase",
        },
      ],
    },
  },
  "bulk-call-sms": {
    title: "Bulk Call & SMS",
    description:
      "Reach your audience effectively with our comprehensive bulk messaging solutions that ensure high delivery rates and engagement.",
    hero: "/services/bulk-hero.jpg",
    benefits: [
      "Wide reach capability",
      "Cost-effective communication",
      "High delivery rates",
      "Detailed reporting",
      "Automated scheduling",
      "Customizable messages",
    ],
    features: [
      {
        title: "Campaign Planning",
        description:
          "Strategic planning and scheduling of bulk communication campaigns.",
      },
      {
        title: "Message Customization",
        description:
          "Create personalized messages for different audience segments.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Track delivery rates, engagement, and campaign performance.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/bulk/gallery-1.jpg",
          alt: "Campaign Dashboard",
        },
        {
          src: "/services/bulk/gallery-2.jpg",
          alt: "Message Templates",
        },
        {
          src: "/services/bulk/gallery-3.jpg",
          alt: "Analytics Overview",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Bulk Messaging Overview",
        },
      ],
    },
  },
  "audio-ads": {
    title: "Audio Ads",
    description:
      "Create impactful audio advertisements that reach your target audience through various audio platforms and streaming services.",
    hero: "/services/audio-hero.jpg",
    benefits: [
      "Wide audience reach",
      "Professional production",
      "Platform diversity",
      "Targeted placement",
      "Brand voice development",
      "Performance tracking",
    ],
    features: [
      {
        title: "Script Writing",
        description:
          "Create compelling audio scripts that capture attention and drive action.",
      },
      {
        title: "Professional Production",
        description:
          "High-quality audio production with professional voice talent and sound design.",
      },
      {
        title: "Distribution Strategy",
        description:
          "Strategic placement across relevant audio platforms and networks.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/audio/gallery-1.jpg",
          alt: "Recording Studio",
        },
        {
          src: "/services/audio/gallery-2.jpg",
          alt: "Script Development",
        },
        {
          src: "/services/audio/gallery-3.jpg",
          alt: "Audio Production",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Audio Production Process",
        },
      ],
    },
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    description:
      "Build and maintain a strong social media presence that engages your audience and drives meaningful business results.",
    hero: "/services/social-hero.jpg",
    benefits: [
      "Increased brand awareness",
      "Enhanced engagement",
      "Lead generation",
      "Community building",
      "Content strategy",
      "Performance analytics",
    ],
    features: [
      {
        title: "Content Strategy",
        description:
          "Develop comprehensive content strategies aligned with your business goals.",
      },
      {
        title: "Community Management",
        description:
          "Active engagement and community building across social platforms.",
      },
      {
        title: "Paid Campaigns",
        description:
          "Strategic paid social campaigns to reach targeted audiences.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/social/gallery-1.jpg",
          alt: "Social Media Strategy",
        },
        {
          src: "/services/social/gallery-2.jpg",
          alt: "Content Creation",
        },
        {
          src: "/services/social/gallery-3.jpg",
          alt: "Analytics Dashboard",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Social Media Success Story",
        },
      ],
    },
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing solutions that combine SEO, PPC, and content marketing to enhance your online presence and drive measurable results.",
    hero: "/services/digital-hero.jpg",
    benefits: [
      "Increased online visibility",
      "Higher conversion rates",
      "Data-driven strategies",
      "ROI tracking",
      "Market insights",
      "Competitive analysis",
    ],
    features: [
      {
        title: "SEO Optimization",
        description:
          "Improve search engine rankings and organic traffic through strategic optimization.",
      },
      {
        title: "PPC Management",
        description:
          "Manage and optimize paid search campaigns for maximum ROI.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Comprehensive tracking and reporting of all digital marketing efforts.",
      },
    ],
    gallery: {
      images: [
        {
          src: "/services/digital/gallery-1.jpg",
          alt: "Digital Strategy",
        },
        {
          src: "/services/digital/gallery-2.jpg",
          alt: "Campaign Management",
        },
        {
          src: "/services/digital/gallery-3.jpg",
          alt: "Performance Analytics",
        },
      ],
      videos: [
        {
          src: "https://www.youtube.com/embed/your-video-id",
          title: "Digital Marketing Overview",
        },
      ],
    },
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Blog", href: "/blog" },
    {
      label: "Get Started",
      href: "#contact",
      type: "primary" as const,
    },
  ];

  return (
    <>
      <Header navItems={navItems} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent pb-5 ">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.hero}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center pb-10 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start p-8 bg-white rounded-2xl shadow-md  shadow-blue-200  hover:shadow-blue-300  transition-all duration-300 backdrop-blur-sm bg-opacity-80 border-2 border-blue-200"
              >
                <div className="bg-blue-100 p-3 rounded-xl mr-5 flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center pb-10 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-md  shadow-blue-200  hover:shadow-blue-300  transition-all duration-300 backdrop-blur-sm bg-opacity-80 border-2 border-blue-200"
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {service.gallery.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg shadow-blue-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Videos */}
          <div className="grid grid-cols-1 gap-8">
            {service.gallery.videos.map((video, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

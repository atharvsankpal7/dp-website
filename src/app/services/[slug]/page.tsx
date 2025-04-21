import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/header";
import FooterComponent from "@/app/components/footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/app/constants/services";
// Service data


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
              <div className="aspect-video rounded-xl overflow-hidden">
                <Image
                  src={service.hero}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  priority
                  quality={90}
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

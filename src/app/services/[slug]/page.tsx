
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/components/header";
import FooterComponent from "@/app/components/footer";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { services } from "@/app/constants/services";
import ClientOnlySpline from "@/app/components/spline";

export default async function ServicePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];
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

      {/* 3D Spline Hero Section */}
      <div className="min-h-screen bg-gradient-to-t from-blue-500 via-blue-300 to-blue-500 md:block hidden relative overflow-hidden">
        {/* Dark gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

        {/* 3D Scene or Image */}
        {"scene" in service ? (
           <ClientOnlySpline scene={service.scene} className="w-full h-full" />
        ) : "image" in service ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl mx-auto">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-contain object-center"
                style={{
                  filter: "drop-shadow(0 20px 30px rgba(0, 0, 0, 0.3))",
                }}
              />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
            </div>
          </div>
        ) : null}

        {/* Floating Glass Panel */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-20 max-w-md">
          <div className="bg-blue-100/10 backdrop-blur-xl border border-blue-200/30 rounded-2xl p-8 shadow-2xl">
            <h1 className="text-4xl font-bold text-blue-50 mb-4">
              {service.title}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#content" className="flex flex-col items-center group">
            <div className="relative">
              <div className="animate-ping absolute inset-0 bg-white/30 rounded-full"></div>
              <div className="relative animate-bounce bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-white/50 rounded-full p-3 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <ChevronDown className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="mt-4 text-white font-medium text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm group-hover:bg-black/40 transition-all border border-white/20">
              Discover More
            </span>
          </a>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section
        id="content"
        className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Premium Service
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#footer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white p-4">
                  <Image
                    src={service.hero || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain hover:scale-105 transition-transform duration-500"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our service apart from the
              competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-start">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold leading-relaxed text-lg capitalize group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed, built with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 capitalize text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our work in action through these stunning visuals
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {service.gallery.images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Videos */}
          {service.gallery.videos.length > 0 && (
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Featured Videos
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.gallery.videos.map((video, index) => (
                  <div
                    key={index}
                    className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <iframe
                      src={video.src}
                      title={
                        "title" in video ? video.title : `Video ${index + 1}`
                      }
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden my-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their
            business with our service
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold text-lg"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      <FooterComponent />
    </>
  );
}

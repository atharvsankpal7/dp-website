import type React from "react"
import ServiceCard from "./services-card"

const servicesData = [
    {
        title: "Website Design & Development",
        image: "/services/app-dev-hero.png",
        accentColor: "primary" as const,
        linkPage: "development",
    },
    {
        title: "Web App & Mobile App Development",
        image: "/services/graphic-design-hero.png",
        accentColor: "secondary" as const,
        linkPage: "development",
    },
    {
        title: "Content Creation",
        image: "/services/whatsapp-hero.png",
        accentColor: "tertiary" as const,
        linkPage: "graphic-design",
    },
    {
        title: "Digital Marketing",
        image: "/services/reelography-hero.png",
        accentColor: "quaternary" as const,
        linkPage: "digital-marketing",
    },
    {
        title: "Social Media Marketing",
        image: "/services/social-marketing-hero.png",
        accentColor: "primary" as const,
        linkPage: "social-media-marketing",
    },
]

const ServicesGrid: React.FC = () => {
    return (
        <section className="py-12 bg-blue-50/100 border-b-2 border-blue-200" id="services">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 opacity-0 animate-fade-in">
                    <h3 className="text-blue-500 font-bold uppercase text-4xl md:text-5xl bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
                        Services we Provide
                    </h3>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Top grid - 4 blocks */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
                        {/* First column - tall card */}
                        <ServiceCard
                            {...servicesData[0]}
                            className="h-full opacity-0 animate-fade-in"
                        />

                        {/* Second column - stacked cards */}
                        <div className="grid grid-rows-2 gap-4 h-full">
                            <ServiceCard
                                {...servicesData[1]}
                                className="h-full opacity-0 animate-fade-in"
                            />
                            <ServiceCard
                                {...servicesData[2]}
                                className="h-full opacity-0 animate-fade-in"
                            />
                        </div>

                        {/* Third column - wide card */}
                        <ServiceCard
                            {...servicesData[3]}
                            className="h-full opacity-0 animate-fade-in"
                        />
                    </div>

                    {/* Bottom row - full width card */}
                    <div className="h-[300px] opacity-0 animate-fade-in" style={{ animationDelay: "500ms" }}>
                        <ServiceCard {...servicesData[4]} className="h-full" />
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="mt-20 rounded-2xl p-10 md:p-12 shadow-soft opacity-0 animate-fade-in border-2 border-blue-400/100"
                    style={{ animationDelay: "600ms" }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Ready to Transform Your Business?</h3>
                            <p className="text-lg text-gray-600">Let's create a customized strategy that drives real results.</p>
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
    )
}

export default ServicesGrid

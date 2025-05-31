import { InfiniteSlider } from "@/app/components/infinite-scroll";
import clientLogos from "@/app/constants/clients";
import Image from "next/image";

export default function InfiniteSliderHoverSpeed() {
  return (
    <div className="relative overflow-hidden py-12 bg-gray-50">
      <InfiniteSlider   className="py-6">
        {clientLogos.map((logo) => (
          <div 
            key={logo.id}
            className="flex items-center justify-center px-2"
          >
            <div className="relative h-28 w-60 transition-opacity hover:opacity-100 opacity-80">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 100px, 160px"
              />
            </div>
          </div>
        ))}
      </InfiniteSlider>
      
      {/* Subtle fading edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
    </div>
  );
}
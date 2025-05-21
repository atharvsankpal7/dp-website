"use client";

import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  image: string;
  linkPage: string;
  className?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  image,
  linkPage,
  className = "",
}) => {
  return (
    <div className={`group relative h-64 w-full overflow-visible ${className} `}>
      <Link href={`/services/${linkPage}`} className="block h-full w-full  ">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-blue-400/80 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
          {/* Card content container */}
          <div className="relative flex h-full w-full flex-col overflow-hidden">
            {/* Image container with gradient overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-blue-400/50 opacity-40 transition-opacity duration-300 group-hover:opacity-80 " />

            {/* Image with hover effect */}
            <div className="absolute inset-0 z-0">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className="object-contain transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 mt-auto p-5 text-blue-800 opacity-45 transition-all duration-300 group-hover:opacity-100 bg-white/50 backdrop-blur-sm">
              <div className="flex items-end justify-between">
                <h3 className="text-xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {title}
                </h3>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-blue-500 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              {/* Animated underline */}
              <div className="mt-2 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-1/2" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;

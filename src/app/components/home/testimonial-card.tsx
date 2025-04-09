"use client"

import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  position: string
  company: string
  quote: string
  result: string
  imageText: string
  className?: string
}

export default function TestimonialCard({
  name,
  position,
  company,
  quote,
  result,
  imageText,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("w-full flex-shrink-0 px-4 md:px-8", className)}>
      <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
        {/* Profile section */}
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium text-sm">
              {imageText}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
            <p className="text-gray-600">{position}</p>
            <p className="text-teal-500">{company}</p>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex mb-4 text-yellow-400">
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
          <Star className="h-5 w-5 fill-current" />
        </div>

        {/* Quote */}
        <div className="mb-6 flex-grow">
          <div className="text-gray-400 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.017 21V14.017C14.017 10.057 17.057 7.017 21.017 7.017V14.017C21.017 17.977 17.977 21.017 14.017 21.017V21ZM3 21V14.017C3 10.057 6.04 7.017 10 7.017V14.017C10 17.977 6.96 21.017 3 21.017V21Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-gray-700 italic">"{quote}"</p>
        </div>

        {/* Result highlight */}
        <div className="bg-blue-50 rounded-lg p-4 mb-2">
          <p className="font-medium text-blue-800">Result: {result}</p>
        </div>
      </div>
    </div>
  )
}


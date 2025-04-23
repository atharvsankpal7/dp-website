import type React from "react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  image: string
  accentColor: "primary" | "secondary" | "tertiary" | "quaternary"
  linkPage: string
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, accentColor, linkPage, className = "" }) => {
  // Map accent colors to their respective hover colors
  const hoverColorMap = {
    primary: "group-hover:text-blue-600",
    secondary: "group-hover:text-purple-600",
    tertiary: "group-hover:text-sky-600",
    quaternary: "group-hover:text-emerald-600",
  }

  return (
    <Link href={`/services/${linkPage}`} className={`group ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-lg transition-all duration-500">
        {/* Image with grayscale filter that removes on hover */}
        <div className="absolute inset-0 h-full w-full">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20"></div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
          <h3 className={`text-xl font-bold text-white transition-all duration-500 ${hoverColorMap[accentColor]}`}>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard

import type React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: "primary" | "secondary" | "tertiary" | "quaternary";
  services?: string[];
  linkPage: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  accentColor,
  services,
  linkPage,
}) => {
  // Map accent colors to their respective background colors
  const accentColorMap = {
    primary: "bg-blue-100 text-blue-600",
    secondary: "bg-purple-100 text-purple-600",
    tertiary: "bg-sky-100 text-sky-600",
    quaternary: "bg-purple-50 text-purple-400",
  };

  // Map accent colors to their respective text colors for the title
  const titleColorMap = {
    primary: "text-blue-900",
    secondary: "text-purple-900",
    tertiary: "text-sky-900",
    quaternary: "text-purple-800",
  };

  // Map accent colors to their respective check icon colors
  const checkColorMap = {
    primary: "text-blue-500 bg-blue-100",
    secondary: "text-purple-500 bg-purple-100",
    tertiary: "text-sky-500 bg-sky-100",
    quaternary: "text-purple-400 bg-purple-50",
  };

  return (
    <Link href={`/services/${linkPage}`}>
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-blue-200 cursor-pointer">
        <div className="mb-5">
          <div
            className={`rounded-xl p-3 inline-flex ${accentColorMap[accentColor]}`}
          >
            {icon}
          </div>
        </div>

        <h3 className={`text-xl font-bold mb-3 ${titleColorMap[accentColor]}`}>
          {title}
        </h3>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          {description}
        </p>

        {services && services.length > 0 && (
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-700"
              >
                <span
                  className={`w-5 h-5 rounded-md mr-2.5 flex items-center justify-center ${checkColorMap[accentColor]}`}
                >
                  <Check size={14} />
                </span>
                {service}
              </li>
            ))}
          </ul>
        )}

        <div className="absolute top-6 right-6 opacity-20">
          <svg
            width="24"
            height="6"
            viewBox="0 0 24 6"
            fill="currentColor"
            className="text-gray-900"
          >
            <circle cx="3" cy="3" r="3" />
            <circle cx="12" cy="3" r="3" />
            <circle cx="21" cy="3" r="3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

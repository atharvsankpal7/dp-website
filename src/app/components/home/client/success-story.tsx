import React from "react";

export interface Tag {
  label: string;
  color: string;
}

export interface SuccessStoryCardProps {
  logo?: string;
  companyName: string;
  testimonial: string;
  tags: Tag[];
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  logo,
  companyName,
  testimonial,
  tags,
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden" id="about">
      <div className="p-8">
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img
              src={logo || `https://placehold.co/80x80?text=${companyName}`}
              alt={`${companyName} Company Logo`}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-blue-100 transition-all duration-300"
              width="80"
              height="80"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {companyName}
            </h4>
          </div>
        </div>
        <div className="relative">
          <svg
            className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 group-hover:text-blue-100 transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 pl-4">
            {testimonial}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`${
                tag.color
              } text-sm font-medium px-3 py-1.5 rounded-full shadow-sm group-hover:shadow transition-all duration-300`}
            >
              {tag.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;

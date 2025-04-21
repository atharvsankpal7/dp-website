import React from "react";

export interface Tag {
  label: string;
  color: string;
}

export interface SuccessStoryCardProps {
  logo?: string;
  companyName: string;
  testimonial: string;
}

const SuccessStoryCard: React.FC<SuccessStoryCardProps> = ({
  logo,
  companyName,
  testimonial,
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-blue-50/50 to-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-blue-100/30" id="about">
      {/* Decorative elements */}
       
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20 group-hover:opacity-30 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className="flex items-center mb-8">
          <div className="relative group-hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <img
              src={logo || `https://placehold.co/80x80?text=${companyName}`}
              alt={`${companyName} Company Logo`}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-md"
              width="80"
              height="80"
            />
          </div>
          <div className="ml-6">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
              {companyName}
            </h4>
          </div>
        </div>

        <div className="relative">
          <svg
            className="absolute -top-4 -left-2 w-10 h-10 text-blue-200 transform -rotate-6 group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8 pl-8 italic">
            {testimonial}
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
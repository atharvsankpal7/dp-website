import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
  accentColor: 'primary' | 'secondary';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  services,
  accentColor
}) => {
  const accentColorClasses = {
    primary: {
      icon: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      title: 'group-hover:text-blue-600',
      check: 'text-blue-600',
      border: 'group-hover:border-blue-200',
      shadow: 'group-hover:shadow-blue-100'
    },
    secondary: {
      icon: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      title: 'group-hover:text-purple-600',
      check: 'text-purple-600',
      border: 'group-hover:border-purple-200',
      shadow: 'group-hover:shadow-purple-100'
    }
  };

  const colors = accentColorClasses[accentColor];

  return (
    <div className={`
      relative bg-white rounded-2xl p-8 
      border border-gray-100 
      transition-all duration-300 
      group hover:-translate-y-2 
      hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] 
      ${colors.border} ${colors.shadow}
      h-full flex flex-col
    `}>
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] rounded-tr-2xl -z-10 transition-colors duration-300 group-hover:bg-gray-100/50"></div>

      {/* Icon */}
      <div className="mb-8 relative">
        <div className={`
          w-16 h-16 rounded-2xl 
          flex items-center justify-center 
          transition-all duration-300 
          ${colors.icon}
        `}>
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className={`
        text-2xl font-bold mb-4 
        text-gray-900 
        transition-colors duration-300 
        ${colors.title}
      `}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Services List */}
      <ul className="space-y-4">
        {services.map((service, index) => (
          <li 
            key={index} 
            className="flex items-center text-gray-700 group/item"
          >
            <span className={`
              w-6 h-6 mr-3 
              rounded-full 
              flex items-center justify-center 
              ${colors.check} 
              bg-gray-50 
              group-hover/item:scale-110 
              transition-transform duration-300
            `}>
              <svg 
                className="w-3.5 h-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2.5" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </span>
            <span className="text-base font-medium group-hover/item:translate-x-1 transition-transform duration-300">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
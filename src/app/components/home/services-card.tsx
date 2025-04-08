import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: 'primary' | 'secondary';
  services?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  accentColor,
  services
}) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 ${
        accentColor === 'primary' ? 'border-primary' : 'border-secondary'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg ${
          accentColor === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
        }`}>
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      {services && services.length > 0 && (
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                accentColor === 'primary' ? 'bg-primary' : 'bg-secondary'
              }`} />
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
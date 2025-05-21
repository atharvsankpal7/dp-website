import React from 'react';

const StatisticCard = ({ icon, number, numberSuffix, title, description, bgColor, textColor }: {
  icon: React.ReactNode;
  number: number | string;
  numberSuffix: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-8 text-center`}>
      <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor.replace('bg-', 'bg-')}0 rounded-full mb-6`}>
        {icon}
      </div>
      <div className="counter-wrapper">
        <span className={`text-4xl md:text-5xl font-bold ${textColor} counter`}>{number}</span>
        <span className={`text-4xl md:text-5xl font-bold ${textColor}`}>{numberSuffix}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StatisticCard;
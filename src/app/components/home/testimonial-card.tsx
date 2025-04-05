import React from 'react';

const TestimonialCard = ({ name, position, company, quote, result, imageText }: {
  name: string;
  position: string;
  company: string;
  quote: string;
  result: string;
  imageText: string;
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 mb-8">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 h-full flex flex-col relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12 opacity-50"></div>
        
        <div className="flex items-center mb-6 relative z-10">
          <div className="mr-4">
            <div className="relative">
              <img 
                src={`https://placehold.co/80x80?text=${encodeURIComponent(name)}`}
                alt={`${name} - ${position}`} 
                className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100"
                width="80" 
                height="80"
              />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">{name}</h4>
            <p className="text-gray-600 text-sm">{position}</p>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>

        <div className="mb-6 flex-grow relative z-10">
          <div className="flex mb-4">
            {[...Array(5)].map((_, index) => (
              <svg 
                key={index}
                className="w-5 h-5 text-yellow-400" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="relative">
            <svg 
              className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 opacity-50" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
            </svg>
            <p className="text-gray-700 italic pl-6">
              "{quote}"
            </p>
          </div>
        </div>

        <div className="flex items-center relative z-10">
          <div className="bg-blue-50 rounded-lg px-4 py-2">
            <span className="text-blue-600 font-medium">Result:</span>
            <span className="ml-2 text-gray-700">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
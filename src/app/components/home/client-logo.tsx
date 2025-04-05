// ClientLogo.tsx
export interface ClientLogoProps {
  src: string;
  alt: string;
  id: string;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({ src, alt, id }) => (
  <div
    className="group relative flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
    id={id}
  >
    {/* Gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Border animation */}
    <div className="absolute inset-0 rounded-xl border border-gray-100 group-hover:border-blue-200 transition-colors duration-300"></div>
    
    {/* Logo image */}
    <img
      src={src}
      alt={alt}
      className="relative max-h-12 grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
      width="120"
      height="60"
    />
  </div>
);

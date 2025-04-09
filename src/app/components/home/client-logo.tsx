import type React from "react";
import Image from "next/image";

interface ClientLogoProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ClientLogo: React.FC<ClientLogoProps> = ({
  id,
  src,
  alt,
  className,
  width = 120,
  height = 120,
}) => {
  return (
    <div id={id} className="flex items-center justify-center">
      <Image
        src={src || "/placeholder.svg?height=120&width=120"}
        alt={alt}
        width={width}
        height={height}
        className={className || "w-20 h-20 object-contain"}
      />
    </div>
  );
};
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
  width = 480,
  height = 480,
}) => {
  return (
    <div id={id} className="flex items-center justify-center">
      <Image
        src={src || "/placeholder.svg?height=480&width=480"}
        alt={alt}
        width={width}
        height={height}
        className={className || "object-contain"}
        loading="lazy"
      />
    </div>
  );
};
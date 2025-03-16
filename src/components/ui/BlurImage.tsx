
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BlurImage = ({ src, alt, className, width, height }: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 shimmer" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100"
        )}
      />
    </div>
  );
};

export default BlurImage;

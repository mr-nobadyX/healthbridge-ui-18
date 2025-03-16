
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const AnimatedCard = ({ 
  children, 
  className, 
  delay = 0, 
  direction = "up",
  duration = 700
}: AnimatedCardProps) => {
  const getAnimationClass = () => {
    switch (direction) {
      case "up": return "animate-fade-in";
      case "down": return "animate-fade-in-top";
      case "left": return "animate-fade-in-right";
      case "right": return "animate-fade-in-left";
      default: return "animate-fade-in";
    }
  };

  return (
    <div
      className={cn(
        "opacity-0",
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`, 
        animationFillMode: "forwards",
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

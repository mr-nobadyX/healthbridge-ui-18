
import React from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children: React.ReactNode;
}

export const motion = {
  div: ({ 
    initial = {}, 
    animate = {}, 
    transition = {}, 
    children, 
    className,
    ...props 
  }: MotionProps) => {
    // This is a simplified mock of framer-motion
    // In a real app, you would use framer-motion
    return (
      <div
        className={cn("transition-all duration-500 ease-out", className)}
        style={{
          // Apply some basic CSS transitions based on animate values
          opacity: animate.opacity !== undefined ? animate.opacity : 1,
          transform: `translateY(${animate.y || 0}px) translateX(${animate.x || 0}px)`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
};

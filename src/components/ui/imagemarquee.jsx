import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Button } from "./button";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// GEMINI GENERATED THIS CODE SORRY :(

export default function ImageMarquee({ 
  items, 
  className, 
  speed = "40s", 
  reverse = false,
  vertical = false 
}) {
  
  const Track = () => (
    <div 
      className={cn(
        "flex flex-shrink-0 gap-2 items-center",
        vertical ? "flex-col pb-2 animate-scroll-y" : "flex-row pr-2 animate-scroll" 
      )}
      style={{ 
        animationDuration: speed,
        animationDirection: reverse ? 'reverse' : 'normal' 
      }}
    >
      {items.map((src, index) => (
        <Button 
            key={index}
            className="h-fit w-fit bg-transparent overflow-hidden p-0 m-2 whitespace-nowrap"
        >
            <div 
            className={cn(
                "relative shrink-0 overflow-hidden",
                vertical ? "w-full" : "w-auto"
            )}
            style={{ 
                height: vertical ? "auto" : "200px", 
            }}
            >
            <img 
                src={src} 
                alt={`Project ${index}`} 
                className={cn(
                "object-cover block",
                vertical ? "w-full h-auto" : "h-full w-auto"
                )}
                loading="eager" 
            />
            </div>
        </Button>
      ))}
    </div>
  );

  return (
    <div 
      className={cn(
        "flex overflow-hidden select-none",
        vertical ? "flex-col h-full w-full" : "flex-row w-full",
        className
      )}
    >
      <Track />
      <Track />
    </div>
  );
}
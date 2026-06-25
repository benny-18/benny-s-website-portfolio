import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { Button } from "./button";
import { useEffect, useRef } from "react";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// GEMINI GENERATED THIS CODE SORRY :(

export default function ImageMarquee({ 
  items, 
  className, 
  speed = "40s", 
  reverse = false,
  vertical = false,
  onImageClick
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let targetRate = 1;
    let currentRate = 1;
    let rafId;
    let timeoutId;

    const animate = () => {
      currentRate += (targetRate - currentRate) * 0.05;
      
      const anims = el.getAnimations({ subtree: true });
      anims.forEach(a => {
        a.playbackRate = currentRate;
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const onEnter = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        targetRate = 0;
      }, 1000);
    };

    const onLeave = () => {
      clearTimeout(timeoutId);
      targetRate = 1;
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  
  const renderTrack = (trackKey) => (
    <div 
      key={trackKey}
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
            variant="reverse"
            key={index}
            className="h-fit w-fit bg-transparent overflow-hidden p-0 m-2 whitespace-nowrap"
            onClick={() => onImageClick && onImageClick(src)}
        >
            <div 
            className={cn(
                "relative shrink-0 overflow-hidden",
                vertical ? "w-full" : "w-auto"
            )}
            style={{ 
                height: vertical ? "auto" : "180px", 
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
      ref={containerRef}
      className={cn(
        "flex overflow-hidden select-none group",
        vertical ? "flex-col h-full w-full" : "flex-row w-full",
        className
      )}
    >
      {renderTrack('track-1')}
      {renderTrack('track-2')}
    </div>
  );
}
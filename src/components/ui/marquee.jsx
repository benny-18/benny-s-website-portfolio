import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base

export default function Marquee({ items, className }) {
  const renderItems = () =>
    items.map((item, index) => (
      <span
        key={index}
        className="mx-4 flex items-center justify-center text-2xl"
      >
        {item}
      </span>
    ));

  return (
    <div className={cn("relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border", className)}>
      <div className="flex animate-marquee whitespace-nowrap items-center">
        {renderItems()}
      </div>

      <div className="absolute top-0 flex h-full animate-marquee2 whitespace-nowrap items-center">
        {renderItems()}
      </div>
    </div>
  );
}
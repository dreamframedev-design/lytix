import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  description: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  showIcon?: boolean;
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  description,
  className,
  aspectRatio = "video",
  showIcon = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-gradient-to-br from-lytix-ice via-lytix-light to-white border border-lytix-teal/10",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {/* Decorative molecular pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="molecular-lytix" patternUnits="userSpaceOnUse" width="60" height="60">
              {/* Main teal nodes */}
              <circle cx="30" cy="30" r="3" fill="#1FA6A3" opacity="0.4" />
              <circle cx="10" cy="10" r="2" fill="#32B498" opacity="0.3" />
              <circle cx="50" cy="50" r="2" fill="#32B498" opacity="0.3" />
              <circle cx="50" cy="10" r="1.5" fill="#60E6F3" opacity="0.3" />
              <circle cx="10" cy="50" r="1.5" fill="#60E6F3" opacity="0.3" />
              {/* Gold accent node */}
              <circle cx="30" cy="10" r="1.5" fill="#FFCF00" opacity="0.4" />
              {/* Connecting lines */}
              <path d="M30 30 L10 10 M30 30 L50 50 M30 30 L50 10 M30 30 L10 50 M30 30 L30 10" 
                    stroke="#1FA6A3" strokeWidth="0.5" opacity="0.2" />
            </pattern>
            {/* Gradient overlay */}
            <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="50%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#molecular-lytix)" />
          <rect width="100%" height="100%" fill="url(#fade-gradient)" />
        </svg>
      </div>
      
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-lytix-teal/10 to-transparent rounded-br-3xl" />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-lytix-coral/5 to-transparent rounded-tl-3xl" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {showIcon && (
          <div className="mb-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-lytix-teal/20">
            <ImageIcon className="h-8 w-8 text-lytix-teal" />
          </div>
        )}
        <p className="text-sm font-medium text-lytix-navy/70 max-w-[220px] leading-relaxed bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg">
          {description}
        </p>
      </div>
      
      {/* Bottom gradient bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lytix-teal via-lytix-cyan to-lytix-gold opacity-50" />
    </div>
  );
}

export default ImagePlaceholder;

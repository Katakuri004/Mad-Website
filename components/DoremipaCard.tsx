"use client";
import { cn } from "@/lib/utils";

interface DoremipaCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  BNonHover: string; // Background image for non-hover state
  BHover: string; // Background image for hover state
}

export default function DoremipaCard({
  title,
  subtitle,
  buttonText,
  buttonLink,
  BNonHover,
  BHover,
}: DoremipaCardProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col items-center justify-center p-4 border border-transparent dark:border-neutral-800",
          "bg-cover bg-center",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 rounded-xl"
        )}
        style={{
          backgroundImage: `url(${BNonHover})`, 
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = `url(${BHover})`; // 
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = `url(${BNonHover})`; // 
        }}
      >
        <div className="text relative z-50 text-center">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 mb-4">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 mb-6">{subtitle}</p>
          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 animate-shimmer items-center justify-center hover:bg-[linear-gradient(110deg,#ddcf4f,45%,#1e2631,55%,#ddcf4f)] border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-all duration-500 ease-in-out px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 rounded-xl"

          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}









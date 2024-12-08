"use client";
import { cn } from "@/lib/utils";

interface DoremipaCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function DoremipaCard({ title, subtitle, buttonText, buttonLink }: DoremipaCardProps) {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col items-center justify-center p-4 border border-transparent dark:border-neutral-800",
          "bg-[url(/img/parallax4.avif)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(/img/parallaxw.webp)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(/img/parallax2.webp)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500 rounded-xl"
        )}
      >
        <div className="text relative z-50 text-center">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 mb-4">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 mb-6">
            {subtitle}
          </p>
          <a 
            href={buttonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-general inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-violet-50 hover:text-black  transition-colors"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}








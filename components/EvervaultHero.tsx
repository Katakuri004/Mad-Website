import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export default function EvervaultCardHero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Icon className="absolute h-12 w-12 top-10 left-10 text-black/[0.2] dark:text-white/[0.2]" />
        <Icon className="absolute h-12 w-12 bottom-10 left-10 text-black/[0.2] dark:text-white/[0.2]" />
        <Icon className="absolute h-12 w-12 top-10 right-10 text-black/[0.2] dark:text-white/[0.2]" />
        <Icon className="absolute h-12 w-12 bottom-10 right-10 text-black/[0.2] dark:text-white/[0.2]" />
      </div>

      {/* Centered Card */}
      <div className="relative z-10 max-w-lg p-4">
        <EvervaultCard text="Hover" />
        
      </div>
    </div>
  );
}








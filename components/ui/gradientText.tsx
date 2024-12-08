import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function TextGradient() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <TextHoverEffect text="Duality" />
    </div>
  );
}

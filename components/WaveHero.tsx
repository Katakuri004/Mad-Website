"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export default function WavyBackgroundHero() {
  return (
    <WavyBackground className="max-w-full mx-auto pb-40">
      <p className="text-8xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center font-zentry">
      <b>A</b>ccolades
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Put some filler text here 
      </p>
    </WavyBackground>
  );
}

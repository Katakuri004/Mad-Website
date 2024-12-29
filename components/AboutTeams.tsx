'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Button from './ui/Button';
import { TiLocationArrow } from 'react-icons/ti';

export default function ImagesSliderDemo() {
  const images = [
    '/img/aboutcover1.png',
    '/img/aboutcover2.png',
    '/img/aboutcover3.png',
    '/img/aboutcover4.png',
    '/img/aboutcover5.png',
  ];

  const band = ['Duality', 'Dhoomketu', 'Darya', 'Acapella', 'Choir'];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleSlideSelect = (index: number) => {
    setCurrentSlide(index);
  };

  const handleLearnMoreClick = () => {

    const targetUrl = `/about/${band[currentSlide].toLowerCase()}`;
    window.open(targetUrl, '_blank');
  };
  

  return (
    <div className="h-screen w-full relative bg-black text-white overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentSlide]})`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex flex-col justify-center items-center z-50"
      >
        <motion.p
          className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 transform transition-transform duration-300 hover:scale-110"
        >
          {band[currentSlide]}
        </motion.p>
        <div className="relative mt-4">
          <Button
            id={`Learn-More-${currentSlide}`}
            title={`Learn More About ${band[currentSlide]}`}
            rightIcon={<TiLocationArrow />}
            containerClass="bg-blue-50 md:flex items-center justify-center gap-1 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-white transition duration-300"
            onClick={handleLearnMoreClick}
          />
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </div>
      </motion.div>

      <div className="absolute bottom-10 inset-x-0 flex justify-center items-center space-x-4 z-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideSelect(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-yellow-400' : 'bg-gray-500'
            } transition-all duration-300`}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-5 flex items-center z-50">
        <button
          onClick={handlePrevSlide}
          className="text-2xl px-3 py-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
        >
          ‹
        </button>
      </div>
      <div className="absolute inset-y-0 right-5 flex items-center z-50">
        <button
          onClick={handleNextSlide}
          className="text-2xl px-3 py-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80"
        >
          ›
        </button>
      </div>
    </div>
  );
}



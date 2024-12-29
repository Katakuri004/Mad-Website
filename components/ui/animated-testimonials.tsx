"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  gallery: string[]; // Array of images for the carousel
};

export const AnimatedTestimonials = ({
  testimonials,
  columns = 3,
}: {
  testimonials: Testimonial[];
  columns?: number;
}) => {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (carouselRef.current && !carouselRef.current.contains(event.target as Node)) {
      setActiveTestimonial(null);
    }
  };

  useEffect(() => {
    if (activeTestimonial) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [activeTestimonial]);

  const nextImage = () => {
    if (!activeTestimonial || !activeTestimonial.gallery?.length) return;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % activeTestimonial.gallery.length
    );
  };

  const prevImage = () => {
    if (!activeTestimonial || !activeTestimonial.gallery?.length) return;
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + activeTestimonial.gallery.length) %
        activeTestimonial.gallery.length
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return <div>No testimonials available.</div>;
  }

  const firstTestimonial = testimonials[0];
  const remainingTestimonials = testimonials.slice(1);

  return (
    <div className="max-w-7xl mx-auto antialiased font-sans px-8 py-20 space-y-12">
      <AnimatePresence>
        {activeTestimonial && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={carouselRef}
              className="relative bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Carousel */}
              <div className="relative w-full h-80 sm:h-96">
                {activeTestimonial?.gallery?.length ? (
                  <Image
                    src={activeTestimonial.gallery[currentImageIndex]}
                    alt={activeTestimonial.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex justify-center items-center w-full h-full bg-gray-200 dark:bg-neutral-700">
                    <p className="text-gray-500 dark:text-neutral-400">
                      No images available
                    </p>
                  </div>
                )}

                {/* Navigation Controls */}
                {activeTestimonial?.gallery?.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
                      onClick={prevImage}
                    >
                      ‹
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2"
                      onClick={nextImage}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Image Indicator Dots */}
              {activeTestimonial?.gallery?.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {activeTestimonial.gallery.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index === currentImageIndex
                          ? "bg-blue-500"
                          : "bg-gray-400"
                      }`}
                    ></div>
                  ))}
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {activeTestimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  {activeTestimonial.designation}
                </p>
                <p className="mt-4 text-gray-700 dark:text-neutral-300">
                  {activeTestimonial.quote}
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <a
                    href="#"
                    target="_blank"
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-[#FFC0CB] text-white hover:bg-[#FF91A4] transition"
                  >
                    <FaInstagram size={14} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaFacebook size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* First Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white dark:bg-neutral-800 shadow-lg rounded-2xl overflow-hidden mx-auto max-w-3xl cursor-pointer"
        onClick={() => setActiveTestimonial(firstTestimonial)}
      >
        <div className="relative w-full pb-[75%] h-0">
          <Image
            src={firstTestimonial.src}
            alt={firstTestimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            {firstTestimonial.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-neutral-400">
            {firstTestimonial.designation}
          </p>
          <p className="mt-4 text-gray-700 dark:text-neutral-300">
            {firstTestimonial.quote}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

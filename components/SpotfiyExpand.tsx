"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaSpotify } from "react-icons/fa";

export default function ExpandableCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setActive(null);
    }
  };

  useEffect(() => {
    if (active && typeof active === "object") {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="p-4 flex-grow pb-20">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                >
                  {active.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${active.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 mt-2"
                >
                  {active.description}
                </motion.p>

                <div className="mt-4 text-neutral-600 text-sm">
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>
              </div>

              {/* Expanded Buttons */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                <motion.a
                  layoutId={`button-${active.title}-${id}-1`}
                  href={active.ctaLink}
                  target="_blank"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-[#FFC0CB] text-white hover:bg-[#FF91A4] transition"
                >
                  <FaInstagram size={14} />
                </motion.a>

                <motion.a
                  layoutId={`button-${active.title}-${id}-2`}
                  href={active.ctaLink}
                  target="_blank"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
                >
                  <FaTwitter size={14} />
                </motion.a>

                <motion.a
                  layoutId={`button-${active.title}-${id}-3`}
                  href={active.ctaLink}
                  target="_blank"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-green-700 transition"
                >
                  <FaSpotify size={14} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Grid Layout */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 bg-white dark:bg-neutral-900 shadow-lg rounded-xl flex flex-col cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={300}
                  height={200}
                  src={card.src}
                  alt={card.title}
                  className="rounded-lg object-cover"
                />
              </motion.div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-neutral-800 dark:text-neutral-200 text-center mt-4"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-center"
              >
                {card.description}
              </motion.p>
            </div>

            {/* Grid Buttons */}
            <div className="mt-4 flex justify-end gap-2">
              <motion.a
                layoutId={`button-${card.title}-${id}-1`}
                href={card.ctaLink}
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-[#FFC0CB] text-white hover:bg-[#FF91A4] transition"
              >
                <FaInstagram size={14} />
              </motion.a>

              <motion.a
                layoutId={`button-${card.title}-${id}-2`}
                href={card.ctaLink}
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition"
              >
                <FaTwitter size={14} />
              </motion.a>

              <motion.a
                layoutId={`button-${card.title}-${id}-3`}
                href={card.ctaLink}
                target="_blank"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-700 transition"
              >
                <FaSpotify size={14} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Vice President",
    title: "Name Surname22",
    src: "/img/aboutcover6.png",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
  {
    description: "Vice President1",
    title: "Name Surname2222",
    src: "/img/aboutcover4.png",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
  {
    description: "Vice President2",
    title: "Name Surnba2me22",
    src: "/img/parallax7.jpg",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
  {
    description: "Vice President4",
    title: "Name Surnfame22",
    src: "/img/parallax15.jpg",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
  {
    description: "Vice President15",
    title: "Name Surneame2222",
    src: "/img/aboutcover4.png",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
  {
    description: "Vice President28",
    title: "Name Surna12me22",
    src: "/img/aboutcover5.png",
    ctaLink: "https://www.instagram.com/",
    content: () => (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        incidunt, ad animi voluptatum...
      </p>
    ),
  },
];






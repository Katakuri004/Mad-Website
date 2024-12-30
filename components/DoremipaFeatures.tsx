'use client';
import React, { useState, useRef } from 'react';

// BentoTilt Component
type BentoTiltProps = {
  children: React.ReactNode;
  className?: string;
};

const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState<string>(' ');
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 12; // Change this value to adjust tilt
    const tiltY = (relativeX - 0.5) * -12;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle(' ');
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

// BentoCard Component
type BentoCardProps = {
  src: string;
  title: React.ReactNode;
  description?: string;
};

const BentoCard: React.FC<BentoCardProps> = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// DoremipaFeatures Component
const DoremipaFeatures: React.FC = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py32">
          <p className="font-zentry text-3xl pt-6 text-blue-50">Immerse Yourself in Music</p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 mt-6 pt-6 pb-6">
            DoReMiPa is the official annual inter-college music competition of Delhi Technological
            University (DTU) organized by Madhurima - the music society of DTU, which is held under
            ENGIFEST- the largest cultural fest of north India. DoReMiPa includes six musical
            competitions that showcase a diverse array of musical styles, encompassing Indian,
            Western, and Instrumental genres and draws participation from all major colleges in the
            Delhi NCR as well as other parts of India.
          </p>
        </div>

        {/* BENTO GRID */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>Participating Colleges</>}
            description="100+ Colleges take part in a myriad of Events Organized"
          />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>Number of Participants</>}
              description="Over 500+ Participants take part"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>Footfall</>}
              description="Receives an average of 3000+ people"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Prize Pool</>}
              description="Prize pool of 100K+ INR"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default DoremipaFeatures;

import React from 'react';
import DoremipaCard from '@/components/DoremipaCard';
import DoremipaHero from '@/components/DoremipaHero';
import AnimatedTitle from '@/components/AnimatedTitle';
import DoremipaFeatures from '@/components/DoremipaFeatures';
const Doremipa = () => {
  return (
    <>
      <section className="w-full h-full bg-black">
        <DoremipaHero />
      </section>
      <DoremipaFeatures />
      <div className='pt-5 pb-5 mt-10 mb-10 bg-black'>
      <AnimatedTitle 
            id="eventsList"
            title="List of Events"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 !text-violet-50 !bg-black"
          />
      </div>
      <section className="pt-8 pb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-black mt-6 mb-6"
      id='eventSection'>
        <DoremipaCard 
          title="title 1" 
          subtitle="subtitle 1subtitle 1" 
          buttonLink=''
          buttonText='Register here'
          BHover='/img/aboutcover1.png'
          BNonHover='/img/aboutcover2.png'
        />
        <DoremipaCard 
          title="title 2" 
          subtitle="subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/aboutcover3.png'
          BNonHover='/img/aboutcover4.png'
        />
        <DoremipaCard 
          title="title 3" 
          subtitle="subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/card1.jpg'
          BNonHover='/img/card3.jpg'
        />
        <DoremipaCard 
          title="title 4" 
          subtitle="subtitle 1subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/parallax8.webp'
          BNonHover='/img/parallax9.webp'
        />
        <DoremipaCard 
          title="title 5" 
          subtitle="subtitle 1subtitle 1subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/parallax10.png'
          BNonHover='/img/parallax11.webp'
        />
        <DoremipaCard 
          title="title 5" 
          subtitle="subtitle 1subtitle 1subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/parallax10.png'
          BNonHover='/img/parallax11.webp'
        />
        <DoremipaCard 
          title="title 5" 
          subtitle="subtitle 1subtitle 1subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/parallax10.png'
          BNonHover='/img/parallax11.webp'
        />
        <DoremipaCard 
          title="title 5" 
          subtitle="subtitle 1subtitle 1subtitle 1subtitle 1"
          buttonLink=''
          buttonText='Register here'
          BHover='/img/parallax10.png'
          BNonHover='/img/parallax13.webp'
        />
      </section>

  
    </>)
    
}

export default Doremipa
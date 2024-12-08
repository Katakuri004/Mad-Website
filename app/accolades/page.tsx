import React from 'react'
import WavyBackgroundHero from '@/components/WaveHero';
import AnimatedTitle from '@/components/AnimatedTitle';
import { FocusCards } from "@/components/ui/focus-cards";


function FocusCardsBanner() {
  const cards = [
    {
      title: "Winner 1",
      src: "/img/aboutcover1.png",
      description:'Guitarist'
    },
    {
      title: "Winner 2",
      src: "/img/aboutcover2.png",
      description:'Guitarist'
    },
    {
      title: "Winner 3",
      src: "/img/focuscard4.webp",
      description:'Guitarist'
    },
    {
      title: "Winner 4",
      src: "/img/focuscard2.webp",
      description:'Guitarist'
    },
    {
      title: "Winner 5",
      src: "/img/focuscard3.webp",
      description:'FUCKING GOAT'
    },
    {
      title: "Winner 6",
      src: "/img/focuscard1.webp",
      description:'Guitarist'
    },
  ];

  return <FocusCards cards={cards} />;
}


const page = () => {
  return (
    <>
    <WavyBackgroundHero />
    <div className='pt-3 pb-3 mt-5 mb-5 '>
    <AnimatedTitle 
            title="Our Wins"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 hover:text-violet-600"
    />
    </div>
    
    <section className='bg-black mt-1 pt-8'>

    <FocusCardsBanner />


    </section>
    </>
  )
}

export default page;
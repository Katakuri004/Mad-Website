import React from 'react'
import HeroParallaxEvent from '@/components/HeroParallax';
import AnimatedTitle from '@/components/AnimatedTitle';
import TimelineEvent from '@/components/EventTmeline';

const Events = () => {
  return (
    <div>
      <div className=''>
        <HeroParallaxEvent />
        <div className='relative size-full '>
          <AnimatedTitle 
            title="Madhurima Events"
            
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          </div>
      </div>
      <section className=''>
        <TimelineEvent />
      </section>
    </div>
  )
}

export default Events;
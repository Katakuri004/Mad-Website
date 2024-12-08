import React from 'react';
import AboutLanding from '@/components/AboutLanding';
import AboutGradient from '@/components/AboutGradient';
import AboutTeams from '@/components/AboutTeams';
import AnimatedCards from '@/components/AnimatedCards';
import AnimatedTitle from '@/components/AnimatedTitle';



const AboutUs = () => {
  return (
    <>
    <AboutLanding />
    <AboutGradient />
    <AboutTeams />

        <h2 className='font-general text-sm uppercase md:text-[10px]'>2024-25</h2>
            <AnimatedTitle 
                title='Meet The Council'
                containerClass='mt-5 !text-black text-center'
            />
    <AnimatedCards />
    </>
  )
}

export default AboutUs
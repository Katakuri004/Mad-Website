import React from 'react';
import AboutLanding from '@/components/AboutLanding';
import AboutTeams from '@/components/AboutTeams';
import AnimatedCards from '@/components/AnimatedCards';
import AnimatedTitle from '@/components/AnimatedTitle';
import ExpandableCards from '@/components/SpotfiyExpand';



const AboutUs = () => {
  return (
    <>
    <AboutLanding />
    {/* <AboutGradient /> */}
    
    <AboutTeams />
    <div className='py-6'>
    <AnimatedTitle 
                title='Meet The Council'
                containerClass='mt-5 !text-black text-center'
            />
    </div>
            
    <AnimatedCards />
    <div className='pb-5 pt-1'>
    <ExpandableCards />
    </div>
    
    </>
  )
}

export default AboutUs
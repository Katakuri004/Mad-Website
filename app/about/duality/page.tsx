import React from 'react';
import TextGraident from '@/components/ui/gradientText';
import AnimatedTitle from '@/components/AnimatedTitle';
import LayoutGridAbout from '@/components/LayoutGrid';
import FocusCardsBanner from '@/components/Focuscard';

const page = () => {
  return (
    <>
    <div className="h-screen w-screen  flex items-center justify-center overflow-hidden">
            <TextGraident />
    </div>

        <div className='relative mb-10 mt-10 flex flex-col items-center gap-5 '>
            <h2 className='pb-2 font-general text-sm uppercase md:text-[10px] text-black'>2024-25</h2>

            <AnimatedTitle 
                title='Meet Duality'
                containerClass='mt-5  !text-black text-center'
            />
        </div>
        {/* <div className=''>
            <AnimatedTooltip/>
        </div> */}
    <section className="bg-blue-50 min-h-screen overflow-hidden pb-2">
  <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <LayoutGridAbout />
    </div>

</section>
<section className='w-full h-full'>
    <div className='relative mb-10 mt-10 flex flex-col items-center gap-5 '>
                <h2 className='pb-2 font-general text-sm uppercase md:text-[10px] text-black'>2024-25</h2>

                    <AnimatedTitle 
                        title='Meet The Members'
                        containerClass='mt-5  !text-black text-center'
                    />
             </div>
             <div className='pb-5'>
                <FocusCardsBanner />
             </div>
             
</section>
</>
  )
}

export default page;
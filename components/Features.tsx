'use client';
import React from 'react';
import { useState , useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({children , className=''})=>{
    

    const [transformStyle, setTransformStyle] = useState(' ');
    const itemRef = useRef();

    const handleMouseMove = (e)=>{

        if(!itemRef.current) return;

        const {left , top , width , height} = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left)/width;
        const relativeY = (e.clientY - top)/height;

        const tiltX = (relativeY - 0.5) * 12; //change this value to change card-tilt
        const tiltY = (relativeX - 0.5) * -12;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);

        

    };

    const handleMouseLeave=()=>{
        setTransformStyle(' ');

    };

    return(
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform:transformStyle}}>
            {children}
        </div>
    )
}


const BentoCard =({src, title , description , isComingSoon})=>{

    return(
        <div className='relative size-full'>
            <video
               src={src}
               loop
               muted
               autoPlay
               className='absolute left-0 top-0 size-full object-cover object-center' 
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )}
                </div>
            </div>
           
        </div>
    )

}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
    <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py32'>
            <p className='font-circular-web text-lg text-blue-50'>Immerse Yourself in Music</p>
        
        <p className='max-w-md font-circular-web text-lg text-blue-50'>

        DoReMiPa is the official annual inter-college music competition of Delhi Technological University(DTU) organized by Madhurima - the music society of DTU, which is held under ENGIFEST- the largest cultural fest of north India. DoReMiPa includes six musical competitions that showcase a diverse array of musical styles, encompassing Indian, Western, and Instrumental genres and draws participation from all major colleges in the Delhi NCR as well as other parts of India. 
        </p>
        </div>
    

    {/* BENTO GRID  */}

    <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>

        <BentoCard 
            src="videos/feature-1.mp4"
            title={<>Radi<b>N</b>t</>}
            description="Check out the featured Artist here"
            isComingSoon
            
        />

    </BentoTilt>

    <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>

        <BentoCard 
            src="videos/feature-2.mp4"
            title={<>Alumi<b>n</b>i</>}
            description="Check out our ol' Uncs or some shii bro ong"
        />
        </BentoTilt>
        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard 
                src="videos/feature-3.mp4"
                title={<><b>E</b>vents</>}
                description="hella lit here and there or sumn type"
            />
        </BentoTilt>


        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard 
                src="videos/feature-4.mp4"
                title={<>Our <b>B</b>igDawgs</>}
                description="hella lit here and there or sumn type"
            />
        </BentoTilt>

        <BentoTilt className='bento-tilt_2'>
            <div className='flx size-full flex-col justify-between bg-violet-300 p-5'>
                <h1 className='bento-title special-font max-w-64 text-black'>M<b>o</b>re C<b>o</b>ming Soon!</h1>

                <TiLocationArrow className='m-5 scale-[5] self-end'/>
            </div>
        </BentoTilt>

        <div className='bento-tilt_2'>
            <video 
                src='videos/feature-5.mp4'
                loop
                muted
                autoPlay
                className='size-full objct-cover object-center'
            />
        </div>
    </div>
    </div>



    </section>
  )
}

export default Features;
"use client";

import React from 'react';
// import { FaHandHoldingUsd, FaStopwatch, FaMedal } from 'react-icons/fa';
// import { RiBookReadFill } from "react-icons/ri";   bg-[#f9f9f9]
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ChooseUs = () => {

   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      if (inView) setHasAnimated(true);
    }, [inView]);

  return (
    <div className="bg-black w-full py-20 px-6 lg:px-32 text-center">
      <h2 className="text-myred text-4xl lg:text-5xl font-bold mb-16">Why You Must Read My Book</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div ref={ref} className={`bg-black hover:bg-[#3c1111] p-10 border-2 border-onhover rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px] ${
        hasAnimated ? 'animate-slideIn' : 'opacity-0'
        } `}>
          {/* <RiBookReadFill className="text-6xl mb-6 text-black" /> */}
          <p className="text-6xl mb-6">🌍</p>
          <p className="text-xl font-semibold text-white">Cultural or Soulful Depth</p>
        </div>

        {/* Card 2 */}
        <div ref={ref} className={`bg-black  hover:bg-[#3c1111] p-10 border-2 border-onhover rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px] ${
        hasAnimated ? 'animate-slideIn' : 'opacity-0'
        }  `}>
          {/* <FaHandHoldingUsd className="text-6xl mb-6 text-black" /> */}
          <p className="text-6xl mb-6">💡</p>
          <p className="text-xl font-semibold text-white">Values and Emotions</p>
        </div>

        {/* Card 3 */}
        <div ref={ref} className={`bg-black  hover:bg-[#3c1111] p-10 border-2 border-onhover rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px] ${
         hasAnimated ? 'animate-slideInRight' : 'opacity-0'
         } `}>
          {/* <FaStopwatch className="text-6xl mb-6 text-black" /> */}
          <p className="text-6xl mb-6">🔥</p>
          <p className="text-xl font-semibold text-white">Soul-Level Resonance</p>
        </div>

        {/* Card 4 */}
        <div ref={ref} className={`bg-black  hover:bg-[#3c1111] p-10 border-2 border-onhover rounded-2xl flex flex-col items-center justify-center shadow-xl min-h-[250px] ${ 
         hasAnimated ? 'animate-slideInRight' : 'opacity-0'
         } `}>
          {/* <FaMedal className="text-6xl mb-6 text-black" /> */}
          <p className="text-6xl mb-6">🌟</p>
          <p className="text-xl font-semibold text-white text-center">Inspiration</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
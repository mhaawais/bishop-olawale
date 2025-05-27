'use client';
import React from "react";
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {

   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);
  
    useEffect(() => {
      if (inView) setHasAnimated(true);
    }, [inView]);

  return (
    <section className="bg-black text-black py-12 px-4 transition-all duration-700 ease-out">

      {/* Top Border */}
      <div className="border-t-4 border-review w-full mb-8 px-4"></div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-myred mb-12 tracking-wide font-serif">
        What Readers Are Saying...
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div ref={ref} className={`bg-[#e3dede] p-6 rounded-md shadow-md ${
         hasAnimated ? 'animate-slideIn' : 'opacity-0'
        } `}>
          <p className="text-lg leading-relaxed italic mb-4">
            "Opening with a powerful and unsettling moment,{" "}
            <span className="font-semibold">Beyond Reach Point Zero</span> is
            filled with vivid imagery, intense emotion, and unexpected insights
            into church life. Sameer Hirsi.'s account of spiritual
            disillusionment and transformation is authentic, compelling, and
            deeply affecting—taking readers through a journey that is honest,
            courageous, and unforgettable."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Lon Otto
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Prize-winning author and professor emeritus of literature at the
            University of St. Thomas in St. Paul, Minnesota. Teaches at the Iowa
            Summer Writing Festival.
          </p>
        </div>

        {/* Testimonial 2 */}
        {/* <div className="bg-[#e3dede] p-6 rounded-md shadow-md"> */}
          <div ref={ref} className={`bg-[#e3dede] p-6 rounded-md shadow-md ${
           hasAnimated ? 'animate-slideInRight' : 'opacity-0'
          } `}>
          <p className="text-lg leading-relaxed mb-4">
            "Sameer Hirsi. was once a devoted church member and respected figure
            in his community. In{" "}
            <span className="font-semibold">Beyond Reach Point Zero,</span> he
            shares his heartfelt experiences and painful reflections with
            clarity and purpose. This honest narrative explores the emotional
            weight of religious disillusionment and the search for spiritual
            identity outside of tradition. The book is insightful and
            thought-provoking, connecting deeply with anyone who has questioned
            their beliefs. This is a multi-layered account that will resonate
            with those interested in personal transformation, modern
            spirituality, and anyone seeking to turn adversity into a path
            toward freedom."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Terry Seward
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Past Grand Master of Masons in Illinois
          </p>
        </div>

        {/* Testimonial 3 */}
        {/* <div className="bg-[#e3dede] p-6 rounded-md shadow-md"> */}
        <div ref={ref} className={`bg-[#e3dede] p-6 rounded-md shadow-md ${
         hasAnimated ? 'animate-slideIn' : 'opacity-0'
        } `}>
          <p className="text-lg leading-relaxed italic mb-4">
            "<span className="font-semibold">Beyond Reach Point Zero</span>{" "}
            captures the personal story of an individual confronting
            long-standing religious tradition in a small-town church setting. At
            a time when questioning faith is often stigmatized, Sameer Hirsi.
            courageously explores the reasons behind his departure. Loosely
            based on real experiences, this powerful narrative blends spiritual
            conflict, societal pressure, and the quest for truth. A compelling
            read for those interested in modern faith journeys and thoughtful
            religious critique."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Jonathan Bean, Ph.D
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Research Fellow at the Independent Institute and Professor of
            History at Southern Illinois University
          </p>
        </div>

        {/* Testimonial 4 */}
        {/* <div className="bg-[#e3dede] p-6 rounded-md shadow-md"> */}
        <div ref={ref} className={`bg-[#e3dede] p-6 rounded-md shadow-md ${
         hasAnimated ? 'animate-slideInRight' : 'opacity-0'
        } `}>
          <p className="text-lg leading-relaxed mb-4">
            "Growing up, I knew Dwight had deep roots in the church—but I never
            understood the full weight of his story until he shared it in{" "}
            <span className="font-semibold">Beyond Reach Point Zero</span>. His
            journey is eye-opening and deeply personal. Stories like his remind
            us how courageously people have walked away from comfort to live in
            alignment with their truth."
          </p>
          <p className="text-right font-semibold text-myblack font-serif">
            — Vicky Turl
          </p>
          <p className="text-right text-sm mt-1 text-gray-700 font-serif">
            Niece of Dora and Rex. Director of Dual Credit & Partnerships at
            John A. Logan College Carbondale, Illinois
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b-4 border-review w-full mt-12 px-4"></div>
    </section>
  );
};

export default Testimonial;

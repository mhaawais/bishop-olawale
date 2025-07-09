"use client";

import React from "react";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/images/library-1.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 text-center max-w-3xl px-4 sm:px-6">
        <h1 className="text-[#912629] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Discover the Voice of Purpose        
        </h1>

        <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          Explore the powerful works of Bishop Olawale Olaofe — books that restore
          faith, ignite purpose, and speak life to your spirit. From overcoming
          trials to walking in divine power, his writings are a guide for every seeker.
        </p>

        <Link href="https://www.amazon.com/s?k=bishop+Olawale+Olaofe&crid=3GRS15JEO6TUT&sprefix=bishop+olawale+olaofe+%2Caps%2C79&ref=nb_sb_noss" target="_blank">
          <button className="mt-8 inline-block bg-[#b32d37] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#721b1e] transition duration-300">
            Explore Books on Amazon
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero2;

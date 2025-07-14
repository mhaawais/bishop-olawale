"use client";

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  const cards = [
    {
      emoji: "🌍",
      title: "Cultural & Spiritual Depth",
      desc: "Grounded in Faith, guided by divine truth."
    },
    {
      emoji: "💡",
      title: "Real Values, Raw Emotion",
      desc: "Every page carries wisdom that speaks to your heart."
    },
    {
      emoji: "🔥",
      title: "Soul Awakening",
      desc: "These books ignite purpose, power, and personal revival."
    },
    {
      emoji: "🌟",
      title: "Hope & Healing",
      desc: "For seekers, believers, and leaders — this is your light."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#fff] via-[#fbecec] to-[#fdfcfc] w-full py-16 px-6 sm:px-10 lg:px-24 text-center">
      <h2 className="text-[#721b1e] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 md:mb-10 tracking-tight leading-snug">
        Why You Must Read Our Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={ref}
            className="bg-black text-white p-8 rounded-2xl shadow-2xl border border-white/10 transition-all duration-500 flex flex-col items-center justify-center min-h-[280px]
              hover:bg-gradient-to-b hover:from-[#b32d37] hover:to-black
              hover:scale-105 hover:border-[#ffffff33] hover:shadow-[0_0_30px_#b32d37aa]
              ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6"
          >
            <div className="text-6xl mb-5">{card.emoji}</div>
            <h3 className="text-xl sm:text-xl font-semibold mb-2 tracking-wide">{card.title}</h3>
            <p className="text-sm sm:text-base text-center max-w-xs text-white/80">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;

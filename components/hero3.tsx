"use client";

import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
  {
    name: "Julie Adepoju, Faith Counselor",
    review: `"I recommend '7 Things To Do When Disappointments Happen' book—it’s powerful and informative. It’s an eye-opener for anyone going through disappointment."`,
  },
  {
    name: "Ore O, Mindset Coach",
    review: `"I love how short '7 Ideas That Can Revolutionize Your World' is—but wow, these ideas are effective! Being able to meditate and act on each one daily is transformational."`,
  },
  {
    name: "Rhoda, Relationship Advocate",
    review: `"Bishop Olawale is one of the MOST inspirational speakers and life coaches, especially on marriage. Everyone needs to read '7 Ingredients of A Happy Marriage'. Thank you Bishop!"`,
  },
  {
    name: "Rev. Emmanuel B., Pastor & Mentor",
    review: `"Reading 'Living The Blessed Life' reminded me why we are called to walk in faith and power. The scriptural references were solid and the revelations timely. A must-have."`,
  },
  {
    name: "Linda M., Marriage Counselor",
    review: `"'7 Ingredients of A Happy Marriage' was a gift to my practice. I recommend it to every couple I counsel. It’s biblical, balanced, and beautifully written."`,
  },
  {
    name: "Samuel A., Entrepreneur",
    review: `"I was going through a season of confusion when I picked up 'Built To Last'. The clarity and encouragement it provided were beyond expectation."`,
  },
  {
    name: "Angela D., Educator",
    review: `"'Riches Of His Grace' helped me realign my spiritual priorities and gave me practical tools for daily living. Highly recommended for anyone seeking real growth."`,
  },
  {
    name: "Kendra S., Worship Leader",
    review: `"'Prayer That Opens Up The Mind For Creativity' is powerful. I’ve started my mornings with the declarations and have seen breakthroughs. A spiritual toolkit."`,
  },
  {
    name: "Dr. Felix O., Theologian",
    review: `"'Wisdom For Profitable Living' challenged me theologically and ministered to my heart. Bishop Olaofe has a way of making deep revelations feel personal."`,
  },
  {
    name: "Marianne J., Youth Director",
    review: `"If you’re looking for a book that will help young people grow in Christ, 'Wonders Unlimited Is Your Heritage' is it. The language is relatable, and the truth is undeniable."`,
  },
  {
    name: "Michael Johnson, Author & Coach",
    review: `"'The Power Of The Seed' shifted my mindset. Every seed now feels sacred and strategic. Powerful and practical teaching on giving and harvest."`,
  },
  {
    name: "Tasha Bright, Single Mom",
    review: `"'God Will Fix It' met me in my lowest moment. It gave me courage to pray again. God is fixing it—and I finally have peace."`,
  },
  {
    name: "Ruth Adefemi, Financial Advisor",
    review: `"'7 Ways To Make More Money' is rooted in scripture but delivers clear, actionable insights. I implemented two ideas and saw financial change fast."`,
  },
  {
    name: "Debbie Chen, Ministry Volunteer",
    review: `"'Seven Ways To Solve Problems' is such a powerful roadmap for breakthrough. I’ve been stuck for months—this gave me clarity and spiritual strategy."`,
  },
];

const getVisibleCount = (width: number) => {
  if (width >= 1024) return 4;
  if (width >= 768) return 3;
  if (width >= 640) return 2;
  return 1;
};

const Hero3 = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    getVisibleCount(typeof window !== "undefined" ? window.innerWidth : 1200)
  );

  useEffect(() => {
    const handleResize = () =>
      setVisibleCount(getVisibleCount(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);

  const totalWidth = (100 * reviews.length) / visibleCount;

  return (
    <section className="bg-gradient-to-b from-white via-[#f9f9f9] to-white py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[#721b1e] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            What Readers Are Saying
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Real voices, real impact — how Bishop Olawale Olaofe’s books are
            transforming lives.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="p-3 bg-red-900 hover:bg-gray-800 rounded-full shadow-md"
          >
            <MdNavigateBefore size={26} className="text-white" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="p-3 bg-red-900 hover:bg-gray-800 rounded-full shadow-md"
          >
            <MdNavigateNext size={26} className="text-white" />
          </button>
        </div>

        {/* Review Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${totalWidth}%`,
              transform: `translateX(-${(100 / reviews.length) * index}%)`,
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                className="p-4"
                style={{ width: `${100 / reviews.length}%`, flexShrink: 0 }}
              >
                <div className="bg-red-100 hover:bg-[#fff7f7] border border-gray-200 rounded-2xl p-6 shadow-lg h-full flex flex-col hover:shadow-red-400 hover:shadow-xl transition-shadow duration-300">
                  <FaQuoteRight className="text-4xl text-[#b32d37] mb-4 self-end" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed flex-grow mb-4">
                    {r.review}
                  </p>
                  <h3 className="font-bold text-[#7a1e21] text-sm sm:text-base">
                    {r.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3;

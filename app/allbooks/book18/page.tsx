import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Seven Ways To Solve Problems | Bishop Olawale Olaofe",
  description:
    "Discover seven powerful principles to overcome life's challenges in Seven Ways To Solve Problems by Bishop Olawale Olaofe. This inspiring book equips you with timeless, faith-based strategies to turn setbacks into breakthroughs.",
};

const Book18 = () => {
  return (
    <section>
      <Header />

      {/* Top Section - Breadcrumb */}
      <div className="relative w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="container mx-auto flex flex-col justify-center items-center px-4 text-center">
          <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-2">
            BOOKS
          </h2>
          <div className="flex items-center gap-2 text-black text-base md:text-lg font-semibold">
            <Link
              href="/"
              className="hover:text-myred underline transition duration-200"
            >
              HOME
            </Link>
            <FaChevronRight className="text-myred" />
            <span className="hover:text-myred transition duration-200">
              BOOK-XVIII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Seven Ways To Solve Problems
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07DP8MSK1"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/18.png"
                  alt="Book Cover"
                  width={300}
                  height={450}
                  className="w-full h-auto rounded-md object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Book Description */}
            <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-start">

              <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                Problems are inevitable—but they are never unbeatable.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">Seven Ways To Solve Problems</span>,
                Bishop Olawale Olaofe offers a faith-driven and practical roadmap for overcoming life's toughest challenges. Whether you're facing personal setbacks, relational struggles, financial barriers, or spiritual battles, this power-packed guide will equip you with timeless principles that lead to breakthrough and restoration.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With clarity and insight, Bishop Olaofe unveils seven profound yet simple strategies that can be applied to any situation. These are not just ideas—they are tested truths rooted in scripture and experience. Each principle is designed to help you shift your mindset, gain divine perspective, and take bold action when life throws curveballs.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                You’ll learn how to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Respond with faith instead of fear
                <br />
                <span className="text-myred font-extrabold">•</span> Activate divine wisdom for complex situations
                <br />
                <span className="text-myred font-extrabold">•</span> Persevere through adversity with clarity and courage
                <br />
                <span className="text-myred font-extrabold">•</span> Turn every setback into a setup for victory
              </p>

              <p>
                This book is more than inspiration—it’s instruction for transformation. If you’ve ever asked, “What do I do now?” this book will give you the answers that move you forward. Let these seven problem-solving keys realign your life and unlock your God-given power to overcome.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07DP8MSK1"
                  target="_blank"
                  className="inline-block bg-myred hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-400/50 text-center"
                >
                  GET THE BOOK HERE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Book18;

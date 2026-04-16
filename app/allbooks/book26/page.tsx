import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Making the Most of Life Seasons | Bishop Olawale Olaofe",
  description:
    "Discover how to understand God's timing and walk wisely through every season of life. In 'Making the Most of Life Seasons', Bishop Olawale Olaofe reveals powerful biblical insights to help you navigate seasons of testing, waiting, and breakthrough with faith and purpose.",
};

const Book26 = () => {
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
              BOOK-XXVI
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            MAKING THE MOST OF LIFE SEASONS: Understanding God's Timing and Walking Wisely Through Every Season of Life
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B0GX2W3PQQ?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&bestFormat=true"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/26.png"
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
                Life is not random. It moves in divine seasons.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Just as the earth experiences winter, spring, summer, and harvest, every believer will experience different seasons in life — times of testing, times of preparation, times of waiting, and times of breakthrough. The real challenge is not the seasons themselves, but not understanding the season you are in and how to respond to it.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">Making the Most of Life Seasons</span>, Bishop Olawale Olaofe reveals powerful biblical insights that will help you understand the purpose behind every season of your life and how God uses them to prepare you for your destiny. Drawing from Scripture and practical spiritual wisdom, this book teaches how God works through every stage of life to develop faith, character, endurance, and victory.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">In this life-changing book you will discover:</p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Why God allows different seasons in life
                <br />
                <span className="text-myred font-extrabold">✔</span> The four major seasons every person must learn to navigate
                <br />
                <span className="text-myred font-extrabold">✔</span> How to survive difficult seasons such as affliction, warfare, and waiting
                <br />
                <span className="text-myred font-extrabold">✔</span> How to recognize and take advantage of seasons of opportunity
                <br />
                <span className="text-myred font-extrabold">✔</span> How to protect the blessings God has placed in your life
                <br />
                <span className="text-myred font-extrabold">✔</span> How to move from seasons of struggle into seasons of fruitfulness
                <br />
                <span className="text-myred font-extrabold">✔</span> How faith, prayer, patience, and obedience can change unpleasant seasons
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                No matter what season you are in right now, God is working behind the scenes to bring you into a greater season of purpose, blessing, and fulfillment. The struggles you face today may be preparing you for the harvest God has planned tomorrow.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Your next season may be closer than you think.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GX2W3PQQ?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NNCAHVKQCQDS85G2XE4R&bestFormat=true"
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

export default Book26;
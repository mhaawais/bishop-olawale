import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Ideas That Can Revolutionize Your World | Bishop Olawale Olaofe",
  description:
    "In 7 Ideas That Can Revolutionize Your World, Bishop Olawale Olaofe shares powerful, timeless principles that can reorient your life, unlock your imagination, and lead to lasting transformation. A must-read guide for breakthrough and personal growth.",
};

const Book5 = () => {
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
              BOOK-V
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Ideas That Can Revolutionize Your World
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07921GW5S"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/5.png"
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

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">7 Ideas That Can Revolutionize Your World</span>,
                Bishop Olawale Olaofe distills life-changing wisdom into seven concise, practical concepts that carry the power to redirect your destiny. These are not just motivational thoughts—they are divine nuggets of truth designed to reorient your thinking, awaken your potential, and launch you into a higher level of purpose.
              </p>

               <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                Unlock a powerful shift in your mindset and life through seven timeless, transformative principles.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Whether you're seeking clarity, direction, personal growth, or spiritual alignment, this book offers a map for transformation. Each idea is a gateway to possibility—a mental and spiritual tool you can activate immediately. With reflection, faith, and imagination, these ideas will:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Challenge limiting beliefs
                <br />
                <span className="text-myred font-extrabold">•</span> Expand your vision
                <br />
                <span className="text-myred font-extrabold">•</span> Inspire purposeful action
                <br />
                <span className="text-myred font-extrabold">•</span> Lead to meaningful, lasting change
              </p>

              <p>
                These are more than principles—they are keys to a new you. When you engage them with intention, your world will begin to shift. Prepare to be revolutionized from the inside out.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07921GW5S"
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

export default Book5;

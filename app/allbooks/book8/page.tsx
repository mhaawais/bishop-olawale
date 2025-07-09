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
    "In 7 Ideas That Can Revolutionize Your World, Bishop Olawale Olaofe shares timeless, transformative principles to renew your mind, refocus your purpose, and activate change. A powerful guide to reimagining your life and stepping into divine transformation.",
};

const Book8 = () => {
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
              BOOK-VIII
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
                  src="/assets/images/8.png"
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
                If you’re seeking clarity, motivation, and a spark to shift your life in a new direction, this book is for you.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">7 Ideas That Can Revolutionize Your World</span>,
                Bishop Olawale Olaofe presents a collection of transformative truths—timeless, practical, and spiritually grounded principles that have the power to redirect your thinking and reshape your future.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                These seven ideas aren’t just motivational statements; they are potent life strategies. Each one is designed to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Reorient your perspective
                <br />
                <span className="text-myred font-extrabold">•</span> Ignite your imagination
                <br />
                <span className="text-myred font-extrabold">•</span> Refocus your energy
                <br />
                <span className="text-myred font-extrabold">•</span> Unlock your God-given potential
              </p>

               <p className="text-base md:text-lg leading-relaxed">
                Whether you're dealing with stagnation, uncertainty, or a longing for change, these nuggets of wisdom will stir something within you. You’ll be empowered to realign with purpose, embrace fresh vision, and step into your next season of growth.
              </p>

              <p>
               Let your imagination soar. Let your mindset shift. Let your life be revolutionized.
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

export default Book8;

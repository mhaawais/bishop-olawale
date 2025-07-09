import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Power Of The Seed | Bishop Olawale Olaofe",
  description:
    "In The Power of the Seed, Bishop Olawale Olaofe reveals how God’s most powerful tool for dominion and destiny is the seed. Learn how to unlock your potential, walk in authority, and transform your life through this divine principle.",
};

const Book14 = () => {
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
              BOOK-XIV
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            The Power Of The Seed
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07QMP1DZB"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/14.png"
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
                God created man for dominion—and the key to that dominion lies in the power of the seed.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">The Power Of The Seed</span>,
                Olawale Olaofe reveals the divine principle behind mankind’s empowerment and destiny fulfillment. Drawing deeply from Genesis 1, he explains how God gave humanity the seed as the most potent tool for fruitfulness, multiplication, and spiritual authority.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This transformative book teaches that every great future begins with a seed—whether it be a thought, a word, a resource, or an action. When you understand what a seed truly is and how to activate its potential, you step into a life of influence, productivity, and divine fulfillment.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                You’ll discover how to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Break free from limitation through the seed principle
                <br />
                <span className="text-myred font-extrabold">•</span> Unlock your spiritual and material potential
                <br />
                <span className="text-myred font-extrabold">•</span> Overcome ignorance with truth and insight
                <br />
                <span className="text-myred font-extrabold">•</span> Step into dominion and shape your environment by design
              </p>

              <p>
                More than a book on giving, The Power of the Seed is a revelation that connects your identity, purpose, and victory to a divine system set in motion by God Himself. This is a must-read for anyone ready to take control of their life through knowledge, faith, and action.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07QMP1DZB"
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

export default Book14;

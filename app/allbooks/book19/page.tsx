import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wisdom For Profitable Living | Bishop Olawale Olaofe",
  description:
    "Unlock timeless principles of divine wisdom with Wisdom for Profitable Living by Bishop Olawale Olaofe. Learn how biblical insight can open doors to honor, success, and legacy. Discover the path Solomon and Jesus walked—and how you can follow.",
};

const Book19 = () => {
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
              BOOK-XIX
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Wisdom For Profitable Living
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07MGJ88SM"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/19.png"
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
                Way to live happy or peaceful life.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               <span className="italic">Wisdom For Profitable Living</span>,
                by Bishop Olawale Olaofe is a transformational guide rooted in the timeless principles of the Book of Proverbs. Drawing from the life of King Solomon—one of the wisest men to ever live—the book reveals divine keys for living a life of excellence, honor, and impact. Bishop Olaofe unpacks biblical wisdom as a spiritual force that preserves, promotes, and positions individuals for supernatural breakthroughs.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                In this powerful and inspiring read, you’ll discover:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Why wisdom is called “the principal thing”—and how to pursue it with purpose
                <br />
                <span className="text-myred font-extrabold">•</span> How wisdom opens doors to favor, wealth, honor, and lasting legacy
                <br />
                <span className="text-myred font-extrabold">•</span> The connection between divine insight and earthly success
                <br />
                <span className="text-myred font-extrabold">•</span> How to make impactful decisions that elevate your life and influence others
                <br />
                <span className="text-myred font-extrabold">•</span> Practical ways to walk in the wisdom of Christ daily
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book is a clarion call to those seeking to rise above mediocrity and operate with heaven’s insight in their business, relationships, ministry, and personal destiny. If you want to leave a legacy of excellence, Wisdom for Profitable Living is your roadmap to divine impact.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07MGJ88SM"
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

export default Book19;

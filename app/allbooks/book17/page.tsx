import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Go Forward | Bishop Olawale Olaofe",
  description:
    "Discover the divine strategy to break stagnation and walk into your destiny in Go Forward by Bishop Olawale Olaofe. Learn the keys to supernatural acceleration, purpose alignment, and life transformation.",
};

const Book17 = () => {
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
              BOOK-XIIV
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Go Forward
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B08N2RK9QC"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/17.png"
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
                Go Forward is not just a book—it's a divine roadmap for unlocking the next chapter of your life.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In this powerful and prophetic guide, Bishop Olawale Olaofe delivers a compelling call to action for anyone feeling stuck, delayed, or hindered in their life’s purpose. Grounded in biblical wisdom and spiritual insight, this book outlines the key principles, mindset shifts, and faith-driven steps required to break stagnation and walk into the fullness of God's plan.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Whether you are navigating personal setbacks, spiritual warfare, or a season of waiting, Go Forward provides the clarity and courage you need to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Activate your God-given destiny with confidence
                <br />
                <span className="text-myred font-extrabold">•</span> Engage the forces of heaven through prayer and spiritual action
                <br />
                <span className="text-myred font-extrabold">•</span> Break free from limitations, fear, and doubt
                <br />
                <span className="text-myred font-extrabold">•</span> Position yourself for supernatural acceleration
                <br />
                <span className="text-myred font-extrabold">•</span> Align your decisions with divine timing and purpose
              </p>

               <p className="text-base md:text-lg leading-relaxed">
                Through prophetic insight, scriptural revelation, and practical wisdom, Bishop Olaofe challenges you to stop looking back, shake off past failures, and press forward with bold faith. This is your moment. Don’t stay stuck. Don’t settle for less.
              </p>

              <p>
                It’s time to GO FORWARD—into purpose, progress, and power.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B08N2RK9QC"
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

export default Book17;

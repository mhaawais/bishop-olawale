import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Ways To Make More Money | Bishop Olawale Olaofe",
  description:
    "In 7 Ways to Make More Money, Bishop Olawale Olaofe shares biblical wisdom and practical strategies to help you unlock abundance, generate new income, and step confidently into God’s plan for financial increase.",
};

const Book11 = () => {
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
              BOOK-XI
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Ways To Make More Money
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07B47LRWD"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/11.png"
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
                You are destined for more—more increase, more opportunities, and more financial breakthrough.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">7 Ways to Make More Money</span>,
                Bishop Olawale Olaofe reveals biblically grounded strategies that empower you to break financial limitations and step into a life of abundance. This practical and inspiring mini book delivers seven powerful principles—golden nuggets of wisdom—that will help you unlock new income streams, elevate your mindset, and partner with God’s desire to make you wealthy.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                God is not against wealth—He is the one who gives power to get it. But wealth doesn’t happen by accident; it flows through divine insight, wise decisions, and consistent action. In this book, you’ll learn how to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Align your thinking with God’s will for increase
                <br />
                <span className="text-myred font-extrabold">•</span> Apply wisdom as a tool for wealth creation
                <br />
                <span className="text-myred font-extrabold">•</span> Identify practical paths to new financial growth
                <br />
                <span className="text-myred font-extrabold">•</span> Activate the power of purpose, productivity, and persistence
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Whether you’re looking to earn more, launch something new, or maximize what you already have, this book is your pocket-sized guide to stepping into more. It’s time to move from lack to overflow—one principle at a time.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07B47LRWD"
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

export default Book11;

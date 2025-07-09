import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Success Secrets For The Believer | Bishop Olawale Olaofe",
  description:
    "Discover the biblical principles behind real success in 7 Success Secrets for the Believer by Bishop Olawale Olaofe. Learn how to align with God’s plan, take intentional action, and unlock divine breakthrough for every area of your life.",
};

const Book10 = () => {
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
              BOOK-X
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Success Secrets For The Believer
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07C135F6Z"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/10.png"
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
                Success is not an accident—it is the result of intentional alignment with God’s principles.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">7 Success Secrets for the Believer</span>,
                Bishop Olawale Olaofe reveals powerful, faith-driven strategies that position you to experience true and lasting success in every area of life. Drawing from divine wisdom and practical insight, this book outlines seven transformational principles that, when meditated on and applied, can unlock supernatural breakthroughs.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                These secrets are not mere ideas—they are spiritual keys that, once ignited in your heart and mind, will rewire your thinking and launch you into greater levels of achievement. Whether in business, ministry, relationships, or personal growth, these proven truths are designed to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Shift your mindset toward victory
                <br />
                <span className="text-myred font-extrabold">•</span> Equip you with godly strategies for increase
                <br />
                <span className="text-myred font-extrabold">•</span> Empower you to act with boldness and clarity
                <br />
                <span className="text-myred font-extrabold">•</span> Lead you into sustained success by divine design
              </p>

              <p>
                This book is more than inspiration—it’s a blueprint for manifestation. If you’re ready to become a living success story rooted in God’s plan, this is your next step.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07C135F6Z"
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

export default Book10;

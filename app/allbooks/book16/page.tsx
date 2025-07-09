import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "God Will Fix It | Bishop Olawale Olaofe",
  description:
    "Discover divine solutions in God Will Fix It by Bishop Olawale Olaofe. This powerful guide reminds you that God knows how to restore, repair, and make all things beautiful in His perfect time.",
};

const Book16 = () => {
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
              BOOK-XVI
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            God Will Fix It
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07BDR9TWL"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/16.png"
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
                No matter what’s broken, missing, delayed, or destroyed—God has the power, the wisdom, and the timing to make it right.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">God Will Fix It</span>,
                Bishop Olawale Olaofe offers a faith-lifting, Bible-centered message of restoration and hope for anyone who feels like life has gone off track. With prophetic insight and scriptural depth, this book reminds us that nothing is beyond God’s ability to restore.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Drawing from the truth of Jeremiah 33:3, Bishop Olaofe teaches how to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Trust God’s timing and wisdom in every situation
                <br />
                <span className="text-myred font-extrabold">•</span> Release your worries and invite divine intervention
                <br />
                <span className="text-myred font-extrabold">•</span> Understand that delays are not denials
                <br />
                <span className="text-myred font-extrabold">•</span> Call on God with boldness and expectation
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Whether you're facing a crisis in your health, marriage, finances, or emotions, God Will Fix It is your spiritual manual for restoration. If you’ve ever wondered whether God still steps in to repair lives—this book boldly declares: yes, He does… and He will fix it for you.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07BDR9TWL"
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

export default Book16;

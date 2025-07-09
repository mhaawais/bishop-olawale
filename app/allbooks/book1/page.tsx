import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Riches of His Grace | Bishop Olawale Olaofe",
  description:
    "Explore the depths of divine favor in 'Riches of His Grace' by Bishop Olawale Olaofe. This inspiring book reveals how God’s abundant grace transforms lives, offering spiritual clarity, empowerment, and supernatural sufficiency for everyday living.",
};

const Book1 = () => {
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
              BOOK-I
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            RICHES OF HIS GRACE:
            <br className="hidden md:block" /> A Broad Scriptural Exploration of
            the Riches of His Grace
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/Riches-His-Grace-Scriptural-Exploration-ebook/dp/B0F9XCYLDM"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/1.png"
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
                Step into a deeper realm of divine revelation through this
                extraordinary book.{" "}
                <span className="italic">Riches of His Grace</span> invites you
                to soak in the wonders of God, opening your eyes to the profound
                work He is already doing in your life—even if you haven’t yet
                recognized it.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                As you read, you'll experience a unique impartation that will
                awaken your spirit to the reality that the good work God has
                begun in you is not only continuing, but being perfected and
                elevated by the abundant grace revealed through Jesus Christ.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book is a powerful guide to understanding and walking in
                God’s grace. You'll learn how to apply it in your everyday life,
                extract its virtues, and thrive with supernatural sufficiency.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/Riches-His-Grace-Scriptural-Exploration-ebook/dp/B0F9XCYLDM"
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

export default Book1;

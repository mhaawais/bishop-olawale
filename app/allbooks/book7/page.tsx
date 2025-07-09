import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prayers That Work Wonders For Increase | Bishop Olawale Olaofe",
  description:
    "Discover powerful, Scripture-based prayers in Prayers That Work Wonders for Increase by Bishop Olawale Olaofe. Unlock divine growth and breakthrough in every area of your life by praying with bold faith and spiritual authority.",
};

const Book7 = () => {
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
              BOOK-VII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Prayers That Work Wonders For Increase
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B08L9T26P2"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/7.png"
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
                Do you desire supernatural increase in your life? Financially, spiritually, relationally, or in your purpose?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="italic">Prayers That Work Wonders for Increase</span>,
                is your spiritual companion to break limitations and unlock God’s abundance. In this powerful book, Bishop Olawale Olaofe presents targeted, Scripture-based prayers designed to activate divine increase in every area of your life.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                These aren’t ordinary prayers—they are wonder-working declarations anchored in the Word of God, prayed in the name of Jesus, and empowered by the Holy Spirit. When spoken in faith, these prayers open doors, release provision, and usher in the breakthrough you’ve been waiting for.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Whether you’re seeking:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Financial breakthrough
                <br />
                <span className="text-myred font-extrabold">•</span> Enlargement of influence or territory
                <br />
                <span className="text-myred font-extrabold">•</span> Growth in your spiritual walk
                <br />
                <span className="text-myred font-extrabold">•</span> Restoration in relationships
                <br />
                <span className="text-myred font-extrabold">•</span> Advancement in career or calling
              </p>

              <p>
                …this book provides strategic prayers to take your life to the next level. Pray boldly, believe expectantly, and prepare for the increase that follows. Your next level is just one prayer away.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B08L9T26P2"
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

export default Book7;

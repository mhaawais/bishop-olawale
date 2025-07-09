import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wonders Unlimited Is Your Heritage | Bishop Olawale Olaofe",
  description:
    "In Wonders Unlimited Is Your Heritage, Bishop Olawale Olaofe reveals that the supernatural is your birthright in Christ. Discover how to live a life marked by signs, miracles, and the wonder-working power of God.",
};

const Book13 = () => {
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
              BOOK-XIII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Wonders Unlimited Is Your Heritage
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B079P8KQT4"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/13.png"
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
                You were not created for ordinary—you were born into a heritage of the extraordinary.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">Wonders Unlimited Is Your Heritage</span>,
               Bishop Olawale Olaofe unveils a powerful truth rooted in Scripture: that the life of the believer is designed to be marked by signs, wonders, and the supernatural power of God. Throughout the Bible, God reveals Himself through undeniable acts of power, and those who witnessed His glory declared one truth—God is a God of wonders.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               This book draws you into the testimonies of those who encountered God’s miraculous hand and helps you come into conscious awareness of your divine inheritance. As a child of God, you are not called to live a mundane life—you are called to live in the miraculous.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Inside these pages, you’ll be equipped to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Recognize and expect God’s wonder-working power in your life
                <br />
                <span className="text-myred font-extrabold">•</span> Embrace the supernatural as your normal reality
                <br />
                <span className="text-myred font-extrabold">•</span> Walk boldly in your identity as a carrier of miracles
                <br />
                <span className="text-myred font-extrabold">•</span> Shift from struggle to testimonies through revelation
              </p>

              <p>
                Let your faith be stirred, your perspective lifted, and your spirit empowered to walk in the wonders God has already prepared for you.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B079P8KQT4"
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

export default Book13;

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Ingredients of A Happy Marriage | Bishop Olawale Olaofe",
  description:
    "Discover seven powerful, biblical principles to build a lasting and joy-filled relationship in 7 Ingredients of a Happy Marriage by Bishop Olawale Olaofe. A must-read guide for couples seeking love, peace, and divine partnership.",
};

const Book12 = () => {
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
              BOOK-XII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Ingredients of A Happy Marriage
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07F975TXR"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/12.png"
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
                A joyful and lasting marriage isn’t a fantasy—it’s a divine design, and it begins with the right ingredients.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">7 Ingredients of a Happy Marriage</span>,
                Bishop Olawale Olaofe draws on timeless biblical wisdom to reveal seven transformative principles that build strong, healthy, and joy-filled relationships. Rooted in Genesis 2:18—where God Himself identified man’s need for companionship—this book reminds us that marriage is God’s idea, and He has provided the blueprint for success.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Whether you're newly married, preparing for marriage, or navigating seasons of challenge, these seven ingredients will help you:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Strengthen emotional and spiritual intimacy
                <br />
                <span className="text-myred font-extrabold">•</span> Communicate with grace, purpose, and understanding
                <br />
                <span className="text-myred font-extrabold">•</span> Build trust and mutual respect
                <br />
                <span className="text-myred font-extrabold">•</span> Reignite love and commitment
                <br />
                <span className="text-myred font-extrabold">•</span> Align your relationship with God’s original intent
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Each chapter is filled with practical, Spirit-led insights that can reshape your home and bring healing, restoration, and joy to your marriage.
              </p>

              <p>
                If you want more than survival—if you want a marriage that flourishes—this book is your guide.                
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07F975TXR"
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

export default Book12;

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Faith Filled Confession That Will Move You To Higher Heights | Bishop Olawale Olaofe",
  description:
    "In Faith-Filled Confession That Will Move You To Higher Heights, Bishop Olawale Olaofe equips you with bold, Scripture-based declarations to elevate your life, activate your faith, and step into supernatural breakthrough.",
};

const Book9 = () => {
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
              BOOK-IX
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Faith Filled Confession That Will Move You To Higher Heights
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B08L9RGKSM"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/9.png"
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
                Are you ready to rise above limitations and live in the realm of the extraordinary?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">Faith-Filled Confession That Will Move You To Higher Heights</span>,
                Bishop Olawale Olaofe provides powerful, Scripture-based declarations that align your words with God’s promises. These faith confessions are not mere affirmations—they are divine utterances rooted in the living Word of God, crafted to elevate your mindset, activate your spirit, and position you for supernatural advancement.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                This book encourages believers to turn confession into profession—repeating and meditating on God’s Word until it becomes a conviction in their heart. As you boldly declare these truths over your life, you will begin to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Strengthen your faith and spiritual authority
                <br />
                <span className="text-myred font-extrabold">•</span> Experience inner transformation and divine boldness
                <br />
                <span className="text-myred font-extrabold">•</span> Break through stagnation and step into new dimensions
                <br />
                <span className="text-myred font-extrabold">•</span> See your confessions manifest into reality
              </p>

              <p>
               As Bishop Olaofe reminds us: “What you declare is what will be cleared for you.” Speak it. Believe it. Rise higher.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B08L9RGKSM"
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

export default Book9;

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Success Essentials | Bishop Olawale Olaofe",
  description:
    "In 'Success Essentials', Bishop Olawale Olaofe unveils Bible-based principles that reveal God's original blueprint for a victorious, fulfilled life. A spiritual roadmap to align your thoughts, words, and actions with God’s Word and walk in lasting success.",
};

const Book29 = () => {
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
              BOOK-XXIX
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            SUCCESS ESSENTIALS: Understanding What To Do To Succeed According to God’s Word
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GYYX4SWX?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/29.jpg"
                  alt="Success Essentials Book Cover"
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
                Success Is Not a Mystery—It Is a Divine System.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                What if success was not something you chase… but something you are designed to walk in?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">Success Essentials</span>, Bishop Olawale Olaofe unveils powerful, Bible-based principles that reveal God’s original blueprint for a victorious and fulfilled life. Rooted in Scripture and enriched with practical wisdom, this book equips you to rise above limitation and step into the fullness of your divine purpose.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Drawing from the timeless truth of Joshua 1:8, this transformational guide shows you how to align your thoughts, words, and actions with God’s Word—unlocking the pathway to lasting success in every area of your life.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Whether you are seeking direction, growth, or breakthrough, this book will empower you to:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Discover God’s success plan for your life
                <br />
                <span className="text-myred font-extrabold">✔</span> Activate the power of the Word through speaking and meditation
                <br />
                <span className="text-myred font-extrabold">✔</span> Develop a disciplined mindset for consistent victory
                <br />
                <span className="text-myred font-extrabold">✔</span> Walk in purpose, prosperity, and divine fulfillment
                <br />
                <span className="text-myred font-extrabold">✔</span> Overcome stagnation and step into supernatural progress
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This is more than a book—it is a spiritual roadmap to becoming the person God created you to be.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                If you are ready to move from potential to manifestation, from confusion to clarity, and from struggle to success—this book is your guide.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Your journey to divine success begins now.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GYYX4SWX?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_M0Z6WS6XTH2ZAH4234QX&bestFormat=true"
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

export default Book29;

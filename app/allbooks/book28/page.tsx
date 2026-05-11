import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How To Use Your Faith | Bishop Olawale Olaofe",
  description:
    "In 'How To Use Your Faith', Bishop Olawale Olaofe reveals how to activate the power backing the abundant life in Christ Jesus. A practical activation guide to move from promise to manifestation, belief to results, and potential to reality.",
};

const Book28 = () => {
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
              BOOK-XXVIII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            HOW TO USE YOUR FAITH: To Activate the Power Backing the Abundant Life in Christ Jesus
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GZ6H8ZK4?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/28.jpg"
                  alt="How To Use Your Faith Book Cover"
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
                Faith is the key that activates everything God has already made available in Christ.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">How To Use Your Faith</span>, Bishop Olawale Olaofe reveals a powerful truth that can transform your life forever. Many believers know the promises of God—but few know how to activate them for real-life results.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book is your practical, spiritual activation guide to move from:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">➜</span> Promise → Manifestation
                <br />
                <span className="text-myred font-extrabold">➜</span> Belief → Results
                <br />
                <span className="text-myred font-extrabold">➜</span> Potential → Reality
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Inside this life-changing book, you will discover:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> How to activate your faith for real-life results
                <br />
                <span className="text-myred font-extrabold">✔</span> How to access divine power and supernatural provision
                <br />
                <span className="text-myred font-extrabold">✔</span> How to overcome obstacles and walk in victory
                <br />
                <span className="text-myred font-extrabold">✔</span> How to speak and act in alignment with God’s Word
                <br />
                <span className="text-myred font-extrabold">✔</span> How to consistently live in the abundant life Christ promised
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Why This Book Is Different
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This is not just inspiration—it is activation. This book is designed to help you apply faith daily, see measurable spiritual results, walk in confidence and authority, and experience breakthroughs in every area of life.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Who This Book Is For
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> You are tired of stagnant results
                <br />
                <span className="text-myred font-extrabold">✔</span> You desire a deeper walk with God
                <br />
                <span className="text-myred font-extrabold">✔</span> You want to see your prayers produce answers
                <br />
                <span className="text-myred font-extrabold">✔</span> You are ready to live in victory, not struggle
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                The abundant life is not a mystery. It is a reality waiting for your faith to activate it.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Get your copy today and step into the life God designed for you.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GZ6H8ZK4?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_PYRK8M3M97TE18EKJ40Q&bestFormat=true"
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

export default Book28;

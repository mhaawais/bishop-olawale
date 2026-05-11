import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Unshakable: The Resilient Business Owner | Bishop Olawale Olaofe",
  description:
    "In 'Unshakable: The Resilient Business Owner', Bishop Olawale Olaofe reveals faith-driven strategies for overcoming setbacks, navigating uncertain markets, and building a business that thrives through every season.",
};

const Book32 = () => {
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
              BOOK-XXXII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            UNSHAKABLE: The Resilient Business Owner — Faith-Driven Strategies for Overcoming Setbacks, Navigating Uncertain Markets, and Building a Business That Thrives Through Every Season
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GY2MKKS6?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/32.jpg"
                  alt="Unshakable: The Resilient Business Owner Book Cover"
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
                In today’s ever-changing business landscape, challenges are inevitable.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Economic downturns. Market disruptions. Unexpected crises. Financial pressure. Leadership stress.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Every business owner will face seasons where the future seems uncertain and the path forward appears difficult. But the entrepreneurs who succeed are not the ones who avoid adversity—they are the ones who develop resilience.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">Unshakable: The Resilient Business Owner</span>, Bishop Olawale Olaofe reveals powerful biblical principles and practical strategies that empower entrepreneurs to remain strong, focused, and victorious even during the most challenging seasons of business.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Drawing from timeless biblical wisdom and leadership insight, this transformational guide will show you how to build the inner strength required to navigate uncertainty and lead your business with confidence.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                This book will help you learn how to:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Develop the mindset of resilient entrepreneurs
                <br />
                <span className="text-myred font-extrabold">✔</span> Turn business setbacks into powerful comebacks
                <br />
                <span className="text-myred font-extrabold">✔</span> Lead with wisdom during economic uncertainty
                <br />
                <span className="text-myred font-extrabold">✔</span> Strengthen your faith during challenging seasons
                <br />
                <span className="text-myred font-extrabold">✔</span> Make sound decisions under pressure
                <br />
                <span className="text-myred font-extrabold">✔</span> Build a business that survives crises and thrives beyond them
                <br />
                <span className="text-myred font-extrabold">✔</span> Create lasting success that impacts lives and glorifies God
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Throughout this book you will also discover:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">➜</span> Powerful faith declarations for business success
                <br />
                <span className="text-myred font-extrabold">➜</span> Scriptural insights for navigating adversity
                <br />
                <span className="text-myred font-extrabold">➜</span> Practical leadership principles for entrepreneurs
                <br />
                <span className="text-myred font-extrabold">➜</span> Strategic wisdom for long-term business resilience
              </p>

              <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                Proverbs 24:16 reminds us: “For though the righteous fall seven times, they rise again.”
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Your challenges are not the end of your story. They are preparation for greater strength, wisdom, and success.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                If you are a business owner, entrepreneur, leader, or professional seeking the resilience to thrive in uncertain times, this book will equip you with the faith, mindset, and strategies needed to build an unshakable business and an unstoppable future.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Your next level of strength, leadership, and success begins here.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GY2MKKS6?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NPE5RZCNMX559VSQ7CNV&bestFormat=true"
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

export default Book32;

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Secret of Living the Overcoming Life | Bishop Olawale Olaofe",
  description:
    "Victory is not meant to be occasional — it's meant to be your lifestyle. In 'The Secret of Living the Overcoming Life', Bishop Olawale Olaofe reveals the biblical secret that empowers believers to live boldly, overcome life's battles, and walk in the abundant life Jesus promised.",
};

const Book24 = () => {
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
              BOOK-XXIV
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            THE SECRET OF LIVING THE OVERCOMING LIFE: How to Stay on Fire and Become Unstoppable Through Faith
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B0GWS4CCQJ?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&bestFormat=true"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/24.png"
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
                Victory is not meant to be occasional. It is meant to be your lifestyle.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In this powerful and inspiring book, Bishop Olawale Olaofe reveals the biblical secret that empowers believers to live boldly, overcome life's battles, and walk in the abundant life Jesus promised.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Through Scripture-based teaching, powerful insights, and practical spiritual principles, this book will help you ignite the fire of God within your life and become unstoppable through faith.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                If you are ready to rise above discouragement, defeat, and spiritual stagnation, this book will guide you into the life of victory God designed for you.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GWS4CCQJ?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_NTXGKZX9M2CAK4FEFD1V&bestFormat=true"
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

export default Book24;
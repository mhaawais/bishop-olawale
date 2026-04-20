import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "God Has Something Big Coming to You | Bishop Olawale Olaofe",
  description:
    "God has something bigger ahead for you. In this powerful book, Bishop Olawale Olaofe reveals how to dream boldly, overcome fear, recognize divine opportunities, and step into God’s extraordinary plan for your life through faith, prayer, and spiritual insight.",
};

const Book27 = () => {
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
              BOOK-XXVII
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            GOD HAS SOMETHING BIG COMING TO YOU: Dreaming, Believing, and Walking Into God’s Extraordinary Plan for Your Life
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GX378ND1?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/27.jpg"
                  alt="God Has Something Big Coming to You Book Cover"
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
                Have you ever sensed that God has something more for your life?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Something bigger than your past. Something greater than your current circumstances. That feeling is not random — it is a divine signal that God is preparing you for something extraordinary.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">God Has Something Big Coming to You</span>, Bishop Olawale Olaofe reveals how God prepares His people to step into extraordinary destinies. Through biblical insight, prophetic teaching, and practical spiritual principles, this book equips you to align with God’s plan and walk boldly into your next level.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                In this powerful and faith-building book, you will learn how to:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Dream God-sized dreams
                <br />
                <span className="text-myred font-extrabold">✔</span> Overcome fear, doubt, and past limitations
                <br />
                <span className="text-myred font-extrabold">✔</span> Recognize divine opportunities
                <br />
                <span className="text-myred font-extrabold">✔</span> Activate faith for supernatural breakthroughs
                <br />
                <span className="text-myred font-extrabold">✔</span> Pray bold prayers that unlock God’s power
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                God is not calling you to live a life of survival, but a life of purpose, impact, and overflow. What lies ahead of you is greater than what is behind you.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Your turnaround season has begun.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Something BIG is coming your way.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GX378ND1?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_B6YB5RN5TJZ7N8YVAZAJ&bestFormat=true"
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

export default Book27;
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Living Stones | Bishop Olawale Olaofe",
  description:
    "In 'Living Stones', Bishop Olawale Olaofe reveals what it means to become a believer God can trust, shape, and use. A divine call to rise, stand firm, and become a vessel of purpose in God’s hands.",
};

const Book30 = () => {
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
              BOOK-XXX
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            LIVING STONES: Becoming the Kind of Believer God Can Build With
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GYZFM41L?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/30.jpg"
                  alt="Living Stones Book Cover"
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
                God is building something eternal… and you are meant to be part of it.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">Living Stones</span>, Bishop Olawale Olaofe delivers a profound and life-transforming revelation of what it truly means to become a believer God can trust, shape, and use.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Drawing from powerful biblical truths and deep spiritual insight, this book unveils the mystery behind the Scripture:
              </p>

              <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                “Ye also, as lively stones, are built up a spiritual house…” — 1 Peter 2:5
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This is more than a message—it is a divine call to rise, to be established, and to become a vessel of purpose in God’s hands.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                In this book, you will discover how to:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Stand firm in the midst of life’s challenges and pressures
                <br />
                <span className="text-myred font-extrabold">✔</span> Develop unshakable faith and spiritual stability
                <br />
                <span className="text-myred font-extrabold">✔</span> Become fruitful even in difficult seasons
                <br />
                <span className="text-myred font-extrabold">✔</span> Overcome adversity with resilience and divine strength
                <br />
                <span className="text-myred font-extrabold">✔</span> Reflect the glory of God in your daily life
                <br />
                <span className="text-myred font-extrabold">✔</span> Position yourself to be used by God for kingdom impact
                <br />
                <span className="text-myred font-extrabold">✔</span> Become a spiritual force that advances God’s purpose on earth
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                A Message for This Generation
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In a time when many believers are unstable, discouraged, or unsure of their purpose, <span className="italic">Living Stones</span> provides clarity, direction, and empowerment.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book will challenge you to move beyond passive Christianity, temporary spiritual experiences, and inconsistent faith—and step into stability, strength, spiritual authority, and kingdom impact.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Why You Need This Book
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Whether you are facing intense life challenges, seeking deeper spiritual growth, desiring clarity of purpose, or hungry to be used by God—this book will equip you to become the kind of believer God can build with, trust, and send.
              </p>

              <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                You are not ordinary. You are not insignificant. You are a Living Stone—chosen, positioned, and destined for divine purpose.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Get your copy today and begin your journey to becoming a Living Stone.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GYZFM41L?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_149FSQ7WTQ0SVAAXV26Y&bestFormat=true"
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

export default Book30;

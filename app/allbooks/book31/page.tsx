import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Power of the Holy Spirit | Bishop Olawale Olaofe",
  description:
    "In 'The Power of the Holy Spirit', Bishop Olawale Olaofe reveals how the Holy Spirit is the divine force behind supernatural living—equipping believers to overcome challenges, walk in victory, and fulfill destiny in the abundant life of Christ.",
};

const Book31 = () => {
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
              BOOK-XXXI
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            THE POWER OF THE HOLY SPIRIT: The Divine Power Backing the Abundant Life in Christ
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href="https://www.amazon.com/dp/B0GZ7QHTG9?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&bestFormat=true"
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/31.jpg"
                  alt="The Power of the Holy Spirit Book Cover"
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
                Are you tired of struggling to live the Christian life in your own strength?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Do you desire to walk in real power, victory, and the fullness of the abundant life Jesus promised?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This life is not achieved by effort—it is empowered by the Holy Spirit.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">The Power of the Holy Spirit</span>, Bishop Olawale Olaofe reveals how the Holy Spirit is the divine force behind supernatural living, equipping believers to overcome challenges, walk in victory, and fulfill destiny.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Through powerful biblical teaching, prophetic insight, and practical application, this book will help you:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Understand the role of the Holy Spirit in your daily life
                <br />
                <span className="text-myred font-extrabold">✔</span> Walk in supernatural strength and victory
                <br />
                <span className="text-myred font-extrabold">✔</span> Experience divine guidance and direction
                <br />
                <span className="text-myred font-extrabold">✔</span> Overcome sin and spiritual limitations
                <br />
                <span className="text-myred font-extrabold">✔</span> Activate the power of the Spirit for miracles and breakthroughs
                <br />
                <span className="text-myred font-extrabold">✔</span> Live fully in the abundant life of Christ
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This is not just a book—it is a spiritual activation guide that will awaken your walk with God and ignite a new dimension of power in your life.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Perfect For:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">➜</span> Personal spiritual growth
                <br />
                <span className="text-myred font-extrabold">➜</span> Prayer and devotion
                <br />
                <span className="text-myred font-extrabold">➜</span> Bible study groups
                <br />
                <span className="text-myred font-extrabold">➜</span> Church teachings and discipleship
                <br />
                <span className="text-myred font-extrabold">➜</span> Revival and conference materials
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                If you are ready to move from struggle to power, from limitation to abundance, and from ordinary living to Spirit-empowered victory, then this book is for you.
              </p>

              <p className="text-base md:text-lg leading-relaxed font-semibold">
                Step into the abundant life—through the power of the Holy Spirit.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GZ7QHTG9?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_GF920HD4YXS9YXK4F9QF&bestFormat=true"
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

export default Book31;

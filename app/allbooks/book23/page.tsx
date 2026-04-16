import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Power in the Name of Jesus | Bishop Olawale Olaofe",
  description:
    "Discover the supernatural authority available through the name of Jesus. In 'The Power in the Name of Jesus', Bishop Olawale Olaofe reveals how believers can activate divine authority for victory, miracles, healing, and the abundant life promised by Christ.",
};

const Book23 = () => {
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
              BOOK-XX111
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300 uppercase">
            THE POWER IN THE NAME OF JESUS: Activating Divine Authority for Victory, Miracles, and the Abundant Life
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B0FVFCHW71?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&bestFormat=true"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/23.png"
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
                The name of Jesus carries supernatural authority.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At the mention of His name — demons tremble, sickness bows, mountains move, miracles happen, and destinies are restored. Yet many believers live beneath the power that has already been made available to them through Christ.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">The Power in the Name of Jesus</span>, Bishop Olawale Olaofe reveals the biblical authority believers possess through the name of Jesus and how to activate that power for victory in everyday life. Through powerful scripture, prophetic declarations, and practical prayer guidance, this book will help you:
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="text-myred font-extrabold">✔</span> Activate the authority of the name of Jesus
                <br />
                <span className="text-myred font-extrabold">✔</span> Overcome life's battles through spiritual power
                <br />
                <span className="text-myred font-extrabold">✔</span> Experience healing, miracles, and divine intervention
                <br />
                <span className="text-myred font-extrabold">✔</span> Pray with confidence and receive answers from God
                <br />
                <span className="text-myred font-extrabold">✔</span> Walk boldly in the abundant life promised by Christ
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                When believers recognize and rely on the authority in the name of Jesus, impossible situations begin to change. Your faith will be strengthened. Your prayer life will grow deeper. Your victory will become visible.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Discover the supernatural authority available in the name of Jesus today.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0FVFCHW71?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_SSAPQZEYF0XV0HYRG4RS&bestFormat=true"
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

export default Book23;
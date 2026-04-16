import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Stone of Blessing | Bishop Olawale Olaofe",
  description:
    "Discover the covenant path to faithfulness, divine increase, and the blessing of Abraham. In 'The Stone of Blessing', Bishop Olawale Olaofe reveals powerful biblical truths about the covenant principles that unlock God's blessings in every area of life.",
};

const Book25 = () => {
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
              BOOK-XXV
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            THE STONE OF BLESSING: Discovering the Covenant Path to Faithfulness, Increase, and Divine Favor
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={"https://www.amazon.com/dp/B0GWVX98ZD?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&bestFormat=true"}
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/25.png"
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
                The blessing of God is not accidental. It is covenantal. And the key to that blessing is faithfulness.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">The Stone of Blessing</span>, Bishop Olawale Olaofe reveals powerful biblical truths about the covenant principles that unlock the blessings of God in every area of life. Drawing from the life of Abraham — the father of faith — this transformative book explores the spiritual foundation of covenant blessing and teaches how believers today can walk in the same grace, faithfulness, and increase that marked Abraham's life.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Through Scripture-rich teaching and practical spiritual insights, this book will help you discover how God raises ordinary believers into "lively stones" — faithful vessels through whom His blessing flows to families, communities, and generations.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">Inside this life-changing book, you will discover:</p>

              <p>
                <span className="text-myred font-extrabold">•</span> The biblical foundation of God's covenant blessings
                <br />
                <span className="text-myred font-extrabold">•</span> Why faithfulness is the gateway to divine increase
                <br />
                <span className="text-myred font-extrabold">•</span> The spiritual principles that unlock true riches and favor
                <br />
                <span className="text-myred font-extrabold">•</span> How the blessing of Abraham flows through Christ to believers today
                <br />
                <span className="text-myred font-extrabold">•</span> The power of standing alone with God when necessary
                <br />
                <span className="text-myred font-extrabold">•</span> How to become a channel of blessing to others
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                More than a theological teaching, <span className="italic">The Stone of Blessing</span> is a call to deeper commitment, unwavering faithfulness, and a life aligned with the purposes of God. If you desire to walk in God's covenant promises, experience supernatural increase, and become a blessing to your generation, this book will guide you step-by-step into the spiritual principles that make it possible.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0GWVX98ZD?ref=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&ref_=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&social_share=cm_sw_r_ffobk_cso_cp_mwn_dp_J8Q6109ZP3SE6313VGQM&bestFormat=true"
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

export default Book25;
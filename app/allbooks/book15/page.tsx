import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Healing Is The Children's Bread | Bishop Olawale Olaofe",
  description:
    "Discover divine healing through faith in Healing Is The Children's Bread by Bishop Olawale Olaofe. Learn how to overcome sickness, oppression, and life’s afflictions by activating God's healing power through the Word and the finished work of Christ.",
};

const Book15 = () => {
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
              BOOK-XV
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Healing Is The Children's Bread
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B0793L3SK3"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/15.png"
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
                Children are precious in the eyes of God, and their healing is part of His covenant promise.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
               In <span className="italic">Healing Is The Children's Bread</span>,
                Bishop Olawale Olaofe delivers a faith-filled, scripture-based guide to praying for and receiving divine healing on behalf of our children. This powerful book equips parents, guardians, and caregivers with spiritual insight and bold confessions of faith to resist sickness and claim health over young lives.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                Drawing from God’s Word, Bishop Olaofe teaches how to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Stand in faith for your child's complete healing
                <br />
                <span className="text-myred font-extrabold">•</span> Declare healing scriptures with authority and confidence
                <br />
                <span className="text-myred font-extrabold">•</span> Break generational patterns of infirmity
                <br />
                <span className="text-myred font-extrabold">•</span> Trust God for miracles, no matter the diagnosis
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Whether your child is facing physical illness, emotional pain, or spiritual attacks, this book is your toolkit for divine intervention. With practical prayers and biblical wisdom, Healing for Our Children helps you fight back with the truth that by His stripes, we are healed
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B0793L3SK3"
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

export default Book15;

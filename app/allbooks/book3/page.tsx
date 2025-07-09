import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Living the Blessed Life | Bishop Olawale Olaofe",
  description:
    "In 'Living the Blessed Life', Bishop Olawale Olaofe unveils timeless biblical truths for walking in divine favor, joy, and spiritual abundance. Learn how to align with God’s promises and unlock supernatural blessings in every area of your life.",
};

const Book3 = () => {
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
              BOOK-III
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Living The Blessed Life
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={"https://www.amazon.com/dp/1498439233"}
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/3.png"
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
                Discover the divine principles that unlock a life of spiritual
                abundance and purpose.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">Living the Blessed Life</span>,
                Bishop Olawale Olaofe shares a powerful message rooted in
                biblical wisdom, personal transformation, and Spirit-led
                insight. As a former Muslim turned passionate preacher of the
                Gospel, Bishop Olaofe writes with a voice uniquely equipped to
                teach, inspire, and challenge believers at all stages of their
                faith.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book is not just about material blessing—it is about living
                in alignment with God's will, unlocking divine favor, and
                becoming a vessel for God's glory. Through clear teaching,
                prophetic insight, and anointing birthed through personal
                encounters with God, Bishop Olaofe leads readers into a deeper
                understanding of what it truly means to live blessed.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">From navigating life’s trials to walking boldly in faith, you will learn how to:</p>

              <p>
                <span className="text-myred font-extrabold">•</span> Embrace your spiritual identity
                <br />
                <span className="text-myred font-extrabold">•</span> Access the inheritance of the believer
                <br />
                <span className="text-myred font-extrabold">•</span> Partner with God’s promises in prayer
                <br />
                <span className="text-myred font-extrabold">•</span> Overcome obstacles with kingdom authority
                future
                <br /><span className="text-myred font-extrabold">•</span> Walk in supernatural joy, peace, and provision
              </p>

              <p>
                Whether you're just starting your faith journey or seeking to go deeper, this book will stir your hunger for God and awaken a fresh desire to live a life marked by heaven’s blessing.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/1498439233"
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

export default Book3;

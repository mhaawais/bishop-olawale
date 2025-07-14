import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Goes The Sock 2? | (Mrs.)Tinuola Olaofe",
  description:
    "In this whimsical sequel, Tinuola Olaofe explores the mystery of missing socks with humor, imagination, and heart. A joyful read for all ages.",
};

const Book21 = () => {
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
              BOOK-II
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Where Goes The Sock 2 ?
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/Where-Goes-Sock-Tinuola-Olaofe/dp/B0F7LRQX29/ref=sr_1_2?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752533848&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-2"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/21.jpg"
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
                So, once again we ask: Where goes the sock? Come along and find
                out.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In the much-anticipated sequel to her charming debut, Where Goes
                the Sock?, author Tinuola Olaofe dives even deeper into one of
                life’s most puzzling questions:
                <br />
                <strong> Why do socks keep disappearing?</strong>
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                <span className="italic">Where Goes the Sock 2</span>? is a
                delightful blend of imagination, humor, and gentle mystery that
                invites readers of all ages to join the quest for answers. With
                each page, you'll explore quirky theories, meet whimsical
                characters, and uncover heartwarming lessons hidden in everyday
                moments.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book isn't just about socks—it's about curiosity, wonder,
                and the joy of shared stories. Whether you're a child full of
                questions or an adult nostalgic for childhood riddles, this
                large-print edition offers an easy and engaging read that brings
                laughter and insight.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/Where-Goes-Sock-Tinuola-Olaofe/dp/B0F7LRQX29/ref=sr_1_2?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752533848&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-2"
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

export default Book21;

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Where Goes The Sock? | (Mrs.)Tinuola Olaofe",
  description:
    "A delightful, imaginative story by Tinuola Olaofe exploring the mystery of missing socks. Perfect for curious minds, families, and lovers of whimsy.",
};

const Book20 = () => {
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
              BOOK-I
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            Where Goes The Sock ?
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/Where-Goes-Sock-Tinuola-Olaofe/dp/B0CCZSSTCL/ref=sr_1_4?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752523914&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-4"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/20.jpg"
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
                If you've ever asked, “Where goes the sock?”, this book delivers
                not just an answer—but a smile.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In this charmingly written book, Tinuola Olaofe invites readers
                into a whimsical world that combines curiosity, creativity, and
                a touch of humor to explore life’s little oddities. It’s more
                than just about laundry—it’s about the magic of wonder, the
                value of things we take for granted, and the lighthearted joy of
                not always having the answers.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Ever wondered where that missing sock goes? You're not alone.
                Where Goes the Sock? is a playful, imaginative, and heartwarming
                journey into the everyday mystery that baffles us all—how do
                socks keep disappearing?
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Perfect for readers young and old, this delightful story sparks
                imagination while offering gentle reflections on order, loss,
                and finding joy in the little things. With large print for easy
                reading, it’s an ideal gift for families, children, and anyone
                who’s ever stood by a washing machine scratching their head.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/Where-Goes-Sock-Tinuola-Olaofe/dp/B0CCZSSTCL/ref=sr_1_4?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752523914&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-4"
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

export default Book20;

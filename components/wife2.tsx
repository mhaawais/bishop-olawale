"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiBooks } from "react-icons/pi";

const Wife2 = () => {
  const books = [
    { src: "/assets/images/20.jpg", link: "/allbooks/book20" },
    { src: "/assets/images/21.jpg", link: "/allbooks/book21" },
    { src: "/assets/images/22.jpg", link: "/allbooks/book22" },
  ];

  return (
    <section className=" bg-gradient-to-b from-[#7c1c1f] via-[#943639] to-[#7c1c1f] py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 flex justify-center items-center gap-3">
          📚 A Ministry of Two: Honoring Bishop-Elect Tinuola Olaofe
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {books.map((book, index) => (
            <div
              key={index}
              className="w-[45%] sm:w-[40%] md:w-[30%] lg:w-[22%] xl:w-[18%] flex flex-col items-center"
            >
              <Link href={book.link} className="block w-full aspect-[3/4] relative group">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-white transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2">
                  <Image
                    src={book.src}
                    alt={`Book ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <Link href={book.link}>
                <button className="mt-4 bg-white text-[#7c1c1f] font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#b32d37] hover:text-white transition">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wife2;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiBooks } from "react-icons/pi";

const All = () => {
  const books = [
    { src: "/assets/images/1.png", link: "/allbooks/book1" },
    { src: "/assets/images/2.png", link: "/allbooks/book2" },
    { src: "/assets/images/3.png", link: "/allbooks/book3" },
    { src: "/assets/images/4.png", link: "/allbooks/book4" },
    { src: "/assets/images/5.png", link: "/allbooks/book5" },
    { src: "/assets/images/6.png", link: "/allbooks/book6" },
    { src: "/assets/images/7.png", link: "/allbooks/book7" },
    { src: "/assets/images/8.png", link: "/allbooks/book8" },
    { src: "/assets/images/9.png", link: "/allbooks/book9" },
    { src: "/assets/images/10.png", link: "/allbooks/book10" },
    { src: "/assets/images/11.png", link: "/allbooks/book11" },
    { src: "/assets/images/12.png", link: "/allbooks/book12" },
    { src: "/assets/images/13.png", link: "/allbooks/book13" },
    { src: "/assets/images/14.png", link: "/allbooks/book14" },
    { src: "/assets/images/15.png", link: "/allbooks/book15" },
    { src: "/assets/images/16.png", link: "/allbooks/book16" },
    { src: "/assets/images/17.png", link: "/allbooks/book17" },
    { src: "/assets/images/18.png", link: "/allbooks/book18" },
    { src: "/assets/images/19.png", link: "/allbooks/book19" },
  ];

  return (
    <section className="bg-black py-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#a82f33] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 flex justify-center items-center gap-3">
          <span className="inline-flex min-w-[1.5rem]">
            <PiBooks className="text-3xl sm:text-4xl md:text-5xl" />
          </span>
          Explore My Books
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

export default All;

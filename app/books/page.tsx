import Footer from "@/components/footer";
import Header from "@/components/header";
import All from "@/components/all";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Hero2 from "@/components/hero2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books by Bishop Olawale Olaofe",
  description:
    "Unlock timeless principles of divine wisdom with Wisdom for Profitable Living by Bishop Olawale Olaofe. Learn how biblical insight can open doors to honor, success, and legacy. Discover the path Solomon and Jesus walked—and how you can follow.",
};

const Books = () => {
  return (
    <section>
      <Header />

      <div className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-4">
            BOOKS
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-black hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-black hover:text-myred transition duration-200">
              BOOKS
            </p>
          </div>
        </div>
      </div>

      <All />
      <Hero2 />
      <Footer />
    </section>
  );
};

export default Books;

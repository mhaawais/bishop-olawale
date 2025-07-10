import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Things To Do When Disappointments Happen | Bishop Olawale Olaofe",
  description:
    "Discover seven powerful principles to recover from loss, pain, and setbacks in 7 Things To Do When Disappointments Happen by Bishop Olawale Olaofe. A quick, faith-filled guide to healing and personal restoration.",
};

const Book5 = () => {
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
              BOOK-V
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Things To Do When Disappointments Happen
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/Things-Do-When-Disappointments-Happen-ebook/dp/B07978SZG8/ref=sr_1_6?crid=3GRS15JEO6TUT&dib=eyJ2IjoiMSJ9.dm3aCkjOqSCDOKzAjO_B0P7sdQZyFUkIzyE-Pj4AwCc2tmzUzzzsrs0-90CnKXiPt7qYF2JUCGEE7fjMOibSVnHL9yyzJrHMLRJYx1Ksp5JyhVmTKwx4fT1l_BFJeYWnwgCo5oH5mtUhxenjV5-ccO7qrbm-N6pxMFXCrv0HgdRBpoZTb5ddb25dsqc6B-Dqqp93Ni6jxsM4kbuA7HX7UaW_KFzMvd6Dw-Cugcswnjo.tBlxbrNs91hoZ_gCJDVSALj8hmEvZ3MyohAc99ZlSVA&dib_tag=se&keywords=bishop+Olawale+Olaofe&qid=1752170194&sprefix=bishop+olawale+olaofe+%2Caps%2C79&sr=8-6"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/5.png"
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

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">7 Things To Do When Disappointments Happen</span>,
                Bishop Olawale Olaofe delivers a clear, compassionate guide for navigating life’s toughest moments. With spiritual depth and practical insight, he outlines seven powerful steps—nuggets of wisdom—that help you rise above pain, regain focus, and re-ignite your purpose.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This book speaks directly to the heart of loss—whether it's a broken relationship, job setback, crushed dream, or financial collapse—and offers a roadmap for healing and restoration. These seven principles are more than coping mechanisms; they’re tools for transformation, grounded in faith and designed to revive hope and momentum.
              </p>

              <p className="italic text-base md:text-lg leading-relaxed">
                If you've felt delayed, discouraged, or defeated, this quick yet profound read will equip you to:
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Process disappointment with wisdom
                <br />
                <span className="text-myred font-extrabold">•</span> Restore your faith and motivation
                <br />
                <span className="text-myred font-extrabold">•</span> Take actionable steps toward emotional and spiritual recovery
                <br />
                <span className="text-myred font-extrabold">•</span> Reclaim your dreams and move forward with clarity and strength
              </p>

              <p>
                These are your keys to a comeback. Let each chapter inspire you to stand again, dream again, and win again—regardless of what life has thrown at you.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/Things-Do-When-Disappointments-Happen-ebook/dp/B07978SZG8/ref=sr_1_6?crid=3GRS15JEO6TUT&dib=eyJ2IjoiMSJ9.dm3aCkjOqSCDOKzAjO_B0P7sdQZyFUkIzyE-Pj4AwCc2tmzUzzzsrs0-90CnKXiPt7qYF2JUCGEE7fjMOibSVnHL9yyzJrHMLRJYx1Ksp5JyhVmTKwx4fT1l_BFJeYWnwgCo5oH5mtUhxenjV5-ccO7qrbm-N6pxMFXCrv0HgdRBpoZTb5ddb25dsqc6B-Dqqp93Ni6jxsM4kbuA7HX7UaW_KFzMvd6Dw-Cugcswnjo.tBlxbrNs91hoZ_gCJDVSALj8hmEvZ3MyohAc99ZlSVA&dib_tag=se&keywords=bishop+Olawale+Olaofe&qid=1752170194&sprefix=bishop+olawale+olaofe+%2Caps%2C79&sr=8-6"
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

export default Book5;

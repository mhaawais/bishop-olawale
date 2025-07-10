import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "7 Key Areas of Conflict In Marraige | Bishop Olawale Olaofe",
  description:
    "Discover the top 7 causes of conflict in marriage and how to avoid them in this powerful guide by Bishop Olawale Olaofe. A must-read for couples seeking peace and purpose in their relationship.",
};

const Book6 = () => {
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
              BOOK-VI
            </span>
          </div>
        </div>
      </div>

      {/* Main Book Section */}
      <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="container mx-auto">
          <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
            7 Key Areas of Conflict In Marraige & How To Avoid Them:
             How To Handle Conflicts In Marriage
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/Areas-Conflict-Marraige-Avoid-Them-ebook/dp/B07HFGPSBF/ref=sr_1_9?crid=3GRS15JEO6TUT&dib=eyJ2IjoiMSJ9.dm3aCkjOqSCDOKzAjO_B0KY0zjh4_IY1dhYNFOArLULqPSRAoaeh7E7Sn1fZsMtUt7qYF2JUCGEE7fjMOibSVnHL9yyzJrHMLRJYx1Ksp5JyhVmTKwx4fT1l_BFJeYWnwgCo5oH5mtUhxenjV5-ccI7_hrmfVCvRIeR78tzZR1xHYEfTfmd8J2ZIw4K7MAx9_6YFaWqRuXkl7MLnLkOK6TkYg7CKM5FH2i4IEVVabpo.ec_oYMTq8QMAisx_ijsTSZLRAXd8a9VO66T2ZHW2KTc&dib_tag=se&keywords=bishop+Olawale+Olaofe&qid=1751910620&sprefix=bishop+olawale+olaofe+%2Caps%2C79&sr=8-9"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/6.png"
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
                In <span className="italic">7 Key Areas of Conflict In Marraige & How To Avoid Them</span>,
                Bishop Olawale Olaofe delivers a faith-centered roadmap to building a peaceful, enduring, and joyful marriage. Through seven insightful nuggets, he reveals the most common sources of conflict in relationships—and how to skillfully avoid them with love, wisdom, and intentionality.
              </p>

               {/* <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">
                Disappointments are inevitable—but how you respond can determine whether you remain stuck or rise again.
              </p> */}

              <p className="italic text-base md:text-lg leading-relaxed">
                This is not just a marriage manual; it's a spiritual guide for anyone seeking harmony in their relationship. Whether you’re newlyweds or seasoned partners, these principles will empower you to:  
              </p>

              <p>
                <span className="text-myred font-extrabold">•</span> Recognize and resolve root causes of marital tension
                <br />
                <span className="text-myred font-extrabold">•</span> Strengthen communication and emotional connection
                <br />
                <span className="text-myred font-extrabold">•</span> Build a home grounded in peace, respect, and God’s purpose
                <br />
                <span className="text-myred font-extrabold">•</span> Prevent small issues from becoming lasting damage
              </p>

              <p>
                These seven keys are designed to protect the sacred bond of marriage and help you and your spouse flourish in unity. When applied with faith and humility, they can transform your home into a haven of love.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/Areas-Conflict-Marraige-Avoid-Them-ebook/dp/B07HFGPSBF/ref=sr_1_9?crid=3GRS15JEO6TUT&dib=eyJ2IjoiMSJ9.dm3aCkjOqSCDOKzAjO_B0KY0zjh4_IY1dhYNFOArLULqPSRAoaeh7E7Sn1fZsMtUt7qYF2JUCGEE7fjMOibSVnHL9yyzJrHMLRJYx1Ksp5JyhVmTKwx4fT1l_BFJeYWnwgCo5oH5mtUhxenjV5-ccI7_hrmfVCvRIeR78tzZR1xHYEfTfmd8J2ZIw4K7MAx9_6YFaWqRuXkl7MLnLkOK6TkYg7CKM5FH2i4IEVVabpo.ec_oYMTq8QMAisx_ijsTSZLRAXd8a9VO66T2ZHW2KTc&dib_tag=se&keywords=bishop+Olawale+Olaofe&qid=1751910620&sprefix=bishop+olawale+olaofe+%2Caps%2C79&sr=8-9"
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

export default Book6;

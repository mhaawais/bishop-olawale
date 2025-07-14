import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MOE | (Mrs.)Tinuola Olaofe",
  description:
    "MOE by Tinuola Olaofe is a powerful reflection on unity, compassion, and brotherhood. A short Kindle read with a lasting impact.",
};

const Book22 = () => {
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
            MOE
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/MOE-TINUOLA-OLAOFE-ebook/dp/B09QQT77MY/ref=sr_1_3?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752533848&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-3"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/22.jpg"
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
                What makes us different should never divide us. What makes us
                alike should never be a tool for harm.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In <span className="italic">MOE</span>, Tinuola Olaofe delivers
                a short but profound message about unity, empathy, and human
                connection. This thought-provoking Kindle edition challenges
                readers to reflect on how we view each other—through our
                differences and our similarities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With powerful, reflective statements, MOE encourages a deeper
                commitment to compassion, responsibility, and respect. Whether
                in friendships, families, or communities, it calls on us all to
                rise above division, embrace one another with understanding, and
                most importantly, be our brother's keeper.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Perfect as a spiritual reminder, a conversation starter, or a
                gift of encouragement, MOE is a heart-level read that inspires
                and uplifts.
              </p>

              {/* Get Book Button */}

              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/MOE-TINUOLA-OLAOFE-ebook/dp/B09QQT77MY/ref=sr_1_3?crid=XCZEKY2DNP5C&dib=eyJ2IjoiMSJ9.iqpkKieQJ1f9SVAefVXKd3IPaAATWNzqKY_J1hzOeL21ATGwPPa4drm21Qoa5ROD.Z3ZkC8RDxmFLZx5KWl_03fs9HqXyXMhTaGnOAwBQNoU&dib_tag=se&keywords=tinuola+olaofe&qid=1752533848&sprefix=tinuola+olaofe%2Caps%2C90&sr=8-3"
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

export default Book22;





// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import Link from "next/link";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import type { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: " |  Olaofe",
//   description:
//     "",
// };

// const Book20 = () => {
//   return (
//     <section>
//       <Header />

//       {/* Top Section - Breadcrumb */}
//       <div className="relative w-full bg-white py-4 sm:py-6 md:py-8 lg:py-10">
//         <div className="container mx-auto flex flex-col justify-center items-center px-4 text-center">
//           <h2 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-2">
//             BOOKS
//           </h2>
//           <div className="flex items-center gap-2 text-black text-base md:text-lg font-semibold">
//             <Link
//               href="/"
//               className="hover:text-myred underline transition duration-200"
//             >
//               HOME
//             </Link>
//             <FaChevronRight className="text-myred" />
//             <span className="hover:text-myred transition duration-200">
//               BOOK-I
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Book Section */}
//       <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
//         <div className="container mx-auto">
//           <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">

//           </h2>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
//             {/* Book Image */}
//             <div className="w-full lg:w-1/2 flex justify-center">
//               <Link
//                 href={
//                   ""
//                 }
//                 className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <Image
//                   src="/assets/images/20.jpg"
//                   alt="Book Cover"
//                   width={300}
//                   height={450}
//                   className="w-full h-auto rounded-md object-contain"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Book Description */}
//             <div className="w-full lg:w-1/2 text-white space-y-6 flex flex-col items-start">

//               <p className="text-base md:text-lg leading-relaxed italic pl-3 border-l-4 border-myred">

//               </p>

//               <p className="text-base md:text-lg leading-relaxed">
//                In <span className="italic"></span>,

//               </p>

//               <p className="text-base md:text-lg leading-relaxed">

//               </p>

//               <p className="italic text-base md:text-lg leading-relaxed">

//               </p>

//               <p>
//                 <span className="text-myred font-extrabold">•</span>
//                 <br />
//                 <span className="text-myred font-extrabold">•</span>
//                 <br />
//                 <span className="text-myred font-extrabold">•</span>
//                 <br />
//                 <span className="text-myred font-extrabold">•</span>
//               </p>

//               <p>

//               </p>

//               {/* Get Book Button */}

//               <div className="w-full flex justify-center items-center pt-6">
//                 <Link
//                   href=""
//                   target="_blank"
//                   className="inline-block bg-myred hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-red-400/50 text-center"
//                 >
//                   GET THE BOOK HERE
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </section>
//   );
// };

// export default Book20;

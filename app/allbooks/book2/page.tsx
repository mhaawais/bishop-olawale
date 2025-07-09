import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prayer That Opens the Mind to Creativity | Bishop Olawale Olaofe",
  description:
    "Unlock your creative potential through powerful Spirit-led prayers. In 'Prayer That Opens the Mind for Creativity', Bishop Olawale Olaofe shows you how prayer awakens innovation, stimulates the mind, and leads to unstoppable success through divine inspiration.",
};

const Book2 = () => { 
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
            Prayer That Opens Up The Mind For Creativity
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Book Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Link
                href={
                  "https://www.amazon.com/dp/B07BB4NX56"
                }
                className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
              >
                <Image
                  src="/assets/images/2.png"
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
                Prayer works wonders. It generates results. It unlocks supernatural power.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                In this powerful book, Bishop Olawale Olaofe delivers a focused spiritual tool for those seeking to awaken their creative potential through prayer. <span className="italic">Prayer That Opens Up the Mind for Creativity</span> teaches you how to engage God with strategic, Spirit-led prayers that activate divine insight and innovation.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                When you pray to the Father in the name of Jesus—empowered by the Holy Spirit and grounded in the Word—you’ll experience mental stimulation, divine inspiration, and an unlocking of your creative faculties. Your mind will no longer be stagnant. It will be stirred, sharpened, and supernaturally opened.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                This is not just a book—it’s an activation. As your creativity flows, you’ll become unstoppable. You’ll overcome obstacles, birth new ideas, and walk confidently into success and purpose.
              </p>

              {/* Get Book Button */}
              <div className="w-full flex justify-center items-center pt-6">
                <Link
                  href="https://www.amazon.com/dp/B07BB4NX56"
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

export default Book2;







// import React from "react";
// import { FaChevronRight } from "react-icons/fa";
// import Link from "next/link";
// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import type { Metadata } from "next";
// import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Riches of His Grace | Bishop Olawale Olaofe",
//   description:
//     "Explore the depths of divine favor in 'Riches of His Grace' by Bishop Olawale Olaofe. This inspiring book reveals how God’s abundant grace transforms lives, offering spiritual clarity, empowerment, and supernatural sufficiency for everyday living.",
// };

// const Book1 = () => {
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
//               BOOK-2
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Book Section */}
//       <div className="w-full bg-black px-6 md:px-10 lg:px-20 py-10 md:py-16">
//         <div className="container mx-auto">
//           <h2 className="font-extrabold text-2xl md:text-4xl lg:text-5xl uppercase text-myred text-center pb-10 underline decoration-2 hover:text-white transition duration-300">
//             Prayer That Opens Up The Mind For Creativity
//           </h2>

//           <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
//             {/* Book Image */}
//             <div className="w-full lg:w-1/2 flex justify-center">
//               <Link
//                 href={
//                   "https://www.amazon.com/dp/B07BB4NX56"
//                 }
//                 className="bg-black p-3 rounded-md w-full max-w-[300px] border border-white shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <Image
//                   src="/assets/images/2.png"
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
//               <p className="text-base md:text-lg leading-relaxed">
//                 Step into a deeper realm of divine revelation through this
//                 extraordinary book.{" "}
//                 <span className="italic">Riches of His Grace</span> invites you
//                 to soak in the wonders of God, opening your eyes to the profound
//                 work He is already doing in your life—even if you haven’t yet
//                 recognized it.
//               </p>

//               <p className="text-base md:text-lg leading-relaxed">
//                 As you read, you'll experience a unique impartation that will
//                 awaken your spirit to the reality that the good work God has
//                 begun in you is not only continuing, but being perfected and
//                 elevated by the abundant grace revealed through Jesus Christ.
//               </p>

//               <p className="text-base md:text-lg leading-relaxed">
//                 This book is a powerful guide to understanding and walking in
//                 God’s grace. You'll learn how to apply it in your everyday life,
//                 extract its virtues, and thrive with supernatural sufficiency.
//               </p>

//               {/* Get Book Button */}

//               <div className="w-full flex justify-center items-center pt-6">
//                 <Link
//                   href="https://www.amazon.com/dp/B07BB4NX56"
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

// export default Book1;

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#ffffff]  py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content            via-[#fff5f5] to-[#ffeaea]           */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-slideIn">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#7c1d20] tracking-wide italic">
            BISHOP OLAWALE OLAOFE —
          </h2>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug text-myred">
            "From the mosque to the altar,<br /> From death to divine power, And the world… will never be the same."
          </h1>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed max-w-xl font-medium mx-auto md:mx-0 mb-3 mt-4 pl-3 border-l-4 border-myred">
            Bishop Olawale Olaofe, once a devoted Muslim, encountered a life-changing transformation that led him to Christ and a divine calling. Now the Presiding Bishop of Household of Faith for All Nations in Marietta, Georgia, he ministers globally with resurrection anointing, apostolic grace, and evangelistic fire.
          </p>

          {/* <p className="text-base text-gray-700">
            He serves alongside his wife, Rev. Tinuola Olaofe, and together they are blessed with two children: Deborah and David.
          </p> */}

          <div className="mt-6">
            <Link
              href="/author"
            >
              <button className="bg-[#78292c] text-white uppercase tracking-wide text-sm md:text-base font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg">
                Explore More
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center animate-slideInRight">
          <Image
            src="/assets/images/author-1.JPG"
            alt="Bishop Olawale Olaofe"
            width={500}
            height={700}
            priority
            className="rounded-2xl w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] shadow-2xl border-4 border-[#78292c]/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;





// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <section className="bg-white py-6 md:py-7">
//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12">
//         {/* Text Content */}
//         <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left px-2 animate-slideIn">
//           <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#721b1e] mb-2">
//             BISHOP OLAWALE OLAOFE —
//           </h2>
//           <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3 leading-tight text-[#e4393f]">
//             "From the mosque to the altar. From death to divine power. And the world… will never be the same."
//           </h1>

//           <p className="text-sm md:text-base text-black leading-relaxed mb-5 max-w-xl font-medium mx-auto md:mx-0">
//             Bishop Olawale Olaofe, once a devoted Muslim, encountered a life-changing transformation that led him to Christ and a divine calling. Now the Presiding Bishop of Household of Faith for All Nations in Smyrna, Georgia, he ministers globally with resurrection anointing, apostolic grace, and evangelistic fire. He serves alongside his wife, Rev. Tinuola Olaofe, and they are blessed with two children, Deborah and David.
//           </p>

//           {/* <Link
//             href="https://www.amazon.com/BEYOND-REACH-POINT-ZERO-Part-ebook/dp/B0F94HC3FP"
//             target="_blank"
//           >
//             <button className="bg-myred text-white uppercase text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-white/50 shadow-2xl hover:bg-opacity-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-all duration-300 ease-in-out">
//               Get the Book
//             </button>
//           </Link> */}
//         </div>

//         {/* Image */}
//         <div className="w-full md:w-1/2 flex justify-center animate-slideInRight">
//           <Image
//             src="/assets/images/author-1.JPG"
//             alt="Book Cover"
//             width={500}
//             height={700}
//             priority
//             className="rounded-xl w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[500px] shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const BlogsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) setHasAnimated(true);
  }, [inView]);

  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-myred">
          Explore my Latest Blogs
        </h2>
        {/* <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-white max-w-xl flex justify-cente">
          Explore stories that inspire and provoke thought
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog 1 */}
          <div ref={ref}
            className={`blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
              hasAnimated ? "animate-slideIn" : "opacity-0"
            } `}
          >
            <Image
              src="/assets/images/E-book.JPG"
              alt="Exploring the Future of Technology"
              width={600}
              height={400}
              className="object-contain w-full max-h-48"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Exploring the Books
              </h3>
              <p className="text-gray-600 mb-4">
                Dive into the latest trends shaping the tech world, from AI
                innovations to sustainable solutions.
              </p>
              <Link
                href="/detailblog/blog1"
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog 2 
           <div ref={ref} className={`blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
              hasAnimated ? "animate-slideInRight" : "opacity-0"
            } `}
          >
          */}
          <div ref={ref} className={`blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
           hasAnimated ? "animate-slideInRight" : "opacity-0"
           } `}>
            <Image
              src="/assets/images/E-book.JPG"
              alt="The Art of Digital Storytelling"
              width={600}
              height={400}
              className="object-contain w-full max-h-48"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                The Art Storytelling
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to craft compelling narratives in the digital age with
                tips from industry experts.
              </p>
              <Link
                href="/detailblog/blog2"
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>


           {/* Blog 3 */}
           <div ref={ref}
            className={`blog-card bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
              hasAnimated ? "animate-slideInRight" : "opacity-0"
            } `}
          >
            <Image
              src="/assets/images/E-book.JPG"
              alt="Exploring the Future of Technology"
              width={600}
              height={400}
              className="object-contain w-full max-h-48"
              priority
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Exploring the Books
              </h3>
              <p className="text-gray-600 mb-4">
                Dive into the latest trends shaping the tech world, from AI
                innovations to sustainable solutions.
              </p>
              <Link
                href="/detailblog/blog3"
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>


        </div>
        <div className="text-center mt-8">
          <Link
            href="/blogs"
            className="inline-block bg-myred text-white py-2 px-6 rounded-full hover:bg-onhover transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

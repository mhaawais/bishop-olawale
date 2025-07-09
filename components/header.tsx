"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-shadow duration-300 border-b ${
        scrolled ? "shadow-md bg-[#943639]" : "bg-[#943639]"
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-20 py-1 h-[120px]">
        {/* Logo */}
        <Link href="/" className="relative w-[160px] h-[110px]">
          <Image
            src="/assets/logo/4.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-12 text-lg font-bold text-white">
          {[
            { name: "HOME", path: "/" },
            { name: "BOOKS", path: "/books" },
            { name: "AUTHOR", path: "/author" },
            { name: "CONTACT", path: "/contactus" },
          ].map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className="relative group hover:text-black transition-colors"
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full font-bold"></span>
            </Link>
          ))}
        </nav>

        {/* Get the Books Button */}
        <Link
          href="https://www.amazon.com/s?k=bishop+Olawale+Olaofe&crid=3GRS15JEO6TUT&sprefix=bishop+olawale+olaofe+%2Caps%2C79&ref=nb_sb_noss"
          target="_blank"
        >
          <button className="bg-white text-[#78292c] border-2 border-white hover:bg-[#78292c] hover:text-white px-10 py-4 rounded-full text-lg font-bold transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
            GET THE BOOKS
          </button>
        </Link>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-7 h-[100px]">
        <Link href="/" className="relative w-[120px] h-[80px]">
          <Image
            src="/assets/logo/4.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>

        <button onClick={toggleMenu} className="text-3xl text-white mt-1">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#943639] z-40 flex flex-col">
          <div className="flex items-center justify-between px-7 py-3">
            <Link href="/" className="relative w-[120px] h-[120px]">
              <Image
                src="/assets/logo/4.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </Link>

            <button onClick={toggleMenu} className="text-3xl text-white">
              <FiX />
            </button>
          </div>

          <nav className="flex flex-col items-center mt-16 space-y-6 text-2xl font-bold text-white">
            {[
              { name: "HOME", path: "/" },
              { name: "BOOKS", path: "/books" },
              { name: "AUTHOR", path: "/author" },
              { name: "CONTACT", path: "/contactus" },
            ].map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                onClick={toggleMenu}
                className="relative group hover:text-black transition-colors"
              >
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Get the Books Button */}
          <div className="flex justify-center mt-10">
            <Link
              href="https://www.amazon.com/s?k=bishop+Olawale+Olaofe&crid=3GRS15JEO6TUT&sprefix=bishop+olawale+olaofe+%2Caps%2C79&ref=nb_sb_noss"
              target="_blank"
            >
              <button className="bg-white text-[#78292c] border-2 border-white hover:bg-[#78292c] hover:text-white px-10 py-4 rounded-full text-lg font-bold transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
                GET THE BOOKS
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

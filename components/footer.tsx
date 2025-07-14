"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!subscriberEmail.includes("@")) {
      setSubscribeStatus("Please enter a valid email address.");
      return;
    }

    setSubscribeStatus("Subscribing...");

    try {
      const response = await fetch("https://formspree.io/f/mzzgnwdg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email: subscriberEmail,
          message: "Please subscribe me to the newsletter.",
        }),
      });

      if (response.ok) {
        setSubscribeStatus("Subscribed successfully!");
        setSubscriberEmail("");
      } else {
        setSubscribeStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setSubscribeStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#7c1c1f] via-[#943639] to-[#7c1c1f] text-white py-12 md:py-16 transition-all duration-500">
      <div className="container px-6 md:px-14 lg:px-20 mx-auto flex flex-col items-center">
        {/* Logo */}
        <Link
          href="/"
          className="bg-white p-4 rounded-2xl shadow-2xl mb-4 transform hover:scale-105 transition duration-300 hover:shadow-[#D4AF37]/40"
        >
          <Image
            src="/assets/logo/5.png"
            alt="Logo"
            width={140}
            height={140}
            className="w-36 h-36 object-contain"
          />
        </Link>

        {/* Author Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center hover:tracking-wide transition-all duration-300">
          BISHOP OLAWALE OLAOFE
        </h1>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden mb-6">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes size={28} className="text-white" />
            ) : (
              <FaBars size={28} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden w-full bg-white/10 backdrop-blur-sm p-4 rounded-xl mb-6 transition-all duration-300">
            <ul className="flex flex-col items-center space-y-4 text-lg font-medium">
              <li>
                <Link
                  href="/books"
                  className="hover:underline hover:text-[#D4AF37] transition"
                >
                  BOOKS
                </Link>
              </li>
              <li>
                <Link
                  href="/author"
                  className="hover:underline hover:text-[#D4AF37] transition"
                >
                  AUTHOR
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  className="hover:underline hover:text-[#D4AF37] transition"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center space-x-10 text-lg font-semibold mb-5">
          <Link
            href="/books"
            className="hover:underline hover:text-[#D4AF37] transition transform hover:scale-105"
          >
            BOOKS
          </Link>
          <Link
            href="/author"
            className="hover:underline hover:text-[#D4AF37] transition transform hover:scale-105"
          >
            AUTHOR
          </Link>
          <Link
            href="/contactus"
            className="hover:underline hover:text-[#D4AF37] transition transform hover:scale-105"
          >
            CONTACT
          </Link>
        </nav>

        <Link href="https://www.amazon.com/s?k=bishop+Olawale+Olaofe&crid=3GRS15JEO6TUT&sprefix=bishop+olawale+olaofe+%2Caps%2C79&ref=nb_sb_noss">
          <button className=" mb-10 bg-white text-[#78292c] border-2 border-white hover:bg-[#78292c] hover:text-white px-10 py-4 rounded-full text-lg font-bold transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105">
            GET THE BOOKS
          </button>
        </Link>

        {/* Divider */}
        <div className="w-full border-b-4 border-white/30 mb-8" />

        {/* Bio */}
        <div className="text-center max-w-4xl px-4 md:px-12">
          <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-4 underline decoration-[#D4AF37] decoration-2 underline-offset-4">
            BISHOP OLAWALE OLAOFE
          </h2>
          <p className="text-base md:text-lg mb-4">
            MYSTERY AUTHOR, WRITER, OR STORYTELLER.
          </p>
          <p className="text-sm md:text-base leading-relaxed mb-4 text-white/90">
            Bishop Olawale Olaofe is a respected spiritual leader whose journey
            from the corporate oil industry to the pulpit reflects a remarkable
            testimony of divine purpose. As the founder and Presiding Bishop of
            the Household of Faith for All Nations in Georgia, his teachings are
            marked by biblical depth, prophetic insight, and a passion to see
            lives transformed through prayer and the Word.
          </p>
          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Alongside his wife, Bishop-Elect (Mrs.) Tinuola Olaofe—a woman of
            prayer, grace, and strong family values—they have become a powerful
            ministry team. Together, they are equipping believers, strengthening
            marriages, and raising the next generation in faith, with countless
            testimonies of healing, restoration, and spiritual growth following
            their work.
          </p>
        </div>

        {/* Contact Email */}
        <div className="mt-6 text-center">
          <a
            href="mailto:BishopOlaofe@hoffan.org"
            className="text-white underline hover:text-[#D4AF37] transition text-sm md:text-base"
          >
            BishopOlaofe@hoffan.org
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <Link
            href="https://www.facebook.com/share/16uLCn5FUr/?mibextid=wwXIfr"
            target="_blank"
            className="hover:text-white text-[#D4AF37] transition text-2xl"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.youtube.com/@householdoffaithfan"
            target="_blank"
            className="hover:text-white text-[#D4AF37] transition text-2xl"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://www.instagram.com/bishopolaofe/#"
            target="_blank"
            className="hover:text-white text-[#D4AF37] transition text-2xl"
          >
            <FaInstagram />
          </Link>
        </div>

        <div className="mt-6 flex flex-col justify-center items-center text-center">
          <p className="text-lg font-medium mb-4">
            Navigate to my other websites below:
          </p>

          <Link
            href="https://www.hoffan.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#D4AF37] hover:text-blue-600 transition"
          >
            www.hoffan.org
          </Link>

          <Link
            href="https://www.fmtvlive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#D4AF37] hover:text-blue-600 transition mt-2"
          >
            www.fmtvlive.com
          </Link>

          <Link
            href="https://www.faithandmiracles.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#D4AF37] hover:text-blue-600 transition mt-2"
          >
            www.faithandmiracles.tv
          </Link>
        </div>

        {/* Newsletter Input */}
        <div className="mt-10 w-full max-w-lg text-center px-4">
          <p className="mb-4 text-white text-lg font-semibold">
            Subscribe to our Newsletter
          </p>
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              value={subscriberEmail}
              onChange={(e) => setSubscriberEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              required
            />
            <button
              type="submit"
              className="bg-[#D4AF37] text-[#7c1c1f] font-bold px-6 py-2 rounded-lg hover:bg-[#C39B32] transition"
            >
              Subscribe
            </button>
          </form>

          {subscribeStatus && (
            <p className="mt-2 text-sm text-white">
              {subscribeStatus.includes("success") ? (
                <span className="text-green-400">{subscribeStatus}</span>
              ) : (
                <span className="text-red-400">{subscribeStatus}</span>
              )}
            </p>
          )}
        </div>

        {/* Final Divider */}
        <div className="w-full mt-10 border-t-4 border-white/30" />

        {/* Copyright */}
        <p className="mt-6 text-xs text-white/60 text-center">
          © {new Date().getFullYear()} Bishop Olawale Olaofe. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

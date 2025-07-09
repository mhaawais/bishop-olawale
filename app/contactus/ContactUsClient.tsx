"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const ContactUsClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/manjggnq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <div className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-4">
            CONTACT
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-black hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-black hover:text-myred transition duration-200">
              CONTACT
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-[35%] relative flex items-center justify-center bg-black py-8 px-6">
          <div className="w-full max-w-xs sm:max-w-xs md:max-w-sm">
            <Image
              src="/assets/images/author-5.JPG"
              alt="Bishop Olawale Olaofe"
              width={600}
              height={600}
              className="rounded-2xl object-cover w-full h-auto shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[65%] bg-black px-6 py-12 md:px-10 lg:px-16 flex flex-col justify-center">
          <h3 className="text-myred text-base md:text-lg font-medium uppercase tracking-wider">
            About Bishop Olawale Olaofe ——
          </h3>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 mb-4">
            Message Bishop Olawale Olaofe
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 pl-3 border-l-4 border-myred">
            I would love to hear from you. Please fill out the form below and I’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="p-3 border border-gray-600 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="p-3 border border-gray-600 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows={6}
                className="p-3 border border-gray-600 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-myred placeholder-gray-500 resize-y"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-myred text-white py-3 rounded text-sm font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {status && (
            <p className={`mt-5 text-sm ${status.includes("successfully") ? "text-green-400" : "text-red-500"}`}>
              {status}
            </p>
          )}

          <div className="mt-8 text-sm text-gray-400">
            Or email me directly at:{" "}
            <a href="mailto:BishopOlaofe@hoffan.org" className="text-myred underline">
              BishopOlaofe@hoffan.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsClient;

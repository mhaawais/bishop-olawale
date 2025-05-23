import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import React from "react";
import type { Metadata } from "next";
import Three from "@/components/three";
import ChooseUs from "@/components/chooseus";
import Testimonial from "@/components/testimonial";
import AuthorIntro from "@/components/about";
import BlogsSection from "@/components/blogs";

export const metadata: Metadata = {
  title: "Books By Sameer Hirsi",  
  description: "Official site for the Amazon book by Charles Muthui & Taji Muthui.",
};


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Three />
      <AuthorIntro />
      <ChooseUs />
      <BlogsSection />
      <Testimonial />
      <Footer /> 
    </div>
  );
}

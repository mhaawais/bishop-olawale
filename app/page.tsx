import React from "react";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Three from "@/components/three";
import ChooseUs from "@/components/chooseus";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Wife from "@/components/wife";

export const metadata: Metadata = {
  title: "Bishop Olawale Olaofe – Faith, Wisdom & Victory Through God's Word",  
  description: "Discover life-changing books and teachings by Bishop Olawale Olaofe. From divine healing to financial breakthroughs, marriage restoration, and spiritual growth—explore resources rooted in biblical truth to transform your life and destiny.",
};


export default function Home() {
  return (
    <div>     
      <Header />
      <Hero />
      <Three />
      <Wife />
      <ChooseUs />
      <Hero2 />
      <Hero3 />
      <Footer />   
    </div>
  );
}

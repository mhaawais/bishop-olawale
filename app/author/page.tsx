import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bishop Olawale Olaofe - Presiding Bishop & Author",
  description:
    "Discover the inspiring story of Bishop Olawale Olaofe, Presiding Bishop of HOFFAN. From oil executive to spiritual leader, his journey is one of transformation, faith, and impact.",
};

const Author = () => {
  return (
    <section>
      <Header />

      <div className="relative w-full bg-white py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto flex flex-col justify-center items-center px-4">
          <h2 className="font-bold text-3xl md:text-5xl lg:text-6xl text-black border-t-2 border-b-2 border-myred py-2 mb-4">
            AUTHOR
          </h2>
          <div className="flex items-center gap-3">
            <Link href="/">
              <p className="text-lg md:text-xl font-bold text-bl;ack hover:text-myred transition duration-200 underline cursor-pointer">
                HOME
              </p>
            </Link>
            <FaChevronRight className="text-myred text-lg md:text-xl" />
            <p className="text-lg md:text-xl font-bold text-black hover:text-myred transition duration-200">
              AUTHOR
            </p>
          </div>
        </div>
      </div>

      {/* About Bishop Section */}
      <div className="bg-black py-20 px-6 md:px-10 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-[40%] flex-shrink-0">
              <Image
                src="/assets/images/author-2.JPG"
                alt="Bishop Olawale Olaofe"
                height={400}
                width={400}
                className="w-full h-auto aspect-square object-cover rounded-2xl shadow-2xl"
              />
            </div>

            <div className="w-full lg:w-[60%]">
              <h4 className="text-myred text-xl md:text-2xl font-semibold tracking-wide mb-2 uppercase">
                ABOUT BISHOP OLAWALE OLAOFE ——
              </h4>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                A Voice of Fire, Faith, and Harvest
              </h2>
              <div className="text-white text-base md:text-lg space-y-6 leading-relaxed">
                <p>
                  Bishop Olawale Olaofe is more than a preacher — he is a voice
                  of spiritual fire in our generation. A former oil company
                  executive turned presiding bishop, he leads{" "}
                  <strong>Household of Faith for All Nations (HOFFAN)</strong>{" "}
                  in Atlanta, Georgia — one of the fastest-growing churches
                  known for its prophetic depth, vibrant prayer atmosphere, and
                  undeniable signs and wonders.
                </p>
                <p>
                  A former Muslim who encountered Christ, Bishop Olaofe was
                  dramatically called into ministry on May 3, 2002, when he
                  received a divine instruction:{" "}
                  <em>“Come and join Me in My harvest...”</em> (Matthew
                  9:35-37). His response changed everything — he stepped down
                  from his corporate role and stepped fully into his Kingdom
                  assignment.
                </p>
                <p>
                  Bishop Olaofe is known for his passionate preaching,
                  miracle-filled crusades, and depth in the Word. His ministry
                  carries a unique resurrection anointing — many testify that
                  lives are transformed just by listening to him. With clarity
                  and conviction, he teaches kingdom principles, activates
                  destinies, and raises leaders.
                </p>
              </div>
            </div>
          </div>

          <div className="text-white text-base md:text-lg space-y-6 leading-relaxed">
            <div className="pl-3 border-l-4 border-myred leading-snug space-y-3">
            <p>
              A best-selling author, he penned the powerful book{" "}
              <strong>"Power Pictures"</strong> and multiple prayer and
              confession manuals that equip believers for victorious living. His
              messages echo in churches, conferences, and nations — calling the
              remnant to rise.
            </p>
            <p>
              He is a trained Mechanical Engineer and a lifelong student of the
              Holy Spirit, having attended multiple Bible schools and leadership
              programs. But more than academics, it's his intimacy with God that
              fuels his fire.
            </p>
            </div>
            <p>
              At the heart of his ministry stands his wife,{" "}
              <strong>Bishop-Elect (Mrs.) Tinuola Olaofe</strong> — co-pastor,
              intercessor, and a woman of deep wisdom. A gifted speaker and
              nurturer, she leads in areas of parenting, relationships, and
              healing prayer. Her own calling was prophesied over her as a child
              — today she walks in it with grace and power.
            </p>
            <p>
              Together, they are raising two anointed children,{" "}
              <strong>Oreoluwa Deborah</strong> and{" "}
              <strong>Ifeoluwa David</strong>, and building a generational
              legacy grounded in truth, love, and revival.
            </p>
            <p>
              Bishop Olaofe is not just a spiritual leader; he is a movement.
              His mission is to equip saints, rebuild broken altars, and usher
              in global harvest. His presence carries a divine atmosphere that
              shifts hearts. As many say:
              <br />
              <em className="text-myred">
                "You can’t encounter him and remain the same."
              </em>
            </p>
            <p>
              For invitations, ministry engagements, or mentorship inquiries:
              <br />
              📩{" "}
              <a
                href="mailto:BishopOlaofe@hoffan.org"
                className="text-myred underline"
              >
                BishopOlaofe@hoffan.org
              </a>
              <br />
              📩{" "}
              <a
                href="mailto:ReverendTinu@hoffan.org"
                className="text-myred underline"
              >
                ReverendTinu@hoffan.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-black py-16 px-6 md:px-10 lg:px-24">
        <h2 className="text-myred text-3xl md:text-4xl font-bold text-center mb-12">
          MINISTRY GALLERY !
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {[
            "/assets/images/author-4.JPG",
            "/assets/images/author-3.JPG",
            "/assets/images/author-9.avif",
            "/assets/images/author-6.JPG",
            "/assets/images/author-2.JPG",
            "/assets/images/author-8.JPG",
          ].map((src, index) => (
            <div
              key={index}
              className="group relative w-full overflow-hidden rounded-xl shadow-xl"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};
export default Author;

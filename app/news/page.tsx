"use client";
import { Poppins } from "next/font/google";

import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { news_list } from "@/app/news/news";
import Card from "@/app/components/news/card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const grandRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const params = useSearchParams();
  const s = params.get("s");
  useEffect(() => {
    if (s === "0" && aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (s === "1" && grandRef && grandRef.current) {
      grandRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [s, aboutRef, grandRef]);

  return (
    <div className="">
      <nav className="w-screen top-0 z-50">
        <NavBar aboutRef={aboutRef} grandRef={grandRef} />
      </nav>
      <div className="flex items-center justify-center py-36 pb-12">
        <div className="absolute h-screen w-full">
          <Image
            src="/backgrounds/scholarship.webp"
            alt="Background Image of Aerial shot of Jakarta"
            quality={100}
            fill
            style={{ objectFit: "cover", filter: "brightness(70%)" }}
            className=""
          />
        </div>
        <h1
          className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold my-16`}
          ref={aboutRef}
        >
          NEWS
        </h1>
      </div>
      <div className="items-center justify-center">
        <div className="absolute min-h-fit bg-[#DF6A26]">
          <div
            className={`h-screen w-screen bg-gradient-to-b from-[#DF6A26] to-[#f55789] z-20 ${poppins.className} text-justify `}
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 p-5">
              {news_list.map((news, i) => (
                <Card
                  key={i}
                  date={news.date}
                  author={news.author}
                  title={news.title}
                  desc={news.desc}
                  link={news.link}
                  image={news.image}
                />
              ))}
            </div>
            {/* <iframe
              src="https://widgets.sociablekit.com/medium-publication-feed/iframe/25453479"
              frameBorder="0"
              width="100%"
              height="1000"
            ></iframe> */}
          </div>
        </div>
      </div>
    </div>
  );
}

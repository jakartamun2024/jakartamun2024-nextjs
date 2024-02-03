"use client";
import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import Section1 from "./components/sections/1_hero/section1";
import Section2 from "./components/sections/2_councils/section2";
import Footer from "./components/footer/footer";
import Section3 from "./components/sections/3_speakers/section3";
import Section4 from "./components/sections/4_sponsors/section4";

export default function Home() {
  return (
    <div>
      <nav className="w-full top-0 fixed z-50">
        <NavBar />
      </nav>
      <div className="w-full h-full lg:pt-[7rem] pt-[6rem] p-3 grid grid-cols-1 gap-4">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <Footer />
    </div>
  );
}

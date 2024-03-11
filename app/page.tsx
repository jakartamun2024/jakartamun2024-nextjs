"use client";
import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <nav className="w-full top-0 fixed z-50">
        <NavBar />
      </nav>
      <div className="w-full h-full lg:pt-[7rem] pt-[6rem] p-3 grid grid-cols-1 gap-4"></div>
      <Footer />
    </div>
  );
}

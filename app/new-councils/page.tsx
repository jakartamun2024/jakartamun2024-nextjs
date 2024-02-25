"use client";

import { Poppins } from "next/font/google";

import Image from "next/image";
import NavBar from "../components/navbar/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div>
      <nav className="w-full top-0 z-50">
        <NavBar />
      </nav>
    </div>
  );
}

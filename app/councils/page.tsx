"use client";
import React from "react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Section1 from "./components/sections/section1";

const CouncilsPage = () => {
  return (
    <div>
      <nav className="w-full top-0 fixed z-50">
        <NavBar />
      </nav>
      <div className="w-full h-full lg:pt-[7rem] pt-[6rem] p-3 grid grid-cols-1 gap-4">
        <Section1 />
      </div>
      <Footer />
    </div>
  );
};

export default CouncilsPage;
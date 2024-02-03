import React from "react";
import { DM_Serif_Text, Open_Sans } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import CouncilCard from "./councilcard";
import { councils } from "./constant";

const bodoni = Bodoni_Moda({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});
const dmSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

function Section2() {
  return (
    <div className="pt-10">
      <div className="bg-gradient-to-br  from-[#b23727] via-[#dc7030] via-10% to-[#faca6b] lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] rounded-xl justify-self-center flex flex-col mx-auto p-1">
        <div className="bg-[#f3f5d8] rounded-lg shadow-medium justify-self-center flex flex-col pb-3">
          <div className="bg-gradient-to-b from-[#faca6b] to-[#F36A9D] w-min mx-auto rounded-xl my-3 shadow-md">
            <p
              className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] w-min text-nowrap p-3 px-4 mx-auto ${dmSerif.className} md:text-4xl text-3xl text-center`}
            >
              Councils
            </p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 m-4 items-center justify-items-center gap-5">
            {councils.map(({ name, desc }, index) => (
              <CouncilCard name={name} description={desc} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;

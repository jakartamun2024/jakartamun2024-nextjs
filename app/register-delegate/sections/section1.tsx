import React from "react";
import { DM_Serif_Text, Open_Sans } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import Image from "next/image";
import RegisterDropdown from "../../components/navbar/registrationdropdown";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] });
const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"] });

function Section1() {
  return (
    <div className="bg-orange-200 lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-screen rounded-xl justify-self-center flex lg:flex-col flex-col">
      <div className="container mx-auto my-auto p-4 w-4/6 py-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf_NAEfMDC_hFi3dF-f-Ud6sBFGm7OYb-xJIoinZlK6hnv7GA/viewform?embedded=true"
          className="w-full h-screen"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default Section1;

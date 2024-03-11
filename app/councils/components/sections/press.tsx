import React from "react";
import { DM_Serif_Text, Open_Sans } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
import "./styles.css";
import Image from "next/image";
import RegisterDropdown from "../../../components/navbar/registrationdropdown";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet";

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] });
const dmSerif = DM_Serif_Text({ subsets: ["latin"], weight: "400" });
const openSans = Open_Sans({ subsets: ["latin"] });

function Press() {
  return (
    <div className="pt-10">
      <div className="flowing-background md:w-[85%] sm:w-[95%] w-[95%] rounded-xl justify-self-center flex flex-col mx-auto p-1">
        <div className="bg-[#f3f5d8] rounded-lg shadow-medium justify-self-center flex flex-col py-4 px-4">
          <div className="flex flex-row gap-5 mx-4">
            <div className="flex-auto min-w-36 max-w-72 min-h-36 relative rounded-xl bg-gradient-to-br from-[#f9953b] to-[#F36A9D] hidden md:block">
              <Image
                src="/council-icon/un.png"
                alt="Council's Icon"
                className="p-1 object-contain"
                fill
              />
            </div>
            <div className="flex-auto flowing-background rounded-xl shadow-md max-h-fit">
              <div className="flex flex-row justify-center">
                <p
                  className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-[#fadda5] py-3 px-4 w-fit ${dmSerif.className} md:text-4xl text-2xl text-center border-b-2 border-[#f3f5d8]`}
                >
                  Press Corps
                </p>
              </div>

              <p
                className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#fadda5] pb-1 px-4 mx-auto w-fit ${openSans.className} text-sm md:text-lg text-center`}
              >
                Offline - Single Delegate
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#f9953b] to-[#F36A9D] w-auto h-auto mx-4 rounded-xl mt-5 shadow-md">
            <div className="md:hidden w-36 h-36 relative rounded-xl mx-auto mt-3 drop-shadow-md ">
              <Image
                src="/council-icon/unwto.png"
                alt="Council's Icon"
                className="p-2 object-contain"
                fill
              />
            </div>
            <div className="mx-auto w-fit h-fit rounded-xl mt-3 shadow-xl px-3">
              <p
                className={`text-white text-center text-xl mt-3 ${bodoni.className} border-b-2 border-white`}
              >
                Council Description
              </p>
            </div>

            <p
              className={`whitespace-pre-wrap text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify `}
            >
              Also known as the “fourth estate” as part of the world’s
              democracy, the Press Corps serves as the public’s eyes and ears to
              acquire and report about current events, government actions, and
              societal trends. Press Corps is also made up of journalists,
              photographers, and other media professionals from a real life news
              agency. In Jakarta International Model UN 2024, the Press Corps
              journalists are to attend briefings, press conferences, and events
              to pose pointed questions, look for explanations, and deliver
              timely and correct information to the public. They serve as a link
              between the general public and people in positions of authority,
              encouraging openness and acting as a restraint on authority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Press;

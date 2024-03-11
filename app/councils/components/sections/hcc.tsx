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

function HCC() {
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
                  Historical Crisis Council (HCC)
                </p>
              </div>

              <p
                className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#fadda5] pt-1 px-4 mx-auto w-fit ${openSans.className} text-sm md:text-lg text-center`}
              >
                The 1957 National Forum: Drafting a New Unity Beyond the
                Centralized Order
              </p>
              <p
                className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#fadda5] pb-1 px-4 mx-auto w-fit ${openSans.className} text-sm md:text-lg text-center  border-t border-[#f3f5d8]`}
              >
                Offline - Advanced - Single Delegate
                <br />
                Chamber name: Dewan Nasional
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
                Introduction to Historical Crisis Committee (HCC)
              </p>
            </div>

            <p
              className={`whitespace-pre-wrap text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify `}
            >
              The Crisis Council is an alternative council type that is designed
              around emulating realistic, high-stake conditions that otherwise
              cannot be imitated in conventional UN councils. Following a
              Historical Crisis Council (HCC) setting, delegates are given the
              powers to change the trajectory of Indonesian history through
              their unique roles - all with individual sets of goals. Delegates
              are expected to navigate through various scenarios, all the while
              maneuvering each scenario unraveling in real time as the Council’s
              story arc progresses.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#f9953b] to-[#F36A9D] w-auto h-auto mx-4 rounded-xl my-3 shadow-md">
            <div className="mx-auto w-fit h-fit rounded-xl mt-3 shadow-xl px-3">
              <p
                className={`text-white text-center text-xl mt-3 ${bodoni.className} border-b-2 border-white`}
              >
                Dewan Nasional description
              </p>
            </div>
            <p
              className={`whitespace-pre-wrap text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify`}
            >
              Enacted in 1957, the Dewan Nasional is a national board which
              stands as the first program established by the Djuanda Cabinet,
              and was formed as an advisory board. The board is tasked with
              assisting the cabinet by providing advice and suggestions (whether
              requested by the cabinet or not), as well as bridging the gap
              between the government and its citizens. The board was led by
              Soekarno, and consisted of various regional representatives, who
              acted the voices of the people, and were expected to deliver the
              aspirations and concerns of the citizens of their respective
              regions. While the Dewan Nasional did not hold any direct power
              within the central government, they were highly influential in the
              decision-making process of the government, and had a hand in many
              of its important decrees. Ultimately, the board served as a
              conduit, channeling the hopes of the people to achieve the
              national dream of a unified Indonesia.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#f9953b] to-[#F36A9D] w-auto h-auto mx-4 rounded-xl mb-3 shadow-md">
            <div className="mx-auto w-fit h-fit rounded-xl mt-3 shadow-xl px-3">
              <p
                className={`text-white text-center text-xl mt-3 ${bodoni.className} border-b-2 border-white`}
              >
                Topic description
              </p>
            </div>
            <p
              className={`whitespace-pre-wrap text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify`}
            >
              It has been 12 years since the Proclamation of Independence, but
              the fight for unification has become harder than ever. Diplomatic
              attempts to consolidate and mediate governance in Irian Barat have
              failed, and elsewhere, tensions continue to rise as the threat of
              separatist factions—namely the forces of Dewan Perjuangan and
              Permesta—become ever more prominent. In spite of its independence,
              Indonesian politics remain muddled by the constant obstructions of
              military defectors and foreign powers alike, both loosening the
              stronghold of the central government. In an era flourishing with
              novel perceptions of Indonesian unity, the National Forum is
              created as a turning point for the Djuanda cabinet in restoring
              political certainty. Tasked with navigating the problems brought
              upon by economic and political turmoil, a myriad of questions are
              heaved upon this National Forum: what lies ahead for Indonesia’s
              governance? Can the National Forum achieve integration amidst
              threats of disintegration? Or will the authority of the central
              government crumble under the pressure of separatist forces?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HCC;

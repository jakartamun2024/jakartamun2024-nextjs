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

function Section1() {
  return (
    <div className="pt-10">
      <div className="flowing-background md:w-[85%] sm:w-[95%] w-[95%] rounded-xl justify-self-center flex flex-col mx-auto p-1">
        <div className="bg-[#f3f5d8] rounded-lg shadow-medium justify-self-center flex flex-col py-4">
          <div className="flex flex-col md:flex-row gap-5 mx-4">
            <div className="w-36 h-36 relative rounded-xl mx-autohidden md:block bg-gradient-to-br from-[#f9953b] to-[#F36A9D]">
              <Image
                src="/council-icon/my-image.png"
                alt="UNICEF Icon"
                objectFit="contain"
                fill
              />
            </div>
            <div className="flex-auto flowing-background bg-gradient-to-br from-[#f9953b] to-[#F36A9D] animate-color rounded-xl shadow-md max-h-fit">
              <div className="flex flex-row justify-center">
                <p
                  className={`text-transparent bg-clip-text bg-gradient-to-b from-white to-[#fadda5] py-3 px-4 w-fit ${dmSerif.className} md:text-4xl text-2xl text-center border-b-2 border-[#f3f5d8]`}
                >
                  United Nations Children's Fund (UNICEF)
                </p>
              </div>

              <p
                className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#fadda5] pt-1 px-4 mx-auto w-fit ${openSans.className} text-sm md:text-lg text-center`}
              >
                Prioritising the Forthcoming Generation: Protecting Child Rights
                through Child Friendly Cities
              </p>
              <p
                className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#fadda5] pb-1 px-4 mx-auto w-fit ${openSans.className} text-sm md:text-lg text-center  border-t border-[#f3f5d8]`}
              >
                Offline - Beginner - Single Delegate
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#f9953b] to-[#F36A9D] w-auto h-auto mx-4 rounded-xl my-3 shadow-md">
            <div className="md:hidden w-36 h-36 relative rounded-xl mx-auto mt-3">
              <Image
                src="/council-icon/UNHR.png"
                alt="UNICEF Icon"
                objectFit="contain"
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
              className={`text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify `}
            >
              The United Nations Children's Fund—abbreviated to UNICEF—is an
              international organization that focuses on assisting children
              worldwide through humanitarian and developmental aid. First
              established in 1946, the organization acted as a relief for
              children who have been severely impacted by the second World War.
              By 1950, the organization's direction was shifted into creating
              and implementing programs that would generally help increase
              children's welfare, hence extending UNICEF's mandate indefinitely.
              Since then, UNICEF has collaborated with over 190 countries,
              prioritizing its work in less-developed regions and is known to
              actively participate in assisting children in various emergency
              situations.
              <br />
              <br />
              UNICEF's programs have been guided by the Convention of the Rights
              of the Child (1986), which explores means of child development and
              their indivisible rights. Additionally, they are mandated in
              assisting the attainment of the 2015 Sustainable Development Goals
              (SDGs) worldwide - being, to ensure a form of sustainable
              development that is “child-centered”. Amongst its many child
              welfare frameworks includes the Child Friendly City Initiative
              (CFCI), which calls for the inclusion of children in
              public-private discussions to create living spaces that support
              child development. May it be child health, education, or other
              forms of rights, UNICEF remains consistent in improving forms of
              development for children worldwide.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#f9953b] to-[#F36A9D] w-auto h-auto mx-4 rounded-xl my-3 shadow-md">
            <div className="mx-auto w-fit h-fit rounded-xl mt-3 shadow-xl px-3">
              <p
                className={`text-white text-center text-xl mt-3 ${bodoni.className} border-b-2 border-white`}
              >
                Topic Description
              </p>
            </div>
            <p
              className={`text-white w-fit mx-10 py-5 ${openSans.className} text-wrap text-sm md:text-base text-justify`}
            >
              Communities should be livable for all - where everyone is
              guaranteed safety, comfort, and freedom of self-development.
              Hence, a child-friendly city is formed when a city is able to
              accommodate children and promotes their rights to the fullest
              extent in ensuring their livelihood. This can be seen through the
              design of the city's infrastructure, the inclusion of children in
              any and all governmental decisions, as well as the provision of
              basic necessities and facilities. However, due to the multitude of
              city development priorities—such as accommodating affluent
              newcomers, increasing attractiveness for investors, and others—
              ensuring child friendliness has been put on the last of their
              concerns. May it be school shootings, child marriages, or child
              labour, cases of atrocities towards child welfare have become
              increasingly common, with government and private actors turning a
              blind eye towards these crimes. These acts are a form of violation
              against the UN Convention on the Rights of the Child. However,
              amidst differences of financial capacities between Member States,
              could existing definitions of child-friendly cities be achieved in
              all countries? From this situation, delegates are expected to be
              able to collaborate to put forth a solution that can align the
              needs for a child-friendly city, all the while exploring new and
              improved ways in safeguarding and creating a comfortable childhood
              for all children.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;

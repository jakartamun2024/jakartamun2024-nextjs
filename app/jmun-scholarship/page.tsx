"use client";
import { Poppins } from "next/font/google";

import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { awardees, faqs } from "./constant";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";

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
          JMUN SCHOLARSHIP
        </h1>
      </div>
      <div className="items-center justify-center">
        <div className="absolute min-h-fit bg-[#DF6A26]">
          <div
            className={`min-h-fit bg-gradient-to-b from-[#DF6A26] to-[#f55789] z-20 ${poppins.className} text-justify`}
          >
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-16`}
            >
              What is JMUN Scholarship?
            </h1>
            <div className="p-10 lg:px-40">
              <p className="md:text-lg">
                Get ready to embark on a journey of diplomacy, debate, and
                discovery with the Jakarta International Model United Nations
                2024 Scholarship!
              </p>
              <br />
              <p className="md:text-lg">
                JMUN 2024 is thrilled to bring back its scholarship program to
                support and recognize the exceptional talents and commitment of
                students who are passionate in MUN. Through this program, JMUN
                2024 will provide aid in the form of a free admission fee and
                exclusive MUN training by an experienced MUN-er. As a token of
                appreciation, awardees will also receive an e-certificate. By
                applying for JMUN 2024 Scholarship, awardees will have the
                opportunity to develop their skills and widen their network.
              </p>
              <br />
              <p className="md:text-lg">
                Seize the opportunity to develop your skills, expand your
                network, and make a difference on the global stage. Register now
                through the link provided!
              </p>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-10`}
            >
              Past Awardees
            </h1>
            <div className="p-10 lg:px-40">
              <div className="flex flex-col justify-center content-center gap-12">
                {awardees.map(({ picture, name, testimony }, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row justify-center"
                  >
                    <Image
                      src={picture}
                      alt="Picture of past awardee"
                      style={{
                        width: "9.5em",
                        height: "9.5em",
                        borderRadius: "50%",
                      }}
                      className="self-center sm:self-start mb-5"
                      width={300}
                      height={300}
                    />

                    <div className="ms-4 self-center sm:w-1/2">
                      <p className="font-bold mb-2 text-center sm:text-left">
                        {name}
                      </p>
                      <p>&quot;{testimony}&quot;</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-16`}
              ref={aboutRef}
            >
              Frequently Asked Questions
            </h1>
            <div className="p-10 lg:px-40 sm:w-3/4 mx-auto">
              {faqs.map(({ q, a }, index) => (
                <Disclosure as="div" key={index} className={"mb-2"}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-md font-medium text-black hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/75">
                        <span>{q}</span>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-orange-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel
                        style={{ whiteSpace: "pre-line" }}
                        className="px-4 pb-2 pt-4 text-sm text-white"
                      >
                        {a}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <a
                href="http://bit.ly/ScholarshipGuidebookJMUN2024"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="items-center justify-center mx-auto rounded-lg border border-transparent px-5 py-3 text-lg font-medium text-white hover:bg-pink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                >
                  GUIDEBOOK
                </button>
              </a>
            </div>
            <div className="flex justify-center pt-2 pb-16">
              <a
                href="http://bit.ly/JMUN2024Scholarship"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="items-center justify-center mx-auto rounded-lg border border-transparent bg-pink-100 px-5 py-3 text-lg font-bold text-pink-900 hover:bg-pink-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                >
                  REGISTER NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

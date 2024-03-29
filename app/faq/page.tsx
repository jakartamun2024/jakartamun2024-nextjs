"use client";
import { Poppins } from "next/font/google";

import {
  faLinkedin,
  faSquareXTwitter,
  faFacebookSquare,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {Accordion, AccordionItem} from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const defaultContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
      <div>
        <nav className="w-screen top-0 z-50">
          <NavBar/>
        </nav>
        <div
            className={`${poppins.className} w-screen h-screen flex flex-col justify-center bg-gradient-to-b from-[#DF6A26] to-[#f55789] relative`}
        >
          <Image
              src="/backgrounds/image.jpg"
              alt="Background Image of Bundaran HI"
              width={1920}
              height={700}
              style={{objectFit: "cover"}}
              quality={100}
              className="absolute z-0 top-0 h-1/3 w-full hidden md:block"
          />
          <div>
            <div className="">
              <h1
                  className={`text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-xl from-white to-[#faca6b] font-extrabold pt-20 md:pt-0 md:mb-10`}
              >
                FREQUENTLY ASK QUESTION
              </h1>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row w-max md:flex-row mx-auto w-full md:w-1/2 justify-around px-2">
                <div className="">
                  <Accordion>
                    <AccordionItem classNames={{
                      indicator: "fill:red",
                      title: "text-4xs md:text-5xs lg:text-6xs text text-transparent bg-clip-text bg-gradient-to-b drop-shadow-xl from-white to-[#faca6b] font-extrabold pt-20 md:pt-0 md:mb-10"
                    }} key="1" aria-label="Lorem "
                                   title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore">
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                        classNames={{title: "text-4xs md:text-5xs lg:text-6xs text text-transparent bg-clip-text bg-gradient-to-b drop-shadow-xl from-white to-[#faca6b] font-extrabold pt-20 md:pt-0 md:mb-10"}}
                        key="2" aria-label="Accordion 2"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore">
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                        classNames={{title: "text-4xs md:text-5xs lg:text-6xs text text-transparent bg-clip-text bg-gradient-to-b drop-shadow-xl from-white to-[#faca6b] font-extrabold pt-20 md:pt-0 md:mb-10"}}
                        key="3" aria-label="Accordion 3"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore">
                      {defaultContent}
                    </AccordionItem>

                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
            className="absolute hidden md:block bottom-4 z-50 font-semibold left-1/2 transform -translate-x-1/2 text-center">
          <p>
            Photo by{" "}
            <a
                href="https://unsplash.com/@dapiki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                target="_blank"
                rel="noopener noreferrer"
            >
              dapiki moto
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/the-sun-is-setting-over-a-city-with-tall-buildings-r4GDiu1V4cg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </div>
      </div>
  );
}

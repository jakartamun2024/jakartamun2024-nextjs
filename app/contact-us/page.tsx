"use client";

import { Poppins } from "next/font/google";

import {
  faLinkedin,
  faInstagram,
  faSquareXTwitter,
  faFacebookSquare,
  faLine,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <nav className="w-screen top-0 z-50">
        <NavBar />
      </nav>
      <div className="w-screen h-screen flex flex-col justify-center bg-gradient-to-b from-[#DF6A26] to-[#f55789] relative">
        <Image
          src="/backgrounds/image.jpg"
          alt="Background Image of Bundaran HI"
          width={1920}
          height={700}
          style={{ objectFit: "cover" }}
          quality={100}
          className="absolute z-0 top-0 h-1/3 w-full hidden md:block"
        />
        <div>
          <div className="z-10">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-xl from-white to-[#faca6b] font-extrabold md:mb-10`}
            >
              CONTACT US
            </h1>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row w-fit  mx-auto md:pl-8 pt-10 md:divide-x-1 z-50">
              <div className="md:px-5 lg:px-10">
                <p className="text-xl md:text-xl lg:text-3xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                  General Queries
                </p>
                <p className="text-center">delrel.jmun@isafis.or.id</p>
              </div>
              <div className="md:px-5 lg:px-10">
                <p className=" text-xl md:text-xl lg:text-3xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                  Sponsorship
                </p>
                <p className="text-center">publicaffairs.jmun@isafis.or.id</p>
              </div>
              <div className="md:px-5 lg:px-10">
                <p className="text-xl md:text-xl lg:text-3xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                  Media Partnership
                </p>
                <p className="text-center">publicaffairs.jmun@isafis.or.id</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-fit my-10  justify-center mx-auto">
              <div className="">
                <p className="text-xl md:text-xl lg:text-3xl font-bold pb-4 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                  Social Media
                </p>
                <div className="flex flex-row gap-10 md:gap-20">
                  <a
                    href="https://www.tiktok.com/@jakartamun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className=""
                      fontSize={40}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/jakartamun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      className=""
                      fontSize={40}
                    />
                  </a>
                  <a
                    href="https://twitter.com/jakartamun"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareXTwitter}
                      className=""
                      fontSize={40}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/jakartamun/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className=""
                      fontSize={40}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mx-auto w-full md:w-1/2 justify-around px-2">
              <div className="">
                <p className="text-xl md:text-xl lg:text-3xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                  Location
                </p>
                <p className="text-center">
                  Jl. Joe Klp. Tiga No.56, RT.1/RW.3, Lenteng Agung, Kec.
                  Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12520
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

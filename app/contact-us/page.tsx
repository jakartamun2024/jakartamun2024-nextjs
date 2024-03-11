"use client";

import { Poppins } from "next/font/google";

import {
    faLinkedin,
    faInstagram,
    faSquareXTwitter,
    faFacebookSquare,
    faLine,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import NavBar from "../components/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <div className="w-full h-screen flex items-center justify-center bg-[#DF6A26]">
                <div>
                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold m-5`}
                    >
                        CONTACT US
                    </h1>
                    <div className="flex flex-col mx-auto p-1 w-screen justify-around">
                        <div className="flex flex-col md:flex-row mx-auto p-1 w-screen justify-around my-3">
                            <div className="my-1">
                                <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">General Queries</p>
                                <p className="text-center">delrel.jmun@isafis.or.id</p>
                            </div>

                            <div className="my-1">
                                <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">Media Partnership</p>
                                <p className="text-center">publicaffairs.jmun@isafis.or.id</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mx-auto p-1 w-screen justify-around my-3">
                            <div className="my-1">
                                <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">Social Media</p>
                                <div className="flex flex-col gap-1">
                                    <p className="text-center w-64 mx-auto"><span className="me-2"><FontAwesomeIcon icon={faTiktok} className='' fontSize={20} /></span>@jakartamun</p>
                                    <p className="text-center w-64 mx-auto"><span className="me-2"><FontAwesomeIcon icon={faSquareXTwitter} className='' fontSize={20} /></span>@jakartamun</p>
                                    <p className="text-center w-64 mx-auto"><span className="me-2"><FontAwesomeIcon icon={faFacebookSquare} className='' fontSize={20} /></span>Jakarta Model United Nations</p>
                                    <p className="text-center w-64 mx-auto"><span className="me-2"><FontAwesomeIcon icon={faLinkedin} className='' fontSize={20} /></span>Jakarta International Model United Nations</p>

                                </div>
                            </div>
                            <div className="my-1">
                                <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">Location</p>
                                <p className="text-center w-64 mx-auto">Jl. Joe Klp. Tiga No.56, RT.1/RW.3, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

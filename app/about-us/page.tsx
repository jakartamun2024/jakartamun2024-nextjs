"use client";

import { Poppins } from "next/font/google";

import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});



export default function Home() {
    const grandRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const params = useSearchParams();
    const s = params.get('s')
    useEffect(() => {
        if (
            s === "0" &&
            aboutRef &&
            aboutRef.current
        ) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (
            s === "1" &&
            grandRef &&
            grandRef.current
        ) {
            grandRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, ["*"]);

    return (
        <div>
            <nav className="w-screen top-0 z-50">
                <NavBar aboutRef={aboutRef} grandRef={grandRef} />
            </nav>
            <div className="w-screen flex items-center justify-center py-36 pb-12">
                <div className="absolute min-h-fit h-screen w-screen">
                    <Image
                        src="/backgrounds/dawn-jakarta.jpg"
                        alt="Background Image of Aerial shot of Jakarta"
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        className="lg:hidden"
                    />
                    <div className="hidden lg:block">
                        <Image
                            src="/backgrounds/dawn-jakarta.jpg"
                            alt="Background Image of Aerial shot of Jakarta"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </div>
                <div
                    className={`z-20 ${poppins.className}`}
                >
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nB3NELoflpg?si=uKZBSk0ie5wE8kHq&autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className="w-full items-center justify-center">
                <div className="absolute min-h-fit w-screen bg-[#DF6A26]" >
                    <h1
                        className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold m-5`} ref={aboutRef}
                    >
                        ABOUT JMUN
                    </h1>
                    <div className="p-10 lg:px-40">
                        <p>Jakarta Model United Nations (JMUN) is the biggest International Model United Nations (MUN) in Indonesia which first-ever held in the capital city of Republic of Indonesia, Jakarta, by ISAFIS in 2011.</p>
                        <br />
                        <p>Jakarta MUN offers the opportunity to experience the challenges of international negotiation and diplomacy. In Jakarta MUN, participants will act as a representative from the particular country then discuss international issues like the process that occurs at a UN conference. Throughout the conference, delegates will gain insight into the workings of the United Nations by actively participating in the resolution of important global issues.</p>
                        <br />
                        <p>The first session of the Jakarta MUN was held in 2011. Jakarta MUN 2011 successfully attracted more than 300 delegates ranging from local universities to foreign universities. It marked a new era for MUN conferences in Indonesia. Since then, Jakarta MUN is held annually. Eight sessions of Jakarta MUN have successfully brought changes for youth in spreading the ideas and values of diplomacy as well as developing knowledge of the issues. This has made Jakarta MUN an international phenomenon. Jakarta MUN itself has many programs besides the conferences, such as the MUN 101, cultural and charity ball, and social night.</p>
                        <br />
                        <p>Years after it was first held. now Jakarta MUN has become one of the most prestigious events in the international MUN community. Jakarta MUN participants do not only hail from major cities in Indonesia, but also from various countries like USA, UK, India, New Zealand, Australia, Malaysia, Singapore, Laos, Philippines, Thailand, Ghana and many more.</p>
                    </div>
                    <div className="min-h-fit h-screen bg-gradient-to-b from-[#DF6A26] to-black to-60%">
                        <h1
                            className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold m-5 mt-10`} ref={grandRef}
                        >
                            GRAND THEME
                        </h1>
                    </div>
                </div>

            </div>
        </div >
    );
}
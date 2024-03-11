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
  const taglineRef = useRef<HTMLDivElement>(null);
  const grandDesignRef = useRef<HTMLDivElement>(null);
  const isafisRef = useRef<HTMLDivElement>(null);

  const params = useSearchParams();
  const s = params.get("s");
  useEffect(() => {
    if (s === "0" && aboutRef && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (s === "1" && grandRef && grandRef.current) {
      grandRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, ["*"]);

  return (
    <div className="">
      <nav className="w-screen top-0 z-50">
        <NavBar aboutRef={aboutRef} grandRef={grandRef} />
      </nav>
      <div className="flex items-center justify-center py-36 pb-12">
        <div className="absolute h-screen w-full">
          <Image
            src="/backgrounds/dawn-jakarta.jpg"
            alt="Background Image of Aerial shot of Jakarta"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            className=""
          />
        </div>
        <div className="z-20 hidden md:block">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/nB3NELoflpg?si=uKZBSk0ie5wE8kHq&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="z-20 md:hidden">
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/nB3NELoflpg?si=uKZBSk0ie5wE8kHq&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="items-center justify-center">
        <div className="absolute min-h-fit bg-[#DF6A26]">
          <div
            className={`min-h-fit bg-gradient-to-b from-[#DF6A26] to-[#f55789] z-20 ${poppins.className}`}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-16`}
              ref={aboutRef}
            >
              ABOUT JMUN
            </h1>
            <div className="p-10 lg:px-40">
              <p className="text-jusify">
                Jakarta International Model United Nations (“JMUN”) is an annual
                MUN conference held by the Indonesian Student Association for
                International Studies (“ISAFIS”), one of the biggest and most
                prestigious international MUN conferences in Indonesia. JMUN was
                first held in 2011, becoming the pioneer of international MUNs
                in Indonesia. JMUN offers an opportunity for the youth to
                experience international negotiation and diplomacy, substantive
                discussions, as well as social and cultural exchange experiences
                in the very heart and capital of Indonesia through its side
                events. Every year, JMUN comes with an array of UN's councils,
                with each council having its respected delegates to develop a
                draft resolution aimed at tackling each council's main topic.
              </p>
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-10`}
            >
              GRAND THEME
            </h1>
            <div className="p-10 lg:px-40">
              <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                The Global Enlightenment: Advancing Initiatives for a Better
                Tomorrow
              </p>
              <p>
                As one chapter concludes, another unfolds, revealing new
                insights for the world to explore. After years marked by
                catastrophes, from the far-reaching pandemic to numerous
                clashing interests hindering the achievement of a prosperous
                future, now is the moment to begin anew and realign our course.
                This calls for novel transformative actions to reclaim the
                world's initial plans in fostering positive changes impartially.
                It is essential not only for navigating the future filled with
                risks and opportunities but also for addressing the persistent
                needs of the present. Progressing into the future, the
                initiative needs the help of not only the government, but also
                the people. Thus, we should stand united and better equipped to
                face the uncertainties of tomorrow.
              </p>
              <br />
              <p>
                With that in mind, JMUN 2024 marks its triumphant return,
                aspiring to underscore the significance of each individual's
                role in shaping the present and tomorrow's world. The conference
                also aims to present a diverse range of perspectives on
                Jakarta's vibrant Betawi culture coupled with engaging
                discussions on pressing global issues. Overall, JMUN 2024
                extends a warm invitation to every delegate, encouraging their
                valuable contributions to Indonesia's most prestigious MUN
                conference, hosted in none other than the cosmopolitan city of
                Jakarta.
              </p>
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-10`}
            >
              TAGLINE
            </h1>
            <div className="p-10 lg:px-40">
              <p className="text-xl md:text-xl lg:text-2xl font-bold pb-2 text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b]">
                - Transforming Tomorrow -
              </p>
              <p>
                To pave the way for a prosperous future, it is important to
                initiate transformative actions today. With that, this process
                begins with each of us. JMUN 2024 aspires to be a platform for
                fostering such positive changes for the future. This commitment
                is strengthened through our tagline, “Transforming Tomorrow,”
                symbolizing our contribution to this new chapter of tomorrow's
                world.
              </p>
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-10`}
            >
              GRAND DESIGN
            </h1>
            <div className="p-10 lg:px-40">
              <p>
                JMUN 2024 aims to promote Jakarta's rich Betawi culture through
                a compelling grand theme and a thoughtfully crafted grand
                design. Well-known for striking colors such as yellow, red,
                pink, and orange, the Betawi culture aligns seamlessly with our
                vision of hosting a vibrant series of events. Moreover, the
                color orange also reflects a warm welcome, embodying our mission
                to embrace delegates from diverse backgrounds, as well as a
                spirit of adventure as we navigate the future, filled with risks
                and opportunities.
              </p>
              <br />
              <p>
                In respect to JMUN 2024's grand design, we have specifically
                chosen orange as its primary color, symbolizing cultural icons
                such as the renowned Ondel-Ondel and the distinctive Jakarta
                transportation, Bajaj. Additionally, JMUN 2024 showcases the
                famous Tumpal Pucuk Rebung batik, along with indigenous flowers
                such as Rasamala, which was found abundantly in the forests of
                Sunda Kelapa. Furthermore, the wavy elements are linked to
                Jakarta's maritime history as one of the centers of trade.
                Overall, JMUN 2024 presents the Betawi culture through
                interconnected elements.{" "}
              </p>
              <br />
              <p>
                These glimpses into the Betawi culture represent only a fraction
                of what JMUN 2024 has prepared! Join us in this remarkable
                journey to discover more of the unique Betawi traditions in
                Jakarta.
              </p>
            </div>
            <h1
              className={`text-4xl md:text-5xl lg:text-7xl text-center text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] font-extrabold mt-10`} ref={grandRef}
            >
              ABOUT ISAFIS
            </h1>
            <div className="p-10 lg:px-40">
              <p>
                Indonesian Student Association for International Studies
                (“ISAFIS”) is a youth-led and non-profit organization formed as
                a medium for youth to exchange ideas, embracing upon
                international issues. ISAFIS has also built collaboration and
                partnership with numerous stakeholders, ranging from fellow
                youth organizations, non-governmental organizations, embassies,
                government institutions, and international organizations to
                support its programs such as Jakarta Model United Nations,
                Indonesia International Week, Jakarta Youth Summit and other
                annual programs. As a youth organization, ISAFIS attempts to
                give many advantages for the youth themselves, as well as for
                the entire community through our programs. Particularly, we try
                to develop important personal and interpersonal skills of the
                members, offer opportunities for them through conferences,
                summits, exchange programs, and involving youth to develop their
                leadership potential, so that as they grow and learn they can
                become thoughtful, prepared leaders of the society. Hence, in
                line with the ISAFIS vision mission statement, we would like to
                develop the members and advance ISAFIS as a leading youth
                organization by facilitating personal growth and development for
                members through a series of integrated programs and activities,
                and building and widening external partnerships with the
                domestic and international institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

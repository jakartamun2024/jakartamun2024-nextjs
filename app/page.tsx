import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import styles from "./styles/styles.module.css";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ImageSlider from "./components/navbar/imageslide";
import ImageSliderMobile from "./components/navbar/imageslide-mobile";

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
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute top-0 left-0 w-full h-screen">
          <Image
            src="/backgrounds/bhi.webp"
            alt="Background Image of Bundaran HI"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            className="lg:hidden"
          />
          <div className="hidden lg:block">
            <Image
              src="/backgrounds/bhi.webp"
              alt="Background Image of Bundaran HI"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        </div>
        <div className={`z-20 ${poppins.className} ${styles.animatesOne}`}>
          <h1
            className={`text-3xl md:text-5xl lg:text-7xl text-center font-extrabold`}
          >
            JAKARTA INTERNATIONAL <br />
            <span>
              <span className="text-[#DF6A26]">MODEL UNITED NATIONS </span>2024
            </span>
          </h1>
          <h2 className={`text-lg md:text-2xl lg:text-3xl text-center`}>
            <span className="animate-pulse">
              23<sup>rd</sup> - 25<sup>th</sup> August 2024
            </span>
            <br /> Hybrid
          </h2>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#F97316] to-[#C2410C] py-16">
        <div className="container mx-auto px-2 md:px-20">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
              <Image
                src="/KimberlyLaurencia.webp"
                alt="Founder's Picture"
                width={300}
                height={300}
                quality={100}
                className="rounded-full mx-auto"
              />
              <h3
                className={`${poppins.className} text-white text-sm mt-4 mb-2`}
              >
                Feel free to reach out to Kimberly Laurencia through:
              </h3>
              <div className="flex flex-col gap-2 justify-center">
                <div className="flex-row flex gap-2 items-center h-5">
                  {" "}
                  <a
                    href="mailto:laurenciakimberly@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      size="sm"
                      className="w-5"
                    />
                  </a>
                  <p className="self-center justify-center align-middle">
                    laurenciakimberly@gmail.com
                  </p>
                </div>

                <div className="flex-row flex gap-2 items-center h-5">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/kimberlylaurencia"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      fontSize={20}
                      className="w-5"
                    />
                  </a>
                  <p>linkedin.com/in/kimberlylaurencia</p>
                </div>
                <div className="flex-row flex gap-2 items-center h-5">
                  {" "}
                  <a
                    href="https://www.instagram.com/kimberlylaurencias"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="sm"
                      className="w-5"
                    />
                  </a>
                  <p className="">@kimberlylaurencias</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 text-justify md:text-left">
              <h2
                className={`${poppins.className} text-5xl font-bold mb-4 underline text-center md:text-left`}
              >
                Welcoming Remarks
              </h2>
              <p
                className={`${poppins.className} text-lg leading-normal mb-4 font-semibold`}
              >
                Greetings Honorable Guests and Distinguished Delegates!
              </p>
              <p className={`${poppins.className} text-lg leading-normal mb-4`}>
                Welcome to the{" "}
                <strong>
                  Jakarta International Model United Nations (&quot;JMUN&quot;)
                  2024
                </strong>
                . My name is Kimberly Laurencia Sanjaya, and it is with great
                honor that I serve as the Secretary-General for the fourteenth
                iteration of JMUN. On behalf of the committees, I extend our
                warmest welcome to all participants of JMUN 2024.
              </p>
              <p className={`${poppins.className} text-lg leading-normal mb-4`}>
                Since 2011, JMUN has been one of the most prestigious MUN
                conferences in Indonesia, gathering more than 300 participants
                from around the world. This year, JMUN is making a triumphant
                return with the grand theme &quot;The Global Enlightenment:
                Advancing Initiatives for A Better Tomorrow&quot; which aims to
                invite everyone to participate in transforming tomorrow.
                Inspired by the vibrant culture of Betawi, we have chosen the
                color orange which not only symbolizes a number of Betawi
                cultural elements but also signifies warmth and welcome.
              </p>
              <p className={`${poppins.className} text-lg leading-normal mb-8`}>
                With 10 councils and an innovative series of events, JMUN 2024
                aims to create an unforgettable experience by presenting
                top-tier academic quality, engaging activities, and warm
                hospitality. Overall, our goal is for every participant to
                create lasting memories together at JMUN 2024.
              </p>
              <p className={`${poppins.className} text-lg leading-normal mb-4`}>
                In short, we express our sincere gratitude to everyone taking
                part in this conference. Let us work together to transform
                tomorrow! See you in August.
              </p>
              <div className="mt-8">
                <p
                  className={`${poppins.className} text-xl font-bold text-white`}
                >
                  Sincerely,
                </p>
                <p
                  className={`${poppins.className} text-lg font-semibold text-white`}
                >
                  Kimberly Laurencia S.
                </p>
                <p className={`${poppins.className} text-base text-white`}>
                  Secretary-General of Jakarta International Model United
                  Nations 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-700 py-16">
        <div className="container mx-auto px-2 md:px-20">
          <h2
            className={`${poppins.className} text-5xl font-bold mb-8 text-center text-white underline`}
          >
            Councils
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    HCC
                  </h3>
                </div>

                <Image
                  src="/council-icon/hcc.webp"
                  alt="HCC Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  The 1957 National Forum: Drafting a New Unity Beyond the
                  Centralized Order
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single -{" "}
                  <span className="bg-red-500 rounded-lg px-2">Advanced</span>
                </span>
                <div></div>
                <Link
                  href="/councils#council-hcc"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    UNSC
                  </h3>
                </div>

                <Image
                  src="/council-icon/UNSC.webp"
                  alt="UNSC Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  The Ocean Dilemmas: Redefining Security within the
                  Indo-Pacific Ocean
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Double -{" "}
                  <span className="bg-red-500 rounded-lg px-2">Advanced</span>
                </span>
                <Link
                  href="/councils#council-unsc"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    UEFA
                  </h3>
                </div>

                <Image
                  src="/council-icon/UEFA.webp"
                  alt="UEFA Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  The Financial Disparities in European Football: Bridging the
                  Gap in Sports
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single -{" "}
                  <span className="bg-yellow-500 rounded-lg px-2">
                    Intermediate
                  </span>
                </span>
                <Link
                  href="/councils#council-uefa"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    WWF
                  </h3>
                </div>

                <Image
                  src="/council-icon/WWF.webp"
                  alt="WWF Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  Blueprint for Blue Waters: Responsibility Sharing Amidst
                  Industrial Water Contamination
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single -{" "}
                  <span className="bg-yellow-500 rounded-lg px-2">
                    Intermediate
                  </span>
                </span>
                <Link
                  href="/councils#council-wwf"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    UNWTO
                  </h3>
                </div>

                <Image
                  src="/council-icon/UNWTO.webp"
                  alt="UNWTO Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  Balancing Profit and Protection: Revisiting Principles of
                  Sustainable Cultural Tourism
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single -{" "}
                  <span className="bg-green-700 rounded-lg px-2">Beginner</span>
                </span>
                <Link
                  href="/councils#council-unwto"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold mb-5`}
                  >
                    UNICEF
                  </h3>
                </div>

                <Image
                  src="/council-icon/UNICEF.webp"
                  alt="UNICEF Logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  Prioritizing the Forthcoming Generation: Protecting Child
                  Rights through Child Friendly Cities
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single -{" "}
                  <span className="bg-green-700 rounded-lg px-2">Beginner</span>
                </span>
                <Link
                  href="/councils#council-unicef"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    NATO
                  </h3>
                </div>

                <Image
                  src="/council-icon/NATO.webp"
                  alt="NATO Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  An International Domain?: Security Expansion in the Arctic
                  Ocean
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Online - Double -{" "}
                  <span className="bg-yellow-500 rounded-lg px-2">
                    Intermediate
                  </span>
                </span>
                <Link
                  href="/councils#council-nato"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    UNHRC
                  </h3>
                </div>

                <Image
                  src="/council-icon/UNHRC.webp"
                  alt="UNHRC Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  A Beneficial Bias?: Identity-Based Discrimination in Criminal
                  Justice Systems
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Online - Single -{" "}
                  <span className="bg-green-700 rounded-lg px-2">Beginner</span>
                </span>
                <Link
                  href="/councils#council-unhrc"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    ILO
                  </h3>
                </div>

                <Image
                  src="/council-icon/ILO.webp"
                  alt="ILO Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <p
                  className={`${poppins.className} text-base font-semibold mb-2 text-center`}
                >
                  Adjusting to the Emergence of Automation Into the Knowledge
                  and Creative Industry
                </p>
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Online - Single -{" "}
                  <span className="bg-green-700 rounded-lg px-2">Beginner</span>
                </span>
                <Link
                  href="/councils#council-ilo"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
            {/* === */}
            <div className="bg-gradient-to-br from-[#DF6A26] to-[#f55789] rounded-lg p-6 flex flex-col h-full col-start-2">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2 px-2 rounded-lg">
                  {" "}
                  <h3
                    className={`${poppins.className} text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] text-2xl font-bold`}
                  >
                    PRESS
                  </h3>
                </div>

                <Image
                  src="/council-icon/PRESS.webp"
                  alt="PRESS Logo"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-grow flex flex-col justify-end items-center">
                <span
                  className={`${poppins.className} text-sm italic text-center`}
                >
                  Offline - Single
                </span>
                <Link
                  href="/councils#council-press"
                  className="mt-2 font-bold rounded-md px-2 hover:text-[#03070C] transition-colors duration-300 ease-in-out hover:bg-[#faca6b]"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#C2410C] to-[#F97316] py-10 h-full flex-row items-end pb-20">
        <h2
          className={`${poppins.className} text-5xl font-bold mb-8 text-center text-white underline`}
        >
          JMUN 2023
        </h2>
        <div className="hidden md:block">
          <ImageSlider />
        </div>
        <div className="md:hidden">
          <ImageSliderMobile />
        </div>
      </div>
    </div>
  );
}

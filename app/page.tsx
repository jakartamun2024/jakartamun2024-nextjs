import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import styles from "./styles/styles.module.css";

import { Poppins } from "next/font/google";

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
      <div className="w-full h-screen flex items-center justify-center">
        <div className="absolute min-h-fit h-screen w-screen">
          <Image
            src="/backgrounds/bhi.jpg"
            alt="Background Image of Bundaran HI"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            className="lg:hidden"
          />
          <div className="hidden lg:block">
            <Image
              src="/backgrounds/bhi.jpg"
              alt="Background Image of Bundaran HI"
              fill
              style={{ objectFit: "cover" }}
              quality={100}
            />
          </div>
        </div>
        <div
          className={`z-20 fixed  ${poppins.className} ${styles.animatesOne}`}
        >
          <h1
            className={`text-3xl md:text-5xl lg:text-7xl text-center font-extrabold`}
          >
            JAKARTA INTERNATIONAL
            <br />
            <span>
              <span className="text-[#DF6A26] ">MODEL UNITED NATIONS </span>2024
            </span>
          </h1>
          <h2 className={`text-lg md:text-2xl lg:text-3xl text-center`}>
            <span className="animate-pulse">
              23<sup>rd</sup> - 25<sup>th</sup> August 2024
            </span>
            <br />
            Hybrid
          </h2>
        </div>
        <div className="absolute bottom-4 z-50 font-semibold">
          <p>
            Photo by{" "}
            <a href="https://unsplash.com/@madebyekhrwntro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Eko Herwantoro
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/park-with-fountain-near-buildings-mAxA2OmTmKA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

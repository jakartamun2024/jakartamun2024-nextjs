import { Poppins } from "next/font/google";

import Image from "next/image";
import NavBar from "../components/navbar/navbar";
import CouncilsList from "./sections/councils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function CouncilPage() {
  return (
    <div>
      <nav className="w-full top-0 z-50">
        <NavBar />
      </nav>
      <div className="w-full h-fit pt-[90px]">
        <div className="relative w-full h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <h1 className={`text-7xl font-bold relative ${poppins.className}`}>
            Councils
          </h1>
        </div>
      </div>
      <div className="w-full h-full">
        <CouncilsList />
      </div>
    </div>
  );
}

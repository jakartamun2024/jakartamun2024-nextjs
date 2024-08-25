"use client";

import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface newsCardProps {
  author: string;
  title: string;
  desc: string;
  link: string;
  image: string;
  date: string;
}

export default function News({
  author,
  title,
  desc,
  link,
  image,
  date,
}: newsCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-t-1 md:border-1 group bg-none pt-6 md:pt-2 md:bg-white md:bg-opacity-30 hover:bg-[#c65102] hover:text-white h-fit text-white md:text-black md:rounded-2xl flex flex-row gap-2 md:divide-x-1 items-center p-2 transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div className="relative w-32 h-32 hidden md:block">
        <Image
          src={image}
          fill
          className="object-cover rounded-lg"
          alt={title}
        />
      </div>
      <div className="flex-1 pl-2">
        <h1
          className={`text-2xl line-clamp-1 pb-1 text-start md:pb-0 md:leading-normal ${dmSerif.className}`}
        >
          {title}
        </h1>
        <p className="line-clamp-3 text-sm md:leading-normal">{desc}</p>
        <div className="flex flex-row justify-between pt-2 text-xs items-end">
          <div>
            <p className="line-clamp-1">{date}</p>
            <p className="line-clamp-1 text-sm">{author}</p>
          </div>
          <p className="hidden group-hover:block font-bold">Read more..</p>
        </div>
      </div>
    </a>
  );
}

"use client";

import Image from "next/image";

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
      className="group bg-none hover:bg-[#f5f7c0] h-fit text-white rounded-2xl flex flex-row p-2 transition duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div className="flex-1 overflow-hidden">
        <p className="line-clamp-1 text-sm pb-3">{author}</p>
        <h1 className="text-lg font-extrabold line-clamp-2">{title}</h1>
        {/* <p className="line-clamp-3">{desc}</p> */}
        <div className="flex flex-row justify-between pt-5 text-xs">
          <p className="line-clamp-1">{date}</p>
          <p className="hidden group-hover:block">Read more..</p>
        </div>
      </div>
      {/* <div className="relative w-32 h-32">
        <Image src={image} fill className="object-contain" alt={title} />
      </div> */}
    </a>
  );
}

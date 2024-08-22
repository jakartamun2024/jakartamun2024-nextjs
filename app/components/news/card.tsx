"use client";

import Image from "next/image";

interface newsCardProps {
  author: string;
  title: string;
  desc: string;
  link: string;
  image: string;
  date:string;
}

export default function News({
  author,
  title,
  desc,
  link,
  image,
  date
}: newsCardProps) {
  return (
    <a
      href={link}
      className="bg-[#f3f5d8] h-52 text-gray-900 rounded-md flex flex-row p-2"
    >
      <div className="pr-5 flex-1 overflow-hidden">
        <p className="line-clamp-1">{author}</p>
        <h1 className="text-lg font-bold line-clamp-2">{title}</h1>
        <p className="line-clamp-3">{desc}</p>
        <p className="line-clamp-5 pt-3 text-sm">{date}</p>
      </div>
      <div className="relative w-32 h-32">
        <Image src={image} fill className="object-contain" alt={title} />
      </div>
    </a>
  );
}

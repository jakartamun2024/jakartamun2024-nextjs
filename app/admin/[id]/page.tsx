'use client';
import Image from 'next/image';
import NavBar from '../../ui/navbar/navbar';
import Section1 from './ui/sections/section1';

import { useParams, useRouter } from 'next/navigation';
export default function Home() {
    const params = useParams();
  return (
    <div>
      <nav className="w-full top-0 fixed z-50">
        <NavBar />
      </nav>
      <div className="w-full h-full lg:pt-[7rem] pt-[6rem] p-3 grid grid-cols-1 gap-4">
        <Section1 />        
      </div>
    </div>
  );
}

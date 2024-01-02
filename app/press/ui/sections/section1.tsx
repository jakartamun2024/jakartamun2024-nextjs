import React from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../../ui/navbar/registrationdropdown';
import News from './news';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'] })

function Section1() {
  return (
    <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>
      <p className={`text-[#b23727] ${openSans.className} text-md pt-3`}></p>
      <News></News>
    </div>
  )
}

export default Section1
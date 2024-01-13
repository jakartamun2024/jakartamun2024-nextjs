import React from 'react'
import { DM_Serif_Text, Open_Sans, Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../navbar/registrationdropdown';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400', display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })

function Section1() {
  return (
    <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>
      <div className='flex flex-1 basis-3/6 flex-col p-4'>
        <p className={`text-[#b23727] ${dmSerif.className} lg:text-6xl md:text-5xl text-5xl`}>Jakarta International Model United Nations</p>
        <p className={`text-[#6D271F] ${openSans.className} text-md pt-3`}>The Jakarta International Model United Nations (JMUN), organized by Indonesia Student Association for International Studies (ISAFIS) has earned global recognition a reputation as the leading and renowned MUN conference.</p>
        <div className='pt-10 lg:flex hidden flex-row'>
          <button className={`${bodoni.className} text-md text-[#b23727] border-2 border-[#b23727] rounded-full p-1 px-4 hover:scale-105`} >
            About Us
          </button>
          <div className={`text-md ${bodoni.className} ms-3`}>
            <RegisterDropdown isNav={false} />
          </div>
          {/* <button className={`${bodoni.className} text-md text-white border-2 border-[#f55789] bg-[#f55789] rounded-full p-2 px-4 hover:scale-105 ms-3`} >
            Register Now
          </button> */}
        </div>
      </div>
      <div className='lg:flex hidden lg:basis-1/6 justify-self-end self-end mt-3'>
        <Image src="/monas.png" alt='monas' quality={100} width={230} height={100} />
      </div>
      <div className='flex flex-1 basis-2/6 p-4'>
        <div className='flex flex-col'>
          <p className={`lg:text-[#f3f5d8] text-[#b23727] ${dmSerif.className} lg:text-5xl md:text-4xl text-3xl`}>JMUN Over the Years</p>
          <div className="flex flex-row mt-5 lg:text-[#f3f5d8] text-[#b23727]">
            <div>
              <p className={`${dmSerif.className}`}>over</p>
              <p className={`lg:text-6xl text-5xl ${dmSerif.className}`}>400+</p>
              <p className={`${dmSerif.className}`}>registrants</p>
            </div>
            <div className='ms-5'>
              <p className={`${dmSerif.className}`}>from</p>
              <p className={`lg:text-6xl text-5xl ${dmSerif.className}`}>18</p>
              <p className={`${dmSerif.className}`}>countries</p>
            </div>
          </div>

        </div>

      </div>
      <div className='p-4 lg:hidden'>
        <button className={`${bodoni.className} text-md text-[#b23727] border-2 border-[#b23727] rounded-full p-1 px-4 hover:scale-105`} >
          About Us
        </button>
        <div className={`text-md ${bodoni.className} mt-3`}>
          <RegisterDropdown isNav={false} />
        </div>
        {/* <button className={`${bodoni.className} lg:text-lg md:text-md sm:text-sm text-sm text-white border-2 border-[#f55789] bg-[#f55789] rounded-full p-2 px-4 hover:scale-105 ms-3`} >
          Register Now
        </button> */}
      </div>
    </div>
  )
}

export default Section1
import React from 'react'
import Image from 'next/image';
import { Bodoni_Moda, Open_Sans } from 'next/font/google';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })


function SpeakerCard({ name, description, imageUrl }: { name: string, description: string, imageUrl: string }) {
    return (

        <div className='bg-none p-2 lg:w-[178px] md:w-[168px] w-[150px] text-wrap break-words lg:h-[336px] md:h-[336px] h-[310px] flex flex-col drop-shadow-md'>
            <div className='bg-gradient-to-br  from-[#F36A9D] via-[#dc7030] to-[#faca6b] p-[0.2rem] rounded-full'>
                <Image src={imageUrl} alt='monas' quality={100} width={188} height={188} className='rounded-full border border-[#b23727] object-cover' />
            </div>

            <div className='p-2 h-full grid grid-cols-1 text-center'>
                <p className={`text-[#6D271F] ${bodoni.className} lg:text-md md:text-md text-sm text-center h-[4.5rem]`}>{name}</p>
                <p className={`text-[#6D271F] ${openSans.className} lg:text-sm mt-3 text-xs h-16`}>{description}</p>
            </div>

        </div>
    )
}

export default SpeakerCard
import React from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import { sponsors, medias } from './constant';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400', display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })

function Section4() {
    return (
        <div className='pt-10 mb-10'>
            <div className='bg-gradient-to-br from-[#b23727] via-[#dc7030] via-10% to-[#faca6b] lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] rounded-xl justify-self-center flex flex-col mx-auto p-1'>
                <div className='bg-gradient-to-br from-[#F36A9D] via-[#FFD0CF] via-30% to-[#FAD489] rounded-lg'>
                    <div className='bg-gradient-to-b from-[#faca6b] to-[#F36A9D] w-min mx-auto rounded-xl mt-3 mb-8 shadow-md'>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] w-min text-nowrap p-3 px-4 mx-auto ${dmSerif.className} md:text-4xl text-3xl text-center`}>Our Previous Partners</p>
                    </div>
                    <div className='justify-items-center items-center'>
                        <div className='bg-gradient-to-b from-[#faca6b] to-[#F36A9D] w-min mx-auto rounded-xl shadow-md'>
                            <p className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] w-min text-nowrap p-1 px-3 mx-auto ${dmSerif.className} md:text-2xl text-xl text-center`}>Sponsors</p>
                        </div>

                        <div className='flex flex-wrap justify-center justify-items-center mx-3'>
                            {sponsors.map((val, index) => (
                                <div className='self-center m-3'>
                                    <Image src={`/sponsors/${val}`} width={110} height={110} className='object-cover' alt={val} key={index} />
                                </div>
                            ))}
                        </div>
                        <div className='bg-gradient-to-b from-[#faca6b] to-[#F36A9D] w-min mx-auto rounded-xl shadow-md my-5'>
                            <p className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] w-min text-nowrap p-1 px-3 mx-auto ${dmSerif.className} md:text-2xl text-xl text-center`}>Media Partners</p>
                        </div>
                        <div className='flex flex-wrap justify-center justify-items-center mx-3'>
                            {medias.map((val, index) => (
                                <div className='self-center m-3'>
                                    <Image src={`/media-partners/${val}`} width={110} height={110} className='object-scale-down' alt={val} key={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
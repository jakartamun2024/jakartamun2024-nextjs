import React from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import { speakers } from './constant';
import SpeakerCard from './speakercard';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400', display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })

function Section3() {
    return (
        <div className='pt-10'>
            <div className='bg-gradient-to-br from-[#b23727] via-[#dc7030] via-10% to-[#faca6b] lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] rounded-xl justify-self-center flex flex-col mx-auto p-1'>
                <div className='bg-[#f3f5d8] rounded-lg pb-4'>
                    <div className='bg-gradient-to-b from-[#faca6b] to-[#F36A9D] w-min mx-auto rounded-xl mt-3 shadow-md'>
                        <p className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] w-min text-nowrap p-3 px-4 mb-3 mx-auto ${dmSerif.className} md:text-4xl text-3xl text-center`}>Previous Speakers</p>
                    </div>

                    <div className='justify-items-center items-center'>
                        <div className='grid lg:flex lg:flex-wrap md:grid-cols-3 grid-cols-2 items-center gap-5 py-5 px-5 justify-items-center mx-auto lg:w-auto md:w-[600px] lg:content-center lg:justify-center'>
                            {speakers.map(({ name, desc, imageUrl }, index) => (
                                <SpeakerCard name={name} description={desc} key={index} imageUrl={imageUrl} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section3
import React from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import CouncilCard from './councilcard';
import { councils } from './constant';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400', display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })


function Section2() {
    return (
        <div className='pt-10'>
            <div className='bg-[#f3f5d8] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] rounded-xl shadow-medium justify-self-center flex flex-col mx-auto pb-3'>
                <p className={`text-[#f3f5d8] bg-[#b23727] w-min rounded-tl-xl rounded-br-xl p-3 ${dmSerif.className} md:text-4xl text-3xl text-center`}>Councils</p>
                <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 m-4 items-center justify-items-center gap-5'>
                    {councils.map(({ name, desc }, index) => (
                        <CouncilCard name={name} description={desc} key={index} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Section2
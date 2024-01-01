import React from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'] })


function Section2() {
    return (
        <div className='pt-10'>
            <div className='bg-[#f3f5d8] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] rounded-xl border border-[#b23727] justify-self-center flex flex-col mx-auto'>
                <p className={`text-[#f3f5d8] bg-[#b23727] w-min rounded-tl-lg rounded-br-xl p-3 ${dmSerif.className} md:text-4xl text-3xl text-center`}>Councils</p>
                <div className='grid grid-cols-5'>

                </div>
            </div>
        </div>

    )
}

export default Section2
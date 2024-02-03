import { Bodoni_Moda, DM_Serif_Text, Open_Sans } from 'next/font/google'
import React from 'react'
import Image from 'next/image';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400', display: "swap" })
const openSans = Open_Sans({ subsets: ['latin'], display: "swap" })

function Section1() {
    return (
        <div>
            <div className='bg-gradient-to-b from-[#faca6b] to-[#F36A9D] lg:w-min w-full mx-auto rounded-xl my-3 mb-6 shadow-md'>
                <p className={`text-transparent bg-clip-text bg-gradient-to-b drop-shadow-md from-white to-[#faca6b] lg:text-nowrap p-3 px-4 mx-auto ${dmSerif.className} md:text-4xl text-3xl text-center`}>About Jakarta Model United Nations</p>
            </div>
            <div className='lg:w-1/2 w-3/4 mx-auto'>
                <p className={`${openSans.className} text-md`}>
                    Jakarta Model United Nations (JMUN) is the biggest International Model United Nations (MUN) in Indonesia which first-ever held in the capital city of Republic of Indonesia, Jakarta, by ISAFIS in 2011.
                </p>
                <div className='mx-auto my-4'>
                    <div className='lg:w-24 lg:h-24 md:w-16 md:h-16 sm:h-12 sm:w-12 h-12 w-12 relative inline-block'>
                        <Image
                            src="/jmun-logo.png"
                            alt="JMUN logo"
                            fill
                        />
                    </div>
                    <div className='lg:w-[12rem] lg:h-24 md:w-[8.5rem] md:h-14 sm:w-[8rem] sm:h-12 w-[8rem] h-12 ms-4 relative inline-block'>
                        <Image
                            src="/jmun2024-title.svg"
                            alt="JMUN2024"
                            fill
                        />
                    </div>
                </div>

                <p className={`${openSans.className} text-md`}>
                    Jakarta MUN offers the opportunity to experience the challenges of international negotiation and diplomacy. In Jakarta MUN, participants will act as a representative from the particular country then discuss international issues like the process that occurs at a UN conference. Throughout the conference, delegates will gain insight into the workings of the United Nations by actively participating in the resolution of important global issues.
                </p>
                <div className='my-4'>
                    <div className='lg:w-[27rem] lg:h-[18rem] md:w-[8.5rem] md:h-14 sm:w-[8rem] sm:h-12 w-[8rem] h-12 relative inline-block'>
                        <Image
                            src="/first-jmun.png"
                            alt="First JMUN conference"
                            fill
                        />
                    </div>
                    <p>The 1st Jakarta Model United Nations (2011)</p>
                </div>
                <p className={`${openSans.className} text-md`}>
                    The first session of the Jakarta MUN was held in 2011. Jakarta MUN 2011 successfully attracted more than 300 delegates ranging from local universities to foreign universities. It marked a new era for MUN conferences in Indonesia. Since then, Jakarta MUN is held annually. Eight sessions of Jakarta MUN have successfully brought changes for youth in spreading the ideas and values of diplomacy as well as developing knowledge of the issues. This has made Jakarta MUN an international phenomenon. Jakarta MUN itself has many programs besides the conferences, such as the MUN 101, cultural and charity ball, and social night.
                </p>
                <br />
                <p className={`${openSans.className} text-md`}>
                    Years after it was first held. now Jakarta MUN has become one of the most prestigious events in the international MUN community. Jakarta MUN participants do not only hail from major cities in Indonesia, but also from various countries like USA, UK, India, New Zealand, Australia, Malaysia, Singapore, Laos, Philippines, Thailand, Ghana and many more.
                </p>


            </div>

        </div>

    )
}

export default Section1
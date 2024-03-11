'use client';
import Link from 'next/link';
import React, { MouseEventHandler, useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Image from 'next/image';
import { Bodoni_Moda } from 'next/font/google';
import { tabs } from './constant';
import RegisterDropdown from './registrationdropdown';
import AboutDropdown from './aboutdropdown';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"], display: "swap" })

function NavBarBody(props: any) {


    return (
        <div className={`w-full flex justify-between items-center z-50 ${bodoni.className}`}>
            <Link href={'/'}>
                <div className='lg:w-16 lg:h-16 md:w-14 md:h-14 sm:h-12 sm:w-12 h-12 w-12 relative inline-block'>
                    <Image
                        src="/jmun-logo.png"
                        alt="JMUN logo"
                        fill
                    />
                </div>
                <div className='lg:w-[9.5rem] lg:h-16 md:w-[8.5rem] md:h-14 sm:w-[8rem] sm:h-12 w-[8rem] h-12 ms-4 relative inline-block'>
                    <Image
                        src="/jmun2024-title.svg"
                        alt="JMUN2024"
                        fill
                    />
                </div>
            </Link>

            <div className="hidden lg:flex text-white gap-12">
                <div className="flex">
                    <div className='my-auto cursor-pointer'>
                        <AboutDropdown aboutRef={props.aboutRef} grandRef={props.grandRef} />
                    </div>
                </div>
                {tabs.map(({ url, label }, index) => (
                    <Link href={url} key={index} className='flex'>
                        <p className="text-lg no-underline hover:scale-105 cursor-pointer my-auto">
                            {label}
                        </p>

                    </Link>
                ))}
                <div className="flex">
                    <div className='my-auto'>

                        <RegisterDropdown isNav={true} />
                    </div>
                </div>
            </div>



            <button className="lg:hidden md:text-2xl sm:text-2xl text-xl my-auto text-white" onClick={props.handleCollapse}>
                {props.isCollapsed ? <LuMenu /> : <LuX />}
            </button>

        </div>
    )

}

export default NavBarBody
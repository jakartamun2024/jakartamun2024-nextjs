import React from 'react';
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../../ui/navbar/registrationdropdown';
// import News from './news';
import './newscard.css';

// Define the interface for additional props
interface NewsCardProps {
    title: string;
    link_image: string;
    link: string;
}

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] });
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' });
const openSans = Open_Sans({ subsets: ['latin'] });

// Use the additional props in the function
function NewsCard({ title, link_image, link }: NewsCardProps) {
    return (
        // <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>
        <div className='newsCardDiv'>
            <a href={link} className='newsCard'>
                <img src={link_image} alt=""  className='newsImage'/>
                <p className='newsTitle'>{title}</p>
            </a>
        </div>
        // </div>
    );
}

export default NewsCard;

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
        <a href={link} className='newsCard'>
            <div className='newsCardSection'>
                <img src={link_image} alt="" className='newsImage' />
                <p className='newsTitle'>{title}</p>
            </div>
        </a>
    );
}

export default NewsCard;

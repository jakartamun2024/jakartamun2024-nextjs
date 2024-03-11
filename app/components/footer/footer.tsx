import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from './constant';
import Link from 'next/link';
function Footer() {
    return (
        <div className='grid lg:grid-cols-5 grid-cols-2  lg:justify-self-center bg-[#dc7030] p-3 text-white'>
            {links.map(({ icon, text, url }, index) => (
                <Link href={`${url}`} key={index}>
                    <div className='flex flex-row mx-2 lg:mt-2 my-3'>
                        <FontAwesomeIcon icon={icon} className='' fontSize={20} />
                        <p className='text-sm ms-1'>{text}</p>
                    </div>
                </Link>
            ))}
        </div>

    )
}

export default Footer
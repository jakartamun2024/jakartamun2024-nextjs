import React, { useState, useEffect } from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../../ui/navbar/registrationdropdown';
import News from './news';
import NewsCard from '../components/newscard';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'] })


interface PressItem {
  image_link: string;
  title: string;
  link:string;
  // Add other properties if applicable
}



function Section1() {

  const [data, setData] = useState<PressItem[] | null>(null);
  const [forceFetch, setForceFetch] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/admin-page/get-press/?forceFetch=${forceFetch}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData: PressItem[] = await res.json();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, []); // Add forceFetch as a dependency to trigger re-fetch when it changes

  useEffect(() => {
    // Set up an interval to trigger the fetch every 1 minute
    const intervalId = setInterval(() => {
      setForceFetch((prevForceFetch) => prevForceFetch + 1);
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>
      {/* <p className={`text-[#b23727] ${openSans.className} text-md pt-3`}> kontol</p> */}
      {data ? (
        data.map((item: PressItem, index: number) => (
          <NewsCard  link={item.link} link_image={item.image_link} title={item.title}/>
        ))
      ) : (
        <main>Loading...</main>
      )}
    </div>
  )
}

export default Section1
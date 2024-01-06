import React, { useState, useEffect } from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../../ui/navbar/registrationdropdown';
import News from './news';
import NewsCard from '../components/newscard';
import './section1.css';
import LoaderComp from '@/app/ui/components/loader';
import Link from 'next/link';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'] })


interface PressItem {
  image_link: string;
  title: string;
  link: string;
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
  }, [forceFetch]); // Add forceFetch as a dependency to trigger re-fetch when it changes

  useEffect(() => {
    // Set up an interval to trigger the fetch every 1 minute
    if (!data) {
      const intervalId = setInterval(() => {
        setForceFetch((prevForceFetch) => prevForceFetch + 1);
      }, 600); // 60000 milliseconds = 1 minute
      return () => clearInterval(intervalId);
    }

    // Clear the interval on component unmount to avoid memory leaks
  }, [data]);

  const data2 = [
    { id : 1,  delegation: "Subham1", fullname: 25, email: "Male", payment: "Not Approved" },
    { id: 2,  delegation: "Subham2", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 3, delegation: "Subham3", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 4, delegation: "Subham4", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 5, delegation: "Subham5", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 6, delegation: "Subham6", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 7, delegation: "Subham7", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 8, delegation: "Subham8", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 9, delegation: "Subham9", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 10, delegation: "Subham10", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 11, delegation: "Subham11", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 12, delegation: "Subham12", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 13, delegation: "Subham13", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 14, delegation: "Subham14", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 15, delegation: "Subham15", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 16, delegation: "Subham16", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 17, delegation: "Subham17", fullname: 25, email: "Male", payment: "Not Approved" },
    {id : 18, delegation: "Subham18", fullname: 25, email: "Male", payment: "Not Approved" },

  ]
  return (
    <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>      {/* <p className={`text-[#b23727] ${openSans.className} text-md pt-3`}> kontol</p> */}
      <div className="App">
        <div className="tableFixHead">

          <table>
            <thead>
              <tr>
                <th>Delegation</th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Payment</th>

              </tr>
            </thead>
            <tbody>
              {data2.map((val, key) => {
                return (
                  <tr key={key}>
                    <td><Link href={`admin/${val.id.toString()}`}>{val.delegation}</Link></td>
                    <td><Link href={`admin/${val.id.toString()}`}>{val.fullname}</Link></td>
                    <td><Link href={`admin/${val.id.toString()}`}>{val.email}</Link></td>
                    {val.payment == "Approved"
                      ? <td><Link className='approved' href={`admin/${val.id.toString()}`}>{val.payment}</Link></td>
                      : val.payment == "Not Approved"
                        ? <td><Link className='notApproved' href={`admin/${val.id.toString()}`}>{val.payment}</Link></td>
                        : <td><Link className='pending' href={`admin/${val.id.toString()}`}>{val.payment}</Link></td>
                    }


                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Section1
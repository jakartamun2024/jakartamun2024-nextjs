import React, { useState, useEffect } from 'react'
import { DM_Serif_Text, Open_Sans } from 'next/font/google';
import { Bodoni_Moda } from 'next/font/google';
import Image from 'next/image';
import RegisterDropdown from '../../../../ui/navbar/registrationdropdown';
import './section1.css';
import LoaderComp from '@/app/ui/components/loader';
import Link from 'next/link';

const bodoni = Bodoni_Moda({ weight: "500", subsets: ["latin"] })
const dmSerif = DM_Serif_Text({ subsets: ['latin'], weight: '400' })
const openSans = Open_Sans({ subsets: ['latin'] })


interface PressItem {
  full_name_delegate: string,
  email: string,
  status: string,
  institution: string,
  nationality: string,
  age: number,
  contact_number: string,
  line_id: string,
  first_council_preference: string,
  country_first_council: string,
  second_council_preference: string,
  country_second_council: string,
  third_council_preference: string,
  country_third_council: string,
  previous_mun_experience: string,
  dietary_restriction: string,
  special_medical_condition: string,
  accom_status: string,
  proof_of_transfer: string,
}
// Add other properties if applicable

import { useParams, useRouter } from 'next/navigation';
import InformationText from '../components/informationcard';




function Section1() {
  const params = useParams();

  const [data, setData] = useState<PressItem | null>(null);
  const [forceFetch, setForceFetch] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/admin-page/get-detail/?forceFetch=${forceFetch}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData: PressItem = await res.json();
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

  return (
    <div className='bg-[#f3f5d8] lg:bg-gradient-to-r lg:from-[#f3f5d8] lg:from-30% lg:to-[#dc7030] lg:to-70% lg:w-[85%] md:w-[85%] sm:w-[95%] w-[95%] min-h-96 rounded-xl border border-[#b23727] justify-self-center flex lg:flex-row flex-col'>      {/* <p className={`text-[#b23727] ${openSans.className} text-md pt-3`}> kontol</p> */}
      <div className='container'>

        {data
          ? <div className='informationBox'>

            <InformationText type={'text'} label='ID' information={params.id.toString()}  ></InformationText>
            <InformationText type={'text'} label='Fullname delegation' information={data.full_name_delegate.toString()} ></InformationText>
            <InformationText type={'text'} label='Email' information={data.email.toString()} ></InformationText>
            <InformationText type={'text'} label='Status' information={data.status.toString()} ></InformationText>
            <InformationText type={'text'} label='Institution' information={data.institution.toString()} ></InformationText>
            <InformationText type={'text'} label='Nationality' information={data.nationality.toString()} ></InformationText>
            <InformationText type={'text'} label='Age' information={data.age.toString()} ></InformationText>
            <InformationText type={'text'} label='Contact Number' information={data.contact_number.toString()} ></InformationText>
            <InformationText type={'text'} label='Line ID' information={data.line_id.toString()} ></InformationText>
            <InformationText type={'text'} label='First Council Preference' information={data.first_council_preference.toString()} ></InformationText>
            <InformationText type={'text'} label='Second Council Preference' information={data.second_council_preference.toString()} ></InformationText>
            <InformationText type={'text'} label='Third Council Preference' information={data.third_council_preference.toString()} ></InformationText>
            <InformationText type={'text'} label='Previous MUN Experience' information={data.previous_mun_experience.toString()} ></InformationText>
            <InformationText type={'text'} label='Dietary Restriction' information={data.dietary_restriction.toString()} ></InformationText>
            <InformationText type={'text'} label='Special Medical Condition' information={data.special_medical_condition.toString()} ></InformationText>
            <InformationText type={'text'} label='Accommodation Status' information={data.accom_status.toString()} ></InformationText>
            <InformationText type={'image'} label='Proof of Transfer' information={data.proof_of_transfer.toString()} ></InformationText>
            <div className='buttonsContainer'>
              <a href="" className='disapproveBtn'>Dissaprove</a>
              <a href="" className='approveBtn'>Approve</a>

            </div>
          </div>

          : <main><LoaderComp></LoaderComp></main>


        }
      </div>
    </div>
  )
}

export default Section1
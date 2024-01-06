'use client';
import './informationcard.css';

type Props = {
  label: string;
  information: string;
  type: string;
};
export default function InformationText({ type, label, information }: Props) {
  if (type == "text") {
    return (
      <div className='infromationContainer'>
        <div className='informationList'>
          <p className='labelText'>{label}: </p>
          <p className='informationText'>{information}</p>
        </div>
      </div>
    );
  } else {
    return (

    <div className='infromationContainer'>
      <div className='informationList'>
        <p className='labelText'>{label}: </p>
        <img className='informationText' src={information}></img>
      </div>
    </div>
    )
  }
}

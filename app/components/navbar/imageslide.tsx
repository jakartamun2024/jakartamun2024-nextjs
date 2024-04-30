'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-right`}
      style={{
        ...style,
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'bg-orange-700',
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-left`}
      style={{
        ...style,
        position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        background: 'bg-orange-700',

      }}      
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ImageSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <PrevArrow/>,
    prevArrow: <NextArrow/>,
    initialSlide:0,
    swipeToSlide:true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />
        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />
        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
        <div>
          <Image
            src="/KimberlyLaurencia.png"
            alt="Founder's Picture"
            width={300}
            height={300}
            quality={100}
            className="full mx-auto"
          />        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
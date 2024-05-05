"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-right`}
      style={{
        ...style,
        position: "absolute",
        zIndex: 1,
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent black background
        borderRadius: "50%", // Make the background circular
        width: "40px", // Set the width of the arrow container
        height: "40px", // Set the height of the arrow container
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="white" // Change the arrow color to white
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

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-left`}
      style={{
        ...style,
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a semi-transparent black background
        borderRadius: "50%", // Make the background circular
        width: "40px", // Set the width of the arrow container
        height: "40px", // Set the height of the arrow container
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="white" // Change the arrow color to white
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

function ImageSliderMobile() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-full">
      <div className="relative w-full">
        <style jsx>{`
          .slider-item {
            transition: transform 0.3s ease;
          }
          .slider-item.slick-center {
            transform: scale(1.2);
            z-index: 1;
          }
        `}</style>
        <Slider {...settings}>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/1.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/2.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/3.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>{" "}
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/4.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/5.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/6.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/7.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/8.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/9.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
          <div className="py-3 slider-item outline-none">
            <Image
              src="/documentation/10.webp"
              alt="JMUN 2023 Documentations"
              width={640}
              height={360}
              quality={100}
              className="mx-auto rounded-3xl py-1 px-1"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImageSliderMobile;

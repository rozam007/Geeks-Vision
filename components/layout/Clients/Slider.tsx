"use client";

import React, { useState } from "react";
import { ClientProps } from "@/types";
import Image from "next/image";
import quote from "/public/left-quote.svg";
//  Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";

import styles from "./Client.module.css";
import "swiper/css";
import "swiper/css/bundle";

const Slider: React.FC<ClientProps> = ({ entries, changeSlide }) => {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <div className={styles.swiper}>
      {/* swiper wraper */}

      <Swiper
        modules={[ Autoplay, Virtual ]}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={true}
        virtual
        speed={2000}
        onSwiper={changeSlide}
        onSlideChange={(swiper) =>
          setActiveSlide(entries[swiper.activeIndex].id)
        }
        className={styles.swiperWrapper}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
      >
        {/* Swiper Slide  */}

        {entries.map((item) => (
          <SwiperSlide
            key={item.id}
            className={` 
               ${styles.swiperSlide}      
              ${activeSlide > item.id ? styles.prev : ""}
              ${activeSlide < item.id ? styles.next : ""} 
              `}
          >
            <div className={`flex flex-col items-center justify-center`}>
              {/*  Card */}
              <div className={`${styles.clientCard}`}>
                {/* quote icon */}
                <div className="absolute left-1/2 top-0 transition-[.35s]">
                  <Image src={quote} alt="quote-icon" />
                </div>
                {/* Title Heading */}
                <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[23px]">
                  <div className=""></div>

                  {/* Stars */}
                  <div className="flex">
                    {Array(item.rating)
                      .fill("")
                      .map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.127 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.54 1.118l-3.127-2.27a1 1 0 00-1.176 0l-3.127 2.27c-.784.57-1.838-.197-1.54-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.34 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z"></path>
                        </svg>
                      ))}
                  </div>
                </div>
                {/* Main  paragraph */}
                <div className="mb-7">
                  <p
                    className="line-clamp-3 break-words leading-[1.5] text-gray-300 text-base transition-all duration-300 ease-in-out hover:line-clamp-none"
                    title={item.paragraph.length > 150 ? item.paragraph : ""}
                  >
                    {item.paragraph}
                  </p>
                </div>
                {/* Card footer  */}
                <div className="flex justify-between flex-wrap gap-[10px]">
                  {/* title text  */}
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-[23px] leading-[20px] text-grayColor mb-0">
                      {item.name}
                    </h4>
                    <span className="font-normal text-[16px] leading-[20px] tracking-[.02em] text-themeColor ">
                      {item.company}
                    </span>
                  </div>
                  {/* Date & Time  */}
                  <div className="text-start sm:text-end mt-2 sm:mt-0">
                    <p className="font-normal text-[15px] text-right text-whiteColor mb-0 leading-[1]">
                      {item.date}
                    </p>
                    <span className="font-normal text-xs text-right text-whiteColor opacity-[.5]">
                      {item.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Avatar Image  */}
              {/* <div>
                {activeSlide === item.id ? (
                  <Image
                    src={item.userimage}
                    alt="user"
                    height={90}
                    width={90}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src={item.userimage}
                    alt="user"
                    height={90}
                    width={90}
                    className="opacity-0 rounded-full"
                  />
                )}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div> */}

      {/* </div> */}
    </div>
  );
};

export default Slider;

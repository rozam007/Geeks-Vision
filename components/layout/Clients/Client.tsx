"use client";

import React, { useRef, useState, useEffect } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Slider from "./Slider";
import { clients } from "@/data";
import { Swiper } from "swiper";

const Client: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const initializeSwiper = (swiper: Swiper) => {
    swiperRef.current = swiper;
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };


  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setIsBeginning(swiperRef.current!.isBeginning);
        setIsEnd(swiperRef.current!.isEnd);
      });
    }
  }, []);


  return (
    <div className="">
      {/* div 1 */}
      <div className="mb-[55px]">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          {/* dvi 1.1 */}
          <div className="w-full max-w-[720px]"  data-aos="fade-up">
            <h2 className="font-semibold text-[40px] leading-[60px] capitalize text-whiteColor mb-[7px]">
            Client Testimonials
            </h2>
            <p className="font-light text-[15px] text-paraColor leading-8 tracking-[.03em] mb-0">
              Services are professional offerings provided by businesses to meet
              specific needs or solve problems for their customers. Services can
              range from your budject.
            </p>
          </div>

          {/* div 1.2 */}
          <div className=" flex items-center gap-[55px]">
            {/* Button left*/}
            <button
              className="cursor-pointer h-[35px] w-[35px] rounded-full border border-themeColor flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor"
              onClick={handlePrev} disabled={isBeginning}
            >
              <HiArrowNarrowLeft />
            </button>

            {/* Button Right*/}
            <button
              className="cursor-pointer h-[35px] w-[35px] rounded-full border border-themeColor flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor"
              onClick={handleNext} disabled={isEnd}
            >
              <HiArrowNarrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* div 2 */}

      <div className="">
        <Slider entries={clients} changeSlide={initializeSwiper} />
      </div>
    </div>
  );
};

export default Client;

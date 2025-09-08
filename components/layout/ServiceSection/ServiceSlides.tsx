"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import { Pagination, Autoplay } from "swiper/modules";
import { services } from "@/data";
import styles from "./Service.module.css";

const ServiceSlides = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
          bulletClass: "custom-swiper-pagination-bullet",
          bulletActiveClass: "custom-swiper-pagination-bullet-active",
        }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              className={`${styles.serviceCard} max-w-[450px] mx-auto relative z-10 px-[30px] pt-[30px] pb-[50px] overflow-hidden text-start`}
            >
              <div className="bg-img"></div>
              <div className="sl mb-[15px]">
                <h3
                  className=" font-bold text-[50px]"
                  style={{ color: "hsla(0, 0%, 100%, .08)" }}
                >
                  0{service.id}
                </h3>
              </div>
              <div className="solution-content">
                <h3 className="mb-[12px] font-semibold text-[28px] tracking-wide">
                  {service.title}
                </h3>
                <p className=" font-light text-[14px] text-[#b5b5b5;] leading-[30px] mb-[30px]">
                  {service.description}
                </p>
              </div>
              <div className="soultion-btn">
                <Link
                  href=""
                  className="text-[13px] font-semibold text-themeColor hover:underline"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-swiper-pagination"></div>
    </>
  );
};

export default ServiceSlides;

import Image from "next/image";
import Link from "next/link";
import styles from "./project.module.css";
import Modal from "./Modal";
import React, { useState } from "react";
import { ProjectProps } from "@/types";
import { modal } from "@/data";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";

const ProjectSlides: React.FC<ProjectProps> = ({
  data,
  changeSlide,
  prev,
  next,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideId, setSlideId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSlideId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSlideId(null);
  };

  return (
    <>
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center custom-scrollbar">
          {/*Previos Button*/}
          <button
            className="cursor-pointer p-3 rounded-full border border-themeColor hidden sm:flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor mr-3"
            onClick={prev}
          >
            <HiArrowNarrowLeft size={25} />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            speed={2000}
            loop={true}
            autoplay={{ delay: 2000 }}
            pagination={{
              clickable: true,
              el: ".project-swiper-pagination",
              bulletClass: "project-swiper-pagination-bullet",
              bulletActiveClass: "project-swiper-pagination-bullet-active",
            }}
            onSwiper={changeSlide}
            className={`${styles.swiperWrapper}`}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.map((data) => (
              <SwiperSlide key={data.id} className={`${styles.SwiperSlide}`}>
                {/*  Card */}

                <div
                  className="min-w-[256px] relative cursor-pointer rounded-[5px] transition-[.5s]"
                  onClick={() => openModal(data.id)}
                >
                  {/* Slide image  */}
                  <div className="rounded-[5px]">
                    <Image
                      src={data.image}
                      alt="project-image"
                      className="w-full h-auto max-w-full rounded-[5px]"
                    />
                  </div>
                  {/* Slide Cnntent  */}
                  <div
                    className={`${styles.projectContent} absolute z-10 left-[25px] right-[25px] bottom-[25px] py-[25px] px-[20px] xxl:py-[35px] xxl:px-[25px] rounded-[5px]`}
                  >
                    <span className={`${styles.slideContent}`}>
                      {data.title}
                    </span>

                    <h3 className="mb-0">
                      <Link
                        href="#projects"
                        className="font-medium text-sm sm:text-base xxl:text-xl leading-[1.4] tracking-[.02em] capitalize text-whiteColor transition-colors duration-500 ease-in-out hover:text-themeColor"
                      >
                        {data.projectname}
                      </Link>
                    </h3>

                    <div className="absolute right-[-18px] top-1/2 transform -translate-y-2/4">
                      <Link
                        href="#projects"
                        className="h-11 w-11 rounded-full flex items-center justify-center bg-themeColor text-projectLink rotate-45 transition-all duration-700 hover:rotate-0"
                      >
                        <data.icon size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Modal  */}
          <Modal
            slideId={slideId}
            items={modal}
            isOpen={isModalOpen}
            onClose={closeModal}
          />

          {/* Next Button */}
          <button
            className="cursor-pointer p-3 rounded-full border border-themeColor hidden sm:flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor ml-3"
            onClick={next}
          >
            <HiArrowNarrowRight size={25} />
          </button>
        </div>

        {/* div 2 */}

        <div>
          <div className="project-swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default ProjectSlides;

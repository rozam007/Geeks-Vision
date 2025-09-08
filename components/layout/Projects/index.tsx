"use client";

import React from "react";
import Paragraph from "./Paragraph";
import { useRef } from "react";
import { projects } from "@/data";
import ProjectSlides from "./ProjectSlides";
import SectionTitle from "@/components/common/SectionTitle";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper } from "swiper";
import styles from "./project.module.css";

const Projects = () => {
  const swiperRef = useRef<Swiper | null>(null);

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

  return (
    <section id="projects">
      <div className={`${styles.projects} py-[120px]`}>
        <SectionTitle title="Projects" subtitle="Projects" />

        <Paragraph />

        {/* Visible only in extra small screens */}
        <div className="container flex sm:hidden mb-6 sm:mb-0">
          {/*Previos Button*/}
          <button
            className="cursor-pointer p-3 rounded-full border border-themeColor flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor mr-3"
            onClick={handlePrev}
          >
            <HiArrowNarrowLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            className="cursor-pointer p-3 rounded-full border border-themeColor flex items-center justify-center text-themeColor bg-transparent transition-colors duration-500 hover:text-whiteColor hover:bg-themeColor ml-3"
            onClick={handleNext}
          >
            <HiArrowNarrowRight size={20} />
          </button>
        </div>

        <div>
          <ProjectSlides
            data={projects}
            changeSlide={initializeSwiper}
            prev={handlePrev}
            next={handleNext}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

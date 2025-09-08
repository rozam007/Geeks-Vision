"use client";
import React from "react";
import Link from "next/link";
import LinkBtn from "@/components/common/LinkBtn";
import { BiSolidBadge } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";
import styles from "./Hero.module.css";
import { handleLinkClick } from "@/lib/utils";

const LeftContent: React.FC = () => {
  return (
    <div className="banner-content-wrapper py-[60px] w-full">
      <h1 className="font-bold mb-[30px] text-[35px] sm:text-[42px] lg:text-[52px] xxl:text-[60px]">
        Engineering, <br />
        Web & Cloud Solutions
        <br />
        with <span className="text-themeColor">Algorithmic</span> Precision
      </h1>
      <p className=" max-w-[640px] mb-[55px] leading-[35px] text-grayColor">
        IT company dedicated to delivering innovative solutions in web
        development technologies, and DevOps. At Geeks Vission, we thrive on
        tackling complex business challenges with precision and efficiency.
      </p>
      <div
        className={`${styles.bannerBtn} flex gap-[35px] xxl:gap-[60px] items-center`}
      >
        <LinkBtn
          title="Free Consultancy"
          href="#contact"
          onClick={handleLinkClick}
        />
        <Link
          href="#services"
          className="flex items-center group"
          onClick={handleLinkClick}
        >
          <BiSolidBadge className="text-[72px] text-themeColor" />
          <div className="content flex gap-1 ml-[-40px] items-center">
            <h2 className=" font-medium">VIEW ALL WORK</h2>
            <MdArrowOutward className="text-2xl text-grayColor group-hover:rotate-45 transition-transform duration-500" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LeftContent;

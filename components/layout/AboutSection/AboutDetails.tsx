import React from "react";
// import Link from "next/link";
import Image from "next/image";
import title from "@/public/title.svg";
import topVector from "/public/choose-top.svg";
import btmVector from "/public/choose-btm.svg";
import styles from "./About.module.css";
import { about_stats } from "@/data";
// import { MdArrowOutward } from "react-icons/md";

const AboutBottom = () => {
  return (
    <div className="about-bottom pt-8 lg:pt-[50px] flex flex-col items-center lg:flex-row gap-8 lg:gap-2">
      {/* ===== About-Bottom Card ===== */}

      <div
        className={`${styles.bottomCard} w-full lg:w-[55%] py-[65px] px-[30px] xl:px-[80px] relative`}
      >
        <div className="vectors">
          <Image src={topVector} alt="" className=" absolute bottom-0 left-0" />
          <Image src={btmVector} alt="" className=" absolute top-0 right-0" />
        </div>
        <div className="logo mb-[25px]">
          {/* <Image src={title} alt="LOGO TEXT" width={205} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width="300" height="120" role="img" aria-label="Geeks Vision">
            <title>Geeks Vision</title>
            <rect width="100%" height="100%" fill="transparent" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
                  fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="70" font-weight="600">
              Geeks Vision
            </text>
          </svg>
        </div>
        <h4 className="font-medium text-[20px] sm:text-[24px] leading-[1.46] mb-[25px]">
          Best Creative IT Agency And Solutions <br />
          <span className="text-themeColor text-[22px] sm:text-[26px] font-semibold">
            Since 2005.
          </span>
        </h4>
        <p className="pl-0 sm:pl-[40px] lg:pl-[60px] text-[15px] leading-[32px] tracking-[.03rem]  ">
          Our team of experts boasts a diverse skill set, allowing us to
          carefully curate and implement the optimal technology stack for each
          project. From conceptualization to execution, we provide end-to-end
          solutions all under one roof, ensuring a seamless and integrated
          experience for our clients.
        </p>
        <div className="sl pt-[40px] sm:pt-[65px] pl-[10px] sm:pl-[30px] lg:pl-[60px]">
          <h2
            className="font-bold text-[50px]"
            style={{ color: "hsla(0, 0%, 89%, .3)" }}
          >
            #1
          </h2>
        </div>
        {/* <div className="about-btn group absolute bottom-[20px] right-[30px]">
          <Link
            href={"#about"}
            className={`${styles.aboutMore} w-[122px] h-[122px] flex justify-center items-center gap-1 text-[12px]`}
          >
            <MdArrowOutward className="group-hover:rotate-45 transition-transform duration-500" />
            ABOUT MORE
          </Link>
        </div> */}
      </div>

      {/* ===== About Section Stats ===== */}

      <div className="bottom-stats w-full lg:w-[42%] lg:pl-[25px]">
        <ul>
          {" "}
          {about_stats.map((stats) => (
            <li key={stats.title} className="mb-[40px]">
              <div className="single-feature flex items-center gap-[25px]">
                <div
                  className="progress h-[100px] min-w-[100px] max-w-[100px] rounded-[50%] flex items-center justify-center"
                  style={{ border: "1px solid hsla(0, 0%, 100%, .2)" }}
                >
                  <h3 className="font-bold text-[30px]">{stats.progress}</h3>
                </div>
                <div className="content max-w-[290px]">
                  <h4 className="font-semibold text-[25px] mb-[8px]">
                    {stats.title}
                  </h4>
                  <p className="text-[13px] leading-[25px]">
                    {stats.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutBottom;

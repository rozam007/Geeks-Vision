import React from "react";
import Image from "next/image";
import choosImg from "/public/choose-img.svg";

const AboutTop = () => {
  return (
    <div className="about-top grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      <div
        className="top-content max-w-[450px] w-full lg:pt-[80px] lg:ml-[50px]"
        data-aos="fade-up"
      >
        <span className="text-[15px] relative mb-[15px] block pl-[30px] text-themeColor after:content-[''] after:h-[1px] after:w-[20px] after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:bg-themeColor capitalize">
          Why Choose Us
        </span>
        <h2 className="font-bold text-[30px] sm:text-[35px] xl:text-[45px] leading-[1.3] capitalize">
          Unlock the potential of your business.
        </h2>
      </div>
      <div className="top-img relative z-10 after:content-[''] after:h-full after:w-full after:absolute after:left-0 after:top-0 after:bg-bodyColor after:opacity-[0.5]">
        <Image
          src={choosImg}
          alt="Why Choose Us"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutTop;

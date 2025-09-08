import React from "react";
import Image from "next/image";
import BusinessImage from "../../../public/bussiness-img.svg";
import { Strategy } from "@/types";

const BusinessStrategies: React.FC<Strategy> = ({ element }) => {
  return (
    <div className="flex gap-0 flex-wrap justify-start lg:justify-center lg:flex-nowrap">
      {/* div 1 */}
      <div className="mt-12 sm:mt-0 lg:mt-6 sm:px-3">
        <Image
          src={BusinessImage}
          alt="team-image"
          width={526}
          height={433.97}
        />
      </div>

      {/* <div> 2*/}
      <div className="w-full lg:w-[60%] h-auto mt-12 sm:mt-8 lg:mt-0 xl:mt-14 sm:px-3">
        <h2 className="font-bold text-[30px] sm:text-[38px] md:text-[45px]  leading-snug capitalize text-whiteColor mb-[15px] ">
          Unlock The Potential Of Your Creative Business.
        </h2>
        <p className="font-light text-[15px] leading-[30px] tracking-wide text-paraColor">
          Morbi interdum pellentesque nunc, luctus pretium nulla luctus at.
          Aliquam cursus nunc aliquam. Nam semper posuere risus, a gravida
          sapien tincidunt ac. Nam ac lacinia arcu. Aliquam erat volutpat.
          Curabitur consectetur nisl.
        </p>
        <div>
          <div className="grid grid-col-1 sm:grid-cols-2 pt-[35px]">
            {element.map((data, index) => (
              <div key={index}>
                <div className="flex items-baseline gap-2 mb-[30px]">
                  <data.icon size={15} className="text-themeColor" />
                  <h2 className="text-[17px] text-listColor">{data.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStrategies;

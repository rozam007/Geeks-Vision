import InputElement from "@/components/common/InputElement";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { PiArrowUpRightThin } from "react-icons/pi";
import { contactInfo } from "@/data";
import Link from "next/link";

const Contactus: React.FC = () => {
  return (
    <div>
      <div className="mb-10">
        <h4 className="flex flex-row items-center text-whiteColor text-[23px] mb-2 gap-[10px] font-medium tracking-[.03em]">
          <span className="text-themeColor">
            <FaTelegramPlane size={20} />
          </span>
          Say Hello
        </h4>
        <div className="flex flex-col gap-2">
          <div>
            <Link
              href={`mailto:${contactInfo.email}`}
              className="font-normal text-base tracking-[.03em] text-paraColor transition-colors duration-500 ease-in-out hover:text-themeColor"
            >
              {contactInfo.email}
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h6 className="font-medium text-base tracking-[.02em] text-whiteColor mb-5">
          See Our New Updates
        </h6>
        <div className="flex flex-row items-center">
          <input
            type="text"
            placeholder="Email here..."
            className="w-auto lg:w-[251px] h-[52px] border border-footerFieldBorder bg-footerFieldBg text-footerFieldColor placeholder-placeholderColor rounded-l-[5px] py-[25px] px-5 text-[13px] font-normal focus:outline-0 "
          />
          <button
            type="submit"
            className="w-12 h-[50px] flex items-center justify-center border-none outline-none text-3xl bg-themeColor hover:bg-whiteColor rounded-r-[5px] text-blackColor2 transition-colors duration-500 ease-in-out"
          >
            <PiArrowUpRightThin />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactus;

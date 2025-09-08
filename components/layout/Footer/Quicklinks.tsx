import React from "react";
import { MdLocationOn } from "react-icons/md";
import Contactus from "./Contactus";
import Footerlinks from "@/components/common/Footerlinks";
import { contactInfo } from "@/data";
import Link from "next/link";

const Quicklinks: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 md:gap-4">
        {/* div 1 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-start mt-6 lg:mt-0">
          <div className="w-auto lg:max-w-min">
            {/* div 1.1 */}
            <div className="mb-10 ">
              <h4 className="flex flex-row items-center text-whiteColor text-[23px] mb-2 gap-1 font-medium tracking-[.03em]">
                <span className="text-themeColor">
                  <MdLocationOn />
                </span>
                Address
              </h4>
              <Link
                href="https://www.google.com/maps/place/Masjid+Master+City/@32.1257533,74.2142887,15.5z/data=!4m6!3m5!1s0x391ed55a60cb9c91:0xfba7ba0e666f2eaa!8m2!3d32.128658!4d74.224335!16s%2Fg%2F11h392wfhl!5m2!1e4!1e1?entry=ttu"
                className="font-normal text-base leading-[30px] tracking-[.03em] text-paraColor transition-colors duration-500 ease-in-out hover:text-themeColor"
              >
                {contactInfo.address}
              </Link>
            </div>

            <Contactus />
          </div>
        </div>

        {/* div 2 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start sm:justify-end lg:justify-start mt-6 lg:mt-0 sm:px-3">
          <Footerlinks category="ourSolutions" />
        </div>

        {/* div 3 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex justify-start lg:justify-center mt-6 lg:mt-0 lg:px-3">
          <Footerlinks category="company" />
        </div>

        {/* div 4 */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start sm:justify-end mt-6 lg:mt-0 sm:px-3">
          {/* <Footerlinks category="resources" /> */}
        </div>
      </div>
    </div>
  );
};

export default Quicklinks;

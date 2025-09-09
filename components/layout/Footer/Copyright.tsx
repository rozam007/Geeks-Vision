import React from "react";
import Social from "./Sociallinks";
import { getCurrentYear } from "@/lib/year";
import Link from "next/link";

const Copyright = () => {
  let year = getCurrentYear();

  return (
    <div className="container flex flex-wrap md:flex-nowrap items-center justify-between py-5">
      {/* div 1 */}
      <div className="w-full lg:w-auto mb-2 lg:mb-0 text-center md:text-center lg:text-left">
        <p className="mb-0 font-normal text-sm text-grayColor">
          © Copyright {year}{" "}
          <span className="font-bold text-whiteColor cursor-pointer transition-colors duration-500 ease-in-out hover:text-themeColor">
            Geeks Vision
          </span>
        </p>
      </div>

      {/* div 2 */}
      <div className="w-full lg:w-auto text-center lg:text-right py-[6px]">
        <Social />
      </div>
    </div>
  );
};

export default Copyright;

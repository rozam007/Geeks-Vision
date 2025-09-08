import React from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
// import LogoTitleSwitcher from "@/components/common/LogoTitleSwitcher";
import { contactInfo } from "@/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Logo from "@/components/common/logo";

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between py-4">
        {/* div 1 */}
        <div>
          {/* <Image src={logo} alt="logo" width={60} height={10} /> */}
          <Logo width="60" height="60"/>
        </div>
        {/* div 2 */}
        <div className="w-full md:w-auto flex justify-start sm:justify-end md:justify-center gap-10 mt-2 md:mt-0">
          <div className="flex flex-row items-center gap-3">
            <p className="text-5xl text-themeColor">
              <LiaPhoneVolumeSolid size={36} />
            </p>
            <div className="">
              <p className="text-[13px] font-normal tracking-[.03em] text-whiteColor">
                Call Any Time
              </p>
              <h6 className="text-lg font-medium tracking-[.03em] text-white hover:text-themeColor transition-colors duration-500 ease-in-out">
                <Link href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "/public/phone.svg";
import Hamburger from "hamburger-react";
import LinkBtn from "@/components/common/LinkBtn";
import SideNav from "./SideNav";
import { contactInfo } from "@/data/index";
import { useState } from "react";
import { handleLinkClick } from "@/lib/utils";

const NavBtn: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // Function to toggle the mobile navigation menu
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="nav-right flex justify-end items-center gap-[20px] md:gap-[35px]">
      <div className="right-content hidden xl:block">
        <span className="mb-[4px] flex gap-2 items-center">
          <Image src={phone} alt="phone" />
          <p className="text-[12px] text-whiteColor tracking-wide">
            For Queries:
          </p>
        </span>
        <Link
          href={`tel:${contactInfo.phone}`}
          className="font-medium hover:text-themeColor transition"
        >
          {contactInfo.phone}
        </Link>
      </div>

      <div className="nav-btn hidden sm:flex justify-center items-center">
        <LinkBtn
          title="Get A Quote"
          href="#contact"
          variant="secondary"
          size="small"
          onClick={handleLinkClick}
        />
      </div>

      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={toggleSideNav} size={30} />
        <SideNav status={isOpen} setStatus={setIsOpen} />
      </div>
    </div>
  );
};

export default React.memo(NavBtn);

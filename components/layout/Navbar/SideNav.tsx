"use client";
import React from "react";
import Link from "next/link";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { CiMail } from "react-icons/ci";
import LinkBtn from "@/components/common/LinkBtn";
import { navItems } from "@/data";
import { contactInfo } from "@/data/index";
import { SideNavProps } from "@/types";
import LogoTitleSwitcher from "@/components/common/LogoTitleSwitcher";

const SideNav: React.FC<SideNavProps> = ({ status, setStatus }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setStatus(false);
    const targetSection = e.currentTarget;
    const targetId = targetSection.getAttribute("href")?.slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    const navLinks = document.querySelectorAll(
      ".nav-link"
    ) as NodeListOf<HTMLAnchorElement>;
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    targetSection.classList.add("active");
  };

  return (
    <div
      className={`fixed top-0 left-0 z-99 h-full w-[280px] bg-darkBlueColor py-[30px] px-[20px] transform transition-transform duration-300 ${
        status ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-start items-center">
        <Link href={""}>
          <LogoTitleSwitcher
            logoHeight={10}
            logoWidth={60}
            titleHeight={3}
            titleWidth={205}
            divHeight={80}
            divWidth={200}
          />
        </Link>
      </div>

      <ul className="pt-[50px] pb-[20px]">
        {navItems.map((item, index) => (
          <li key={index} className="pb-[20px]">
            <Link
              href={item.link}
              className={`nav-link font-medium hover:text-themeColor transition ${
                item.link === "#home" ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="bot">
        <div className="hotline flex items-center">
          <div className="hotline-icon">
            <LiaPhoneVolumeSolid className="text-themeColor text-3xl" />
          </div>
          <div className="hotline-info ml-[12px]">
            <span className="text-themeColor text-[12px]">Call Us Now</span>
            <h6>
              <Link
                href="tel:4903249209"
                className=" hover:text-themeColor transition"
              >
                {contactInfo.phone}
              </Link>
            </h6>
          </div>
        </div>

        <div className="mail pt-[20px] flex items-center">
          <div className="mail-icon">
            <CiMail className="text-themeColor text-3xl" />
          </div>
          <div className="mail-info ml-[12px]">
            <span className="text-themeColor text-[12px]">Email Now</span>
            <h6>
              <Link
                href={`mailto:${contactInfo.email}`}
                className=" hover:text-themeColor transition"
              >
                {contactInfo.email}
              </Link>
            </h6>
          </div>
        </div>

        <div className="header-btn w-full mt-[30px] text-center">
          <LinkBtn
            title="Get a Qoute"
            href="#contact"
            size="full-width"
            font="large"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SideNav);

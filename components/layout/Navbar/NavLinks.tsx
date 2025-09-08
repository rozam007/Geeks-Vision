import React from "react";
import Link from "next/link";
import { navItems } from "@/data";
import { NavLinksProps } from "@/types";
import { handleLinkClick } from "@/lib/utils";

const NavLinks: React.FC<NavLinksProps> = ({ activeLink }) => {
  return (
    <div className="hidden md:flex flex-1 justify-center items-center">
      <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
        {navItems.map((item, index) => (
          <li key={index} className="px-2">
            <Link
              href={item.link}
              className={`nav-link text-[14px] font-medium hover:text-themeColor transition ${
                activeLink === item.link.slice(1) ? "active" : ""
              }`}
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;

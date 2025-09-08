import React from "react";
import Link from "next/link";
import { socialMediaLinks } from "@/data/index";

const Sociallinks = () => {
  return (
    <div className="w-full lg:w-auto text-center lg:text-right">
      <ul className="flex items-center justify-center md:justify-end gap-3">
        {Object.entries(socialMediaLinks).map(([key, {title, url, icon: Icon}]) => (
          <li
            key={key}
            className="mx-[10px] p-[6px] rounded-[4px] bg-socialLinkBg transition-colors duration-500 delay-100 ease-in-out hover:bg-themeColor"
          >
            <Link href={url} className=" bg-socialLinkBg ">
              <Icon size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;

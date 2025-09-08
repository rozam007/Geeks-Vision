import React from "react";
import footer from "@/data/index";
import { Links } from "@/types/index";
import { FooterDataProps } from "@/types/index";
import Link from "next/link";

// Function That can add space in Camelcase key
const formatCategoryName = (category: string): string => {
  return category
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};

// Main Functional Component
const FooterData: React.FC<FooterDataProps> = ({ category }) => {
  const data = footer.link[category] as Links[];

  return (
    <div>
      <h4 className="font-semibold text-[25px] tracking-[.03em] text-whiteColor mb-[20px]">{formatCategoryName(category)}</h4>
      <ul>
        {data.map((item, index) => (
          <li key={index} className=" mb-[18px]">
            <Link
              href={item.url}
              rel="noopener noreferrer"
              className="font-medium text-base tracking-[.02em] text-footerColor transition-colors duration-500 ease-in-out hover:text-themeColor"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterData;

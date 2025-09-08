// SocialLinks.tsx
import React from "react";
import Link from "next/link";
import { socialMediaLinks } from "@/data/index";
import { SocialMediaLinks } from "@/types/index";
import styles from "./Hero.module.css";

const SocialLinks: React.FC = () => {
  return (
    <div
      className={`${styles.socialLinks} absolute top-[50%] right-[60px] z-40 translate-y-[-50%]`}
    >
      <ul className="hidden lg:flex gap-[40px] items-center justify-center flex-col">
        {/* ===== Looping over Icons ====== */}
        {Object.keys(socialMediaLinks).map((key) => {
          const {
            title,
            url,
            icon: Icon,
          } = socialMediaLinks[key as keyof SocialMediaLinks];
          return (
            <li
              key={title}
              className="relative text-grayColor hover:text-themeColor transition-colors"
            >
              <Link href={url}>
                <Icon />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;

"use client";
import React, { useEffect, useState } from "react";
import { LogoTitleSwitcherProps } from "@/types";
import Image from "next/image";
import logo from "/public/logo.svg";
import title from "/public/title.svg";
import { relative } from "path";
import Logo from "./logo";

const LogoTitleSwitcher: React.FC<LogoTitleSwitcherProps> = ({
  interval = 5000,
  logoWidth,
  logoHeight,
  titleWidth,
  titleHeight,
  divWidth,
  divHeight,
}) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setShowLogo((prevState) => !prevState);
    }, interval);

    return () => clearInterval(toggleInterval);
  }, [interval]);

  return (
    <div style={{ width: divWidth, height: divHeight, position: "relative" }}>
      <div
        className={`absolute inset-0 flex items-center justify-left md:justify-center transition-opacity duration-1000 ${
          showLogo ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <Image src={logo} alt="logo" width={logoWidth} height={logoHeight} /> */}
        <Logo width="60" height="60"/>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          !showLogo ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* <Image
          src={title}
          alt="title"
          width={titleWidth}
          height={titleHeight}
        /> */}
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120" width="600" height="120" role="img" aria-label="Geeks Vision">
  <title>Geeks Vision</title>
  <rect width="100%" height="100%" fill="transparent" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        fill="#FFFFFF" font-family="Helvetica, Arial, sans-serif" font-size="70" font-weight="600">
    Geeks Vision
  </text>
</svg>

      </div>
    </div>
  );
};

export default LogoTitleSwitcher;

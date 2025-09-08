"use client";
import React, { useState, useEffect } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavBtn from "./NavBtn";
import styles from "./Nav.module.css";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy logic
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveLink(section.getAttribute("id") || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navBar} transition-all duration-300 ${
        scrolled ? "bg-blackColor" : "bg-transparent"
      }`}
    >
      <NavLogo />
      <NavLinks activeLink={activeLink} />
      <NavBtn />
    </nav>
  );
};

export default Nav;

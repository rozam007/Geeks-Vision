"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 600,
      easing: "ease",
    });
  }, []);

  return null;
};

export default AOSInitializer;

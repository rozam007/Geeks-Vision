"use client";
import { useEffect } from "react";
import ParticlesComponent from "./particals";
import logo from "/public/logo.svg";
import Image from "next/image";
import Logo from "@/components/common/logo";

const SplashScreen = ({ finishLoading }: { finishLoading: Function }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <div className="fixed top-0 w-full h-full bg-black">
      <div className="absolute inset-0 flex justify-center items-center">
        {/* <Image src={logo} alt="" width={100}></Image> */}
        <Logo width="100" height="100"/>
      </div>
      <ParticlesComponent />
    </div>
  );
};

export default SplashScreen;

import React from "react";
import Link from "next/link";
import LogoTitleSwitcher from "@/components/common/LogoTitleSwitcher";

const NavLogo = () => {
  return (
    <div className="logo pt-[6px] cursor-pointer">
      <Link href="/">
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
  );
};

export default React.memo(NavLogo);

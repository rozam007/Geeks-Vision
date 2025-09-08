import React from "react";
import ContactInfo from "./ContactInfo";
import Quicklinks from "./Quicklinks";
import Copyright from "./Copyright";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={`text-whiteColor ${styles.footer}`}>
      <div className="border-b border-footerBorder mb-20">
        <ContactInfo />
      </div>

      <div>
        <Quicklinks />
      </div>

      <div className="border-t border-footerBorder mt-20">
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;

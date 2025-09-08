import React from "react";
import Heading from "@/components/common/Heading";
import SectionTitle from "@/components/common/SectionTitle";
import { contactInfo } from "@/data";
import Link from "next/link";

const ContactNo: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Conatct" subtitle="Contact" />

      {/* div 2 */}
      <div className="w-auto">
        <p className="text-[17px] font-light leading-[35px] md:tracking-[.02em] lg:tracking-[0] xl:tracking-[.03em] text-paraColor">
          We’re happy to answer any questions you may have and help your
          determine which of our services best fit your needs.
        </p>

        {/* Contact No */}
        <div className="p-[10px] sm:p-0 sm:py-[10px] sm:px-[35px] inline-block mt-[50px] mb-[40px] sm:mt-[90px] sm:mb-[70px] border border-themeColor">
          <p className="text-[16px] sm:text-[25px] text-themeColor font-medium tracking-wide">
            Call Us Now:{" "}
            <Link href={`tel:${contactInfo.phone}`} className="text-whiteColor hover:text-themeColor tracking-normal transition-colors duration-500 delay-100">
              {contactInfo.phone}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactNo;

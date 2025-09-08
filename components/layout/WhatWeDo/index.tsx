import React from "react";
import { ContentInterface } from "@/types";
import { content } from "@/data";
import { strategies } from "@/data";
import SectionTitle from "@/components/common/SectionTitle";
import CoreInsights from "./CoreInsights";
import BusinessStrategies from "./BusinessStrategies";

const WhatWeDo = () => {
  return (
    <div className="mt-[120px]">
      <div className="container">
        {/*  div 1 */}

        <SectionTitle title="What We Do" subtitle="What We Do" />

        {/* div 2 */}
        <div className="mb-[70px] lg:mb-[120px]">
          <div className="flex md:justify-center flex-wrap gap-6 lg:gap-2 lg:flex-nowrap sm:mt-6">
            {content.map((data: ContentInterface, index) => (
              <div key={index}>
                <CoreInsights
                  icon={data.icon}
                  heading={data.heading}
                  paragraph={data.paragraph}
                />
              </div>
            ))}
          </div>
        </div>

        {/* div 3 */}
        <div>
          <BusinessStrategies element={strategies} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

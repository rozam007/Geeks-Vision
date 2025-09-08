"use client";
import ServiceSlides from "./ServiceSlides";
import SectionTitle from "@/components/common/SectionTitle";

const Services = () => {
  return (
    <section
      id="services"
      className="our-services sec-mar py-[80px] lg:py-[100px] bg-[#1e1c22]"
    >
      <div className="container">
        <SectionTitle title="Services" subtitle="Our Services" />
        <ServiceSlides />
      </div>
    </section>
  );
};

export default Services;

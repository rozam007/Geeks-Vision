"use client";

import React from "react";
import ContactNo from "./ContactNo";
// import Accordion from "./Accordion";
// import { accordionItems } from "@/data/index";
import { inputs } from "@/data/index";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import toastifyConfig from "@/lib/toastify.config";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <section>
      <div className="container mt-12 mb-12 sm:mt-[90px] sm:mb-[90px] lg:mt-[120px] lg:mb-[120px]">
        <div className="flex flex-col lg:flex-row sm:justify-center lg:gap-6 xl:gap-0 ">
          <div className="lg:w-1/2 lg:pr-3 mt-12 lg:mt-6">
            <ContactNo />
            {/* <Accordion items={accordionItems} /> */}
          </div>

          <div className="lg:w-1/2 xl:pl-3 mt-12 lg:mt-6" id="contact">
            <Form input={inputs} />
            <ToastContainer {...toastifyConfig} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

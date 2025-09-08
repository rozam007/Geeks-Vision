import React from "react";
import AboutTop from "./AboutIntroduction";
import AboutBottom from "./AboutDetails";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section sec-mar">
      <div className="container">
        <AboutTop />
        <AboutBottom />
      </div>
    </section>
  );
};

export default About;

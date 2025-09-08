import Nav from "@/components/layout/Navbar/Nav";
import Hero from "@/components/layout/HeroSection/Hero";
import Review from "@/components/layout/ReviewsSection/Review";
import About from "@/components/layout/AboutSection/About";
import Services from "@/components/layout/ServiceSection/Service";
import WhatWeDo from "@/components/layout/WhatWeDo";
import Contact from "@/components/layout/Contact/index";
import Footer from "@/components/layout/Footer/index";
import Clients from "@/components/layout/Clients";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Review />
      <About />
      <Services /> 
      <Clients />
      <Projects />
      <WhatWeDo />
      <Contact />
      <Footer />
    </>
  );
}

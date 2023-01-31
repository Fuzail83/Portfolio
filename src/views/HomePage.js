import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import background from "../assets/mapmark.svg";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Testimonial from "../components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <div id="homepage">
      <a href="mailto:MaverickCER@gmail.com" className="heroEmail">
        fuzailakhtar0497@gmail.com
      </a>
      <Header />
      <hr />
      <Hero />
      <About />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default HomePage;

import React from "react";
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import Resume from "../../assets/resume.pdf";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".home__img", { opacity: 0, y: 100, duration: 0.7 });
    tl.from(
      ".home__name",
      {
        opacity: 0,
        x: -50,
        duration: 0.8,
      },
      "x"
    );
    tl.from(
      ".home__education",
      {
        opacity: 0,
        x: 100,
        duration: 0.5,
      },
      "x"
    );
    tl.from(".btn", {
      opacity: 0,
      duration: 0.3,
      delay: 0.8,
    });
  });
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" width="120" />
        <h1 className="home__name">RAhul Kumar</h1>
        <span className="home__education">I'm a Frontend Developer</span>

        <HeaderSocials />

        {/* <a href="#contact" className="btn">
          {" "}
          Contact Me
        </a> */}
          <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;

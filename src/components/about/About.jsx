import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
// import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const aboutRef = useRef();

  // const downloadResume = async () => {
  //   window.open(Resume, "_blank");
  // };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 10%",
        end: "bottom bottom",
        duration: 1,
        // scrub: true,
        // markers: true,
      },
    });

    // tl.to(".about__img", {
    //   x: 0,
    //   //   duration: 0.8,
    //   //   transition: "1s ease-in-out",
    // });
    // tl.to(".about__data", {
    //   x: 0,
    //   // duration: 1,
    //   // transition:"1s ease-in-out",
    // });
  }, { scope: aboutRef });

  return (
    <section className="about container section" id="about" ref={aboutRef}>
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm RAhul, and I'm based in Amritsar, Punjab. I studied at
              Punjab Technical University, where I completed my graduation in
              Computer Application.
              <br />
              <br />
              Fastforward to today, I'm a creative Frontend Developer with a
              passion for building beautiful, functional, and user-friendly
              websites. I am extremely proficient in Front-End Development using
              HTML5, SCSS, Bootstrap, Tailwind Css, JavaScript, React Js, GSAP
              and several popular web development frameworks. Apart from this, I
              have proficient knowledge WordPress and Canva. I'm very passionate
              and dedicated to my work. If you're interested in working
              together, I'd be very happy. Let's create something great
              together!
              <br />
              <br />
              {/* Here are a few technologies I’ve been working with recently: */}
            </p>
            {/* <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Postgres SQL</li>
              <li>NestJS</li>
            </ul> */}
            {/* <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button> */}
        <a href="#contact" className="btn">
          {" "}
          Hire Me
        </a>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;

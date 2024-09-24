import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollDown = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".scroll__down", {
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay:2.5
        });
      });
    return (
        <div className="scroll__down">
            <a href="#about" className="mouse__wrapper">
                <span className="home__scroll-name">Scroll Down</span>
                <span className="mouse">
                    <span className="wheel"></span>
                </span>
            </a>
        </div>
    )
}

export default ScrollDown
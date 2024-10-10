import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/logo.svg";
import LightLogo from "../../assets/light-logo.svg";

import {
  RiHome2Line,
  RiUser3Line,
  RiBriefcase2Line,
  RiStackLine,
  RiDraftLine,
  RiChat3Line,
  RiFileList3Line,
  RiMoonLine,
  RiSunLine,
  RiMenu2Line,
} from "react-icons/ri";
import { CgRowLast } from "react-icons/cg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sidebar = (props) => {
  const [toggle, showMenu] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".aside", { opacity: 1, x: 0, duration: 0.5, ease: "power4.inOut" });
    tl.from(".nav__item", { opacity: 0, x: -100, duration: 0.8, stagger: 0.2 });
    tl.from(".nav__footer", { opacity: 0, duration: 0.2 });
  });

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">
          <img src={props.theme === "light" ? LightLogo : Logo} alt="logo" />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <RiHome2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <RiUser3Line />
                </a>
              </li>

              {/* <li className="nav__item">
                <a href="#services" className="nav__link">
                  <RiFileList3Line />
                </a>
              </li> */}

              <li className="nav__item">
                <a href="#resume" className="nav__link">
                  <RiBriefcase2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                <CgRowLast />

                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <RiStackLine />
                </a>
              </li>

              {/* <li className="nav__item">
                <a href="#blog" className="nav__link">
                  <RiDraftLine />
                </a>
              </li> */}

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <RiChat3Line />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <button
            onClick={() => {
              props.switchTheme();
              showMenu(!toggle);
            }}
            className="nav__link footer__button"
          >
            {props.theme === "light" ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <RiMenu2Line />
      </div>
    </>
  );
};

export default Sidebar;

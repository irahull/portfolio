import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev, FaInstagram  } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeaderSocials = () => {
    useGSAP(() => {
      const tl = gsap.timeline();
      tl.from(".home__social-link", {
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay:1
      });
    });
    return (
        <div className='home__socials'>
            <a href='https://www.github.com/irahull' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            <a href="mailto:irahull@outlook.com" className='home__social-link' target='_blank' rel='noreferrer'>
            <MdOutlineEmail />

            </a>

            <a href='https://www.linkedin.com/in/irahull/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.instagram.com/_irahull_/' className='home__social-link' target='_blank' rel='noreferrer'>
            <FaInstagram />
            </a>

            <a href='https://x.com/_irahull_/' className='home__social-link' target='__blank' rel='noreferrer'>
            <FaTwitter/>
            </a>
        </div>
    );
};

export default HeaderSocials;

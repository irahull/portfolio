import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'
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
            <a href='https://www.github.com/GregSithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a>

            <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/greg-sithole-b6350558/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://wwww.facebook.com/Greg.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>

            <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;

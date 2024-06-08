import React, { useEffect, useRef } from 'react';

// Import font awesome package 
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/Header/Header.scss';
const Header = () => {
  const navLinkAbout = useRef();
  const navLinkWork = useRef();
  const navLinkContact = useRef();

  useEffect(() => {
    const route = document.getElementsByClassName('header__route');
    for (let i = 0; i <= route.length; i++) {
      route[i]?.addEventListener('mouseover', function () {
        this.nextSibling.classList.add('header__route-bg-animation');
      });
      route[i]?.addEventListener('mouseout', function () {
        this.nextSibling.classList.remove('header__route-bg-animation');
      });
    }
  });

  function showHideNavbar() {
    const navLinksDisplay = document.getElementById('header__nav-links');
    const iconMiddleLine = document.getElementById(
      'header__hamburger-middle-line'
    );
    const iconTopLine = document.getElementById('header__hamburger-top-line');
    const iconBottomLine = document.getElementById(
      'header__hamburger-bottom-line'
    );
    if (navLinksDisplay.style.display === 'flex') {
      navLinksDisplay.style.display = 'none';
      iconMiddleLine.style.display = 'inline-block';
      iconTopLine.classList.remove('header__icon-line-animate');
      iconBottomLine.classList.remove('header__icon-bottom-line-animate');
    } else {
      navLinksDisplay.style.display = 'flex';
      iconMiddleLine.style.display = 'none';
      iconTopLine.classList.add('header__icon-line-animate');
      iconBottomLine.classList.add('header__icon-bottom-line-animate');
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__container">
          <div className="header__logo">
            <span data-aos="fade-down" data-aos-delay="0">
              P
            </span>
            <span data-aos="fade-down" data-aos-delay="700">
              R
            </span>
            <span data-aos="fade-down" data-aos-delay="800">
              A
            </span>
            <span data-aos="fade-down" data-aos-delay="900">
              S
            </span>
            <span data-aos="fade-down" data-aos-delay="1000">
              H
            </span>
            <span data-aos="fade-down" data-aos-delay="1100">
              A
            </span>
            <span data-aos="fade-down" data-aos-delay="1200">
              N
            </span>
            <span data-aos="fade-down" data-aos-delay="1300">
              T
            </span>
             
          </div>
          <div className="header__hamburger-icon" onClick={showHideNavbar}>
            <span id="header__hamburger-top-line"></span>
            <span id="header__hamburger-middle-line"></span>
            <span id="header__hamburger-bottom-line"></span>
          </div>
          <div className="header__nav-links" id="header__nav-links">
            <ul>
              <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkAbout}
                  data-aos="fade-down"
                  data-aos-delay="0"
                >
                  <a href="#about">About</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
              <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkWork}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <a href="#work">Works</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
              <div className="header__nav-links-container">
                <li
                  className="header__route"
                  ref={navLinkContact}
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <a href="#contact">Contact me</a>
                </li>
                <div className="header__route-bg"></div>
              </div>
              <div className="header__social">
                <p className="header__linkedin">
                  <a href="https://www.linkedin.com/in/prashantrajput9870/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                </p>

                <p className='header__github'>
                  <a href="https://github.com/mahak9870" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </p>

                 
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

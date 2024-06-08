import React from 'react';

import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/Footer/Footer.scss';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <p>
            Made with <FontAwesomeIcon icon={faHeart} size="sm" /> by PRASHANT RAJPUT
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

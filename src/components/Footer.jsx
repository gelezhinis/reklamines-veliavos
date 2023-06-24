import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaGlobe,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

import logo from '../img/logo/logo_n.png';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer}>
        <div className={classes.footer_item}>
          <div><img src={logo} width={150} alt="logo" /></div>
          <p>Created by Reactive Solutions</p>
          <p>Copyright &copy; 2023. All Rights Reserved</p>
        </div>
        <div className={classes.footer_item}>
          <p>Daugiau produktų ir paslaugų:</p>
          <ul>
            <li>
              <a
                href="http://www.myprint.lt"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGlobe /> www.myprint.lt
              </a>
            </li>
            <li>
              <a
                href="https://www.reklaminiai.lt"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGlobe /> www.reklaminiai.lt
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footer_item}>
          <ul>
            <li>
              <a href="tel:0037068736626"><FaPhone /> +370 687 36626</a>  
            </li>
            <li>
              <a href="email:info@myprint.lt"><FaEnvelope /> info@reklaminiai.lt</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/reklaminesveliavos"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook />/reklaminesveliavos
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/myprint.lt"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.instagram}
              >
                <FaInstagram size={19} />/myprint.lt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

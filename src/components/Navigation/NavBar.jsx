import React from 'react';
import { NavLink } from 'react-router-dom';
// import LazyLoad from 'react-lazy-load';

import { FaFacebook, FaInstagram } from 'react-icons/fa';

import logo from '../../img/logo/logo_n.png';
import classes from './NavBar.module.css';

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav_wrap}>
        <div>
          <NavLink to="/">
            {/* <LazyLoad offset={50}> */}
              <img src={logo} width={220} alt="logo" />
            {/* </LazyLoad> */}
          </NavLink>
        </div>
        <ul className={classes.nav_list}>
          <li>
            <NavLink to="/price" activeClassName={classes.active}>
              Kainos
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" activeClassName={classes.active}>
              Galerija
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Kontaktai
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" activeClassName={classes.active}>
              Užsakyti
            </NavLink>
          </li>
        </ul>
        <div className={classes.social_list}>
          <a
            href="https://www.facebook.com/reklaminesveliavos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/myprint.lt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

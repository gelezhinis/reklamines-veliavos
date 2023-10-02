import React from 'react';
import {NavLink} from 'react-router-dom';

import {FaFacebook, FaInstagram} from 'react-icons/fa';

import './Sidebar.css';

const Sidebar = ({show, onSidebarClick}) => {
  let sidebarClasses = 'sidebar';
  if (show) {
    sidebarClasses = 'sidebar open';
  }

  return (
    <div className={sidebarClasses}>
      <ul>
        <li><NavLink to="/" onClick={onSidebarClick}>Pagrindinis</NavLink></li>
        <li><NavLink to="/kainos" onClick={onSidebarClick}>Kainos</NavLink></li>
        <li><NavLink to="/galerija" onClick={onSidebarClick}>Galerija</NavLink></li>
        <li><NavLink to="/kontaktai" onClick={onSidebarClick}>Kontaktai</NavLink></li>
        <li><NavLink to="/uzsakymai" onClick={onSidebarClick}>Užsakyti</NavLink></li>
        <li className="social_list">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" onClick={onSidebarClick} ><FaFacebook size={25} /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" onClick={onSidebarClick} ><FaInstagram size={26} /></a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
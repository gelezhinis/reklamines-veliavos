import React, {useState} from 'react';

import Sidebar from './Sidebar';
import logo from '../../img/logo/logo_n.png';
import classes from './MobileNavBar.module.css';

const MobileNavBar = () => {
  const [side, setSide] = useState(false);

  const sideHandler = () => {
    setSide(prevState => !prevState);
  }

  return (
    <>
    <Sidebar show={side} onSidebarClick={sideHandler} />
    <div className={classes.mobile_nav_container}>
    <div><img src={logo} width={220} alt="logo" /></div>
      <div className={classes.hamburger_wrap}>
        <input type="checkbox" checked={side} className={classes.toggler} onChange={sideHandler} />
        <div className={classes.hamburger}>
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileNavBar;

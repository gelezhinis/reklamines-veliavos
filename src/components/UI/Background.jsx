import React from 'react';

import bg from '../../img/bg.jpg';
import classes from './Background.module.css';

const Background = (props) => {
  return (
    <div className={classes.background}><img src={bg} alt="background" className={classes.bg_img} />{props.children}</div>
  )
}

export default Background;
import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  // console.log('Rendering Backdrop');

  return (
    <div className={classes.backdrop} onClick={props.onBackdropClose}></div>
  );
}

export default Backdrop;
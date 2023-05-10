import React from 'react';

import classes from './Button.module.css';

const Button = ({title, onClick}) => {
  return (
    <div className={classes.btn_container}>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
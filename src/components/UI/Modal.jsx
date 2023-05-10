import React from 'react';

import classes from './Modal.module.css';

const Modal = ({component}) => {
  return (
    <div className={classes.modal}>{component}</div>
  );
};

export default Modal;
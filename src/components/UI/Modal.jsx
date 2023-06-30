import React, {useEffect} from 'react';

import classes from './Modal.module.css';

const Modal = ({component}) => {
  useEffect(() => {
    window.scroll(0, 0);
  },[]);

  return (
    <div className={classes.modal}>{component}</div>
  );
};

export default Modal;
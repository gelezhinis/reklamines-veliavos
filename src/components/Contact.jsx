import React from 'react';

import {
  FaPhone,
  FaEnvelope,
  // FaBriefcase
} from 'react-icons/fa';

import classes from './Contact.module.css';
import ContactForm from './ContactForm';
import Card from './UI/Card';

const Contact = () => {
  return (
    <Card>
      <div className={classes.contact}>
        <div className={classes.contact_left}>
          <h2 className={classes.contact_title}>Susisiekite su mumis.</h2>
          <div className={classes.contact_info_item}>
            <FaEnvelope />
            <h5>info@reklaminiai.lt</h5>
          </div>
          <div className={classes.contact_info_item}>
            <FaPhone />
            <h5>+370 687 36626</h5>
          </div>
        </div>
        <div className={classes.contact_right}>
          <ContactForm full />
        </div>
      </div>
    </Card>
  );
};

export default Contact;

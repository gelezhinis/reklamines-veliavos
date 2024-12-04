import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Button from './UI/Button';

import classes from './ContactForm.module.css';

const ContactForm = (props) => {
  const formRef = useRef();
  
  const [done, setDone] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
      process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        setDone(true);
        setName('');
        setSubject('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.log(error.text);
    });

    if(props.closeModal) {
      setTimeout(() => {
        props.closeModal();
      }, 5000);
    }
  };

  return (
    <div className={props.full ? classes.contact_full : classes.contact}>
      <p className={classes.contact_desc}>
        Mielai prašome susisiekti su mumis bet kuriuo metu ir mes aptarsime
        viską kas Jus domina.
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Vardas"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="user_subject"
          placeholder="Tema"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          name="user_email"
          placeholder="El. Paštas"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <Button title="Siųsti" />
        {done && <p className={classes.thank}>Ačiū kad kreipiatės, atsakysime Jums kaip įmanoma greičiau.</p>}
      </form>
    </div>
  );
};

export default ContactForm;

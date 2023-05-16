import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Button from './UI/Button';

import classes from './OrderForm.module.css';

const OrderForm = (props) => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const [company, setCompany] = useState(false);
  const [model, setModel] = useState(false);
  const [subject, setSubject] = useState('');
  const [accessories, setAccessories] = useState('');
  const [email, setEmail] = useState('');
  const [companyInfo, setCompanyInfo] = useState('');
  const [orderDetails, setOrderDetails] = useState('');
  const [noPvm, setNoPvm] = useState(false);
  const [maketFile, setMaketFile] = useState(null);
  const [freeMaket, setFreeMaket] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('PROPS', props.closeModal);

    if (maketFile) {
      const reader = new FileReader();
      reader.readAsDataURL(maketFile);

      reader.onload = async (e) => {
        const emailParams = {
          email: email,
          flag: subject,
          accessories: accessories,
          company_info: companyInfo,
          order_details: orderDetails,
          no_pvm: noPvm ? 'taip' : 'ne',
          free_maket: freeMaket ? 'reikia' : 'nereikia',
          maket_file: reader.result,
        };

        emailjs
          .send(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_ORDER_TEMPLATE_ID,
            emailParams,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
          )
          .then((result) => {
            console.log(result.text);
            setDone(true);
            setSubject('');
            setAccessories('');
            setEmail('');
            setCompanyInfo('');
            setOrderDetails('');
            setNoPvm(false);
            setMaketFile(null);
            setFreeMaket(false);
          })
          .catch((error) => {
            console.log(error.text);
          });
      };
    } else {
      const emailParams = {
        email: email,
        flag: subject,
        accessories: accessories,
        company_info: companyInfo,
        order_details: orderDetails,
        no_pvm: noPvm ? 'taip' : 'ne',
        free_maket: freeMaket ? 'reikia' : 'nereikia',
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
          process.env.REACT_APP_EMAIL_JS_ORDER_TEMPLATE_ID,
          emailParams,
          process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          setDone(true);
          setSubject('');
          setAccessories('');
          setEmail('');
          setCompanyInfo('');
          setOrderDetails('');
          setNoPvm(false);
          setMaketFile(null);
          setFreeMaket(false);
        })
        .catch((error) => {
          console.log(error.text);
        });
    }

    // const reader = new FileReader();
    // reader.readAsDataURL(maketFile);

    // reader.onload = async (e) => {
    //   const emailParams = {
    //     email: email,
    //     flag: subject,
    //     accessories: accessories,
    //     company_info: companyInfo,
    //     order_details: orderDetails,
    //     no_pvm: noPvm ? 'taip' : 'ne',
    //     free_maket: freeMaket ? 'reikia' : 'nereikia',
    //     maket_file: reader.result,
    //   };

    //   emailjs
    //     .send(
    //       process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
    //       process.env.REACT_APP_EMAIL_JS_ORDER_TEMPLATE_ID,
    //       emailParams,
    //       process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
    //     )
    //     .then((result) => {
    //       console.log(result.text);
    //       setDone(true);
    //       setSubject('');
    //       setAccessories('');
    //       setEmail('');
    //       setCompanyInfo('');
    //       setOrderDetails('');
    //       setNoPvm(false);
    //       setMaketFile(null);
    //       setFreeMaket(false);
    //     })
    //     .catch((error) => {
    //       console.log(error.text);
    //     });

    if (props.closeModal) {
      window.scroll(0, 100);
      setTimeout(() => {
        props.closeModal();
      }, 5000);
    }
  };

  return (
    <div className={classes.order}>
      <p className={classes.order_desc}>
        Užpildykite trumpą užsakymo formą ir mes susisieksime su Jumis kaip
        įmanoma greičiau!
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={classes.input_element}>
          <label htmlFor="flag">Vėliavų dydis, forma ir kiekis</label>
          <input
            id="flag"
            type="text"
            name="flag"
            placeholder="Pvz: M Convex - 5vnt."
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className={classes.input_element}>
          <label htmlFor="accessories">Pagrindai ir priedai</label>
          <input
            id="accessories"
            type="text"
            name="accessories"
            placeholder="Pvz: Smeigtai - 2vnt., Metalinės plokštės 35x35 - 3vnt."
            value={accessories}
            onChange={(e) => setAccessories(e.target.value)}
            required
          />
        </div>
        <div className={classes.input_element}>
          <label htmlFor="email">Kontaktai</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="El.pašto adresas"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={classes.input_element}>
          <label htmlFor="order_details">Užsakymo pristatymo detalės</label>
          <textarea
            id="order_details"
            type="text"
            name="order_details"
            placeholder="Miestas, adresas su pašto kodu, gavėjas, kontaktinis telefono numeris"
            rows="3"
            value={orderDetails}
            onChange={(e) => setOrderDetails(e.target.value)}
            required
          />
        </div>
        {company && (
          <div className={classes.input_element}>
            <label htmlFor="company_info">Įmonės kontaktai</label>
            <textarea
              id="company_info"
              type="text"
              name="company_info"
              placeholder="Įmonės pavadinimas, Įmonės kodas, PVM mokėtojo kodas, įmonės adresas"
              rows="3"
              value={companyInfo}
              onChange={(e) => setCompanyInfo(e.target.value)}
              required
            />
          </div>
        )}
        <div className={classes.input_element}>
          <label htmlFor="company_pvm">Užsakymą pateikia:</label>
          <div>
            <input
              id="company_pvm"
              type="checkbox"
              name="company_pvm"
              checked={company}
              onChange={() => setCompany(!company)}
            />
            <p>Įmonė PVM mokėtoja</p>
          </div>
          <div>
            <input
              id="no_pvm"
              type="checkbox"
              name="no_pvm"
              checked={noPvm}
              onChange={() => setNoPvm(!noPvm)}
            />
            <p>
              Įmonė ne PVM mokėtoja / <br className={classes.break} />{' '}
              Individuali veikla / Fizinis asmuo
            </p>
          </div>
          <div>
            <input
              id="own_maket"
              type="checkbox"
              checked={model}
              name="own_maket"
              onChange={() => setModel(!model)}
            />
            <p>Turime jau paruoštą maketą</p>
          </div>
          {model && (
            <div className={classes.file}>
              <input
                type="file"
                id="maket_file"
                name="maket_file"
                multiple
                accept="*"
                required
                onChange={(e) => setMaketFile(e.target.files[0])}
              />
            </div>
          )}
          <div>
            <input
              id="free_maket"
              type="checkbox"
              name="free_maket"
              checked={freeMaket}
              onChange={() => setFreeMaket(!freeMaket)}
            />
            <p>Norėsime NEMOKAMO* maketo</p>
          </div>
        </div>
        {(done && props.closeModal) && <p className={classes.thank}>Jūsų užsakymas jau vykdomas.</p>}
        <Button title="Siųsti" />
        {(done && !props.closeModal) && <p className={classes.thank}>Jūsų užsakymas jau vykdomas.</p>}
      </form>
    </div>
  );
};

export default OrderForm;

import React, { useRef, useState } from 'react';

import Button from './UI/Button';

import classes from './OrderForm.module.css';

const OrderForm = () => {
  const formRef = useRef();

  const [flag, setFlag] = useState('');
  const [company, setCompany] = useState(false);
  const [model, setModel] = useState(false);
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [orderDetails, setOrderDetails] = useState('');

  return (
    <div className={classes.order}>
      <p className={classes.order_desc}>Užpildykite trumpą užsakymo formą ir mes susisieksime su Jumis kaip įmanoma greičiau!</p>
      <form ref={formRef}>
        <div className={classes.input_element}>
          <label htmlFor="flag">Vėliavų dydis, forma ir kiekis</label>
          <input
            id="flag"
            type="text"
            name="flag"
            placeholder="Pvz: M Convex - 5vnt."
            value={flag}
            onChange={(e) => setFlag(e.target.value)}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            <label htmlFor="contact">Įmonės kontaktai</label>
            <textarea
              id="contact"
              type="email"
              name="contact"
              placeholder="Įmonės pavadinimas, Įmonės kodas, PVM mokėtojo kodas, įmonės adresas"
              rows="3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div className={classes.input_element}>
          <label htmlFor="details">Užsakymą pateikia:</label>
          <div>
            <input
              id="details"
              type="checkbox"
              name="details"
              onChange={() => setCompany(!company)}
            />
            <p>Įmonė PVM mokėtoja</p>
          </div>
          <div>
            <input id="details" type="checkbox" name="details" />
            <p>
              Įmonė ne PVM mokėtoja / <br className={classes.break} /> Individuali veikla  / Fizinis asmuo
            </p>
          </div>
          <div>
            <input
              id="details"
              type="checkbox"
              name="details"
              onChange={() => setModel(!model)}
            />
            <p>Turime jau paruoštą maketą</p>
          </div>
          {model && (
            <div className={classes.file}>
              <input type="file" id="file" multiple accept="image/*" required />
            </div>
          )}
          <div>
            <input id="details" type="checkbox" name="details" />
            <p>Norėsime NEMOKAMO* maketo</p>
          </div>
        </div>
        <Button title="Siųsti" />
      </form>
    </div>
  );
};

export default OrderForm;

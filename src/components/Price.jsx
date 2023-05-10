import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Backdrop from './UI/Backdrop';
import Modal from './UI/Modal';
import Card from './UI/Card';
import Button from './UI/Button';
import OrderForm from './OrderForm';

import flag from '../img/flags/flag4.jpg';
import priceCardS from '../img/cards/S_kaina.jpg';
import priceCardM from '../img/cards/M_kaina.jpg';
import priceCardL from '../img/cards/L_kaina.jpg';
import priceCardXL from '../img/cards/XL_kaina.jpg';
import priceFoundation from '../img/cards/Pagrindai_kaina.jpg';

import classes from './Price.module.css';

const Price = () => {
  const [modal, setModal] = useState(false);

  const { ref: ref1, inView: firstCardView } = useInView();
  const { ref: ref2, inView: secondCardView } = useInView();
  const { ref: ref3, inView: thirdCardView } = useInView();
  const { ref: ref4, inView: fourthCardView } = useInView();
  const { ref: ref5, inView: foundCardView } = useInView();

  const modalHandler = () => {
    setModal(true);
  };

  const modalBackdropCloseHandler = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <Backdrop onBackdropClose={modalBackdropCloseHandler} />}
      {modal && (
        <Modal
          component={<OrderForm closeModal={modalBackdropCloseHandler} />}
        />
      )}
      <div className={classes.price_hero_container}>
        <div className={classes.price_desc_container}>
          <div className={classes.price_desc}>
            <p>
              Reklaminių vėliavų kaina priklauso nuo užsakomo kiekio bei vėliavų
              dydžio. Kuo didesnis kiekis - tuo geresnė kaina. Į vėliavos kainą
              įskaičiuota stiebas ir vėliava su spauda, pagrindai komplektuojami
              papildomai. Nurodytos kainos yra orientacinės, todėl visuomet
              kviečiame susisiekti ir pasitikslinti užpildant užklausos formą
              arba el paštu info@reklaminiai.lt. Minimalus užsakomas kiekis 2
              vnt.
            </p>
            <Button title="Pateikti Užsakymą" onClick={modalHandler} />
          </div>
          <div className={classes.box}>
            <img src={flag} alt="flag" />
          </div>
        </div>
      </div>
      <Card>
        <div className={classes.price}>
          <div className={classes.cards_container}>
            <div className={classes.card_container}>
              <img
                ref={ref1}
                src={priceCardS}
                alt="price_card"
                className={`${classes.img_card} ${
                  firstCardView ? classes.animate_card_left : ''
                }`}
              />
            </div>
            <div className={classes.card_container}>
              <img
                ref={ref2}
                src={priceCardM}
                alt="price_card"
                className={`${classes.img_card} ${
                  secondCardView ? classes.animate_card_right : ''
                }`}
              />
            </div>
            <div className={classes.card_container}>
              <img
                ref={ref3}
                src={priceCardL}
                alt="price_card"
                className={`${classes.img_card} ${
                  thirdCardView ? classes.animate_card_left : ''
                }`}
              />
            </div>
            <div className={classes.card_container}>
              <img
                ref={ref4}
                src={priceCardXL}
                alt="price_card"
                className={`${classes.img_card} ${
                  fourthCardView ? classes.animate_card_right : ''
                }`}
              />
            </div>
          </div>
          <div className={classes.found_container}>
            <img
              ref={ref5}
              src={priceFoundation}
              alt="foundation_card"
              className={`${classes.img_card} ${
                foundCardView ? classes.animate_card_grow : ''
              }`}
            />
          </div>
        </div>
        <div className={classes.info}>
          <p>
            Standartinį vėliavos komplektą sudaro iš kelių dalių surenkamas
            aliuminio bei stiklo pluošto stiebas ir vėliava su vienpuse spalvota
            spauda (kitoje pusėje matomas veidrodinis vaizdas), kiekvienas
            stiebas turi savo įmautę. Vėliavų pagrindai komplektuojami
            papildomai. Vėliavų naudojimui lauke rekomenduojame rinktis pagrindą
            su sukikliu.
          </p>
          <p>
            *Nesudėtingus maketus paruošiame NEMOKAMAI jeigu pateikiami tinkamo
            formato failai/logo. Paruošiamas 1-2 variantai ir atliekamos 1-2
            korekcijos.
          </p>
          <p>
            *NEMOKAMAS užsakymo pristatymas Lietuvos didžiuosiuose miestuose
            vienu adresu. Užsakant ne mažiau 2-jų vėliavų kompletus su
            pagrindais. Užsakant vėliavas be pagrindų ar atskirai tik pagrindus,
            pristatymas kainuoja papildomai.
          </p>
        </div>
      </Card>
    </>
  );
};

export default Price;

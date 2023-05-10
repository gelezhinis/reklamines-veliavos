import React, {useState} from 'react';

import {EmblaCarousel} from './UI/EmblaCarousel';
import Modal from './UI/Modal';
import Backdrop from './UI/Backdrop';
import Button from './UI/Button';
import ContactForm from './ContactForm';

import classes from './Hero.module.css';

const Hero = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  }

  const modalBackdropCloseHandler = () => {
    setModal(false);
  }
  
  return (
    <>
    {modal && <Backdrop onBackdropClose={modalBackdropCloseHandler} />}
    {modal && <Modal component={<ContactForm closeModal={modalBackdropCloseHandler} />} />}
    <div className={classes.hero_container}>
      <div className={classes.hero}>
        <div className={classes.hero_carousel}>
          <EmblaCarousel />
        </div>
        <div className={classes.hero_desc}>
          <h3>Reklaminės Vėliavos</h3>
          <p>
          Tai vėliavos kurios puikiai tinka įvairaus verslo, prekės ženklo ar bet kokio renginio reklamai. Reklaminės vėliavos gali būti naudojamos ne tik lauke įvairiais metų laikais, bet ir viduje, o lyginant su kitomis reklamos formomis jos turi nemažai privalumų, todėl yra populiarus pasirinkimas.
          Didžiuojamės, kad mūsų gaminamos Reklaminės vėliavos džiugina ne tik Lietuvos, bet ir kitų europos valstybių klientus.
          Reklaminių vėliavų gamyboje turime sukaupę ne tik didelę patirtį, bet ir nemažą klientų bei partnerių ratą, o dėka viso to galime pasiūlyti ne tik GERĄ kokybę bet ir draukišką KAINĄ.
          </p>
          <Button title="Siųsti užklausą" onClick={modalHandler} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;

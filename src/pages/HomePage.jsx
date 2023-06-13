import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import Hero from '../components/Hero';
import MuiAccordion from '../components/UI/MuiAccordion';

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Reklaminės Vėliavos</title>
      <meta name="description" content="Reklaminės vėliavos Jums ir Jūsų verslui." />
      <link rel="canonical" href="/" />
    </Helmet>

    <Hero />
    <MuiAccordion />
    </>
  )
}

export default HomePage;
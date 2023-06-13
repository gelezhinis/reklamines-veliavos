import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import Price from '../components/Price';

const PricePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Reklaminių vėliavų kainos</title>
      <meta name="description" content="Reklaminių vėliavų kainos priklauso nuo jų dydžio, kiekio ir reklaminių vėliavų priedų. Reklaminės vėliavos gali būti keturių dydžių ir penkių skirtingų formų." />
      <link rel="canonical" href="/price" />
    </Helmet>

    <Price />
    </>
  );
};

export default PricePage;
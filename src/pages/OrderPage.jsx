import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import Order from '../components/Order';

const OrderPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Reklaminių vėliavų užsakymas</title>
        <meta
          name="description"
          content="Reklamines vėliavas galite užsakyti užpildę paprastą formą. Reklaminių vėliavų maketą galite pateikti savo, arba patikėti jo sukūrimą mums."
        />
        <link rel="canonical" href="/order" />
      </Helmet>

      <Order />
    </>
  );
};

export default OrderPage;

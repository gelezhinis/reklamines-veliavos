import React,  {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <Helmet>
      <title>Susisiekime</title>
      <meta name="description" content="Susisiekite su mumis, mes aptarsime viską kas Jus domina apie reklamines vėliavas." />
      <link rel="canonical" href="/contact" />
    </Helmet>

    <Contact />
    </>
  );
};

export default ContactPage;
import React, {useEffect} from 'react';

import Hero from '../components/Hero';
import MuiAccordion from '../components/UI/MuiAccordion';

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <Hero />
    <MuiAccordion />
    </>
  )
}

export default HomePage;
import React, {useEffect} from 'react';

import Price from '../components/Price';

const PricePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Price />
  );
};

export default PricePage;
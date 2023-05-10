import React, {useEffect} from 'react'

import Order from '../components/Order';

const 
OrderPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
      <Order />
  )
}

export default 
OrderPage;
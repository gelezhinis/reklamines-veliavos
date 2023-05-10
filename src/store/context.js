import React, {useEffect, useState} from 'react';

export const Context = React.createContext({
  isMobileDevice: false
});

const ContextProvider = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const windowSizeChangeHandler = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', windowSizeChangeHandler);
    return () => {
      window.removeEventListener('resize', windowSizeChangeHandler);
    }
  }, []);

  return (
    <Context.Provider value={{isMobileDevice: width <= 768}}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
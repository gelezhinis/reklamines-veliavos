import React, {useContext} from 'react';
import {Switch, Route} from 'react-router-dom';

import { Context } from './store/context';

import MobileNavBar from './components/Navigation/MobileNavBar';
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PricePage from './pages/PricePage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
// import Background from './components/UI/Background';


function App() {
  const ctx = useContext(Context);

  return (
    <>
    {/* <Background> */}
    {ctx.isMobileDevice ? <MobileNavBar /> : <NavBar />}
    <Switch>
      <Route path="/" exact  component={HomePage} />
      <Route path="/order" component={OrderPage} />
      <Route path="/price" component={PricePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route component={NotFoundPage} />
    </Switch>
    {/* <Background /> */}
    <Footer />
    {/* </Background> */}
    </>
  );
}

export default App;

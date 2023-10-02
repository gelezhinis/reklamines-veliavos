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


function App() {
  const ctx = useContext(Context);

  return (
    <>
    {ctx.isMobileDevice ? <MobileNavBar /> : <NavBar />}
    <Switch>
      <Route path="/" exact  component={HomePage} />
      <Route path="/uzsakymai" component={OrderPage} />
      <Route path="/kainos" component={PricePage} />
      <Route path="/kontaktai" component={ContactPage} />
      <Route path="/galerija" component={GalleryPage} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;

import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';

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
    <Routes>
      <Route path="/" exact  element={<HomePage />} />
      <Route path="/uzsakymai" element={<OrderPage />} />
      <Route path="/kainos" element={<PricePage />} />
      <Route path="/kontaktai" element={<ContactPage />} />
      <Route path="/galerija" element={<GalleryPage />} />
      <Route element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

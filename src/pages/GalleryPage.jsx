import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet-async';

import ImagesGallery from '../components/ImagesGallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
     <Helmet>
      <title>Reklaminių vėliavų galerija</title>
      <meta name="description" content="Reklaminių vėliavų nuotraukų galerija. Reklaminių vėliavų pavyzdžiai. Visos reklaminės vėliavos." />
      <link rel="canonical" href="/gallery" />
    </Helmet>

    <ImagesGallery />
    </>
  );
};

export default GalleryPage;
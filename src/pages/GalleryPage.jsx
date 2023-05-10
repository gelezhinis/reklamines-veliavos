import React, {useEffect} from 'react';

import ImagesGallery from '../components/ImagesGallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <ImagesGallery />
  );
};

export default GalleryPage;
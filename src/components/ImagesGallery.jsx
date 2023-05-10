import React, {useState} from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {GALLERY_IMAGES} from '../data/gallery-data';

import './ImagesGallery.css';

const ImagesGallery = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [tempImg, setTempImg] = useState('');
  
  const getImage = (imgSrc) => {
    setTempImg(imgSrc);
    setFullScreen(true);
  }

  return (
    <>
    <div className={fullScreen ? 'model open' : 'model'}>
      <img src={tempImg} alt="" />
      <CloseIcon onClick={() => setFullScreen(false)} />
    </div>
    <div
      className="gallery"
    >
      {GALLERY_IMAGES.map((img) => {
        return (
          <div className="gallery_item" key={img.id} onClick={() => getImage(img.image)}>
          <img
            className="image"
            src={img.image}
            alt={img.desc}
            draggable="false"
          />
          <p>{img.desc}</p>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default ImagesGallery;

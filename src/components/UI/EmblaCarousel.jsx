import React, {useEffect, useRef} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import LazyLoad from 'react-lazy-load';

import flag1 from '../../img/flags/flag1.jpg';
import flag2 from '../../img/flags/flag2.jpg';
import flag3 from '../../img/flags/flag3.jpg';
import flag4 from '../../img/flags/flag4.jpg';
import flag5 from '../../img/flags/flag5.jpg';
import flag6 from '../../img/flags/flag6.jpg';
import flag7 from '../../img/flags/flag7.jpg';
import classes from './EmblaCarousel.module.css';

export const EmblaCarousel = () => {
  const emblaRef = useRef(null);
  const autoplay = Autoplay();

  useEffect(() => {
    if (emblaRef.current) {
      autoplay.init(emblaRef.current);
    }
  }, []);

  const [emblaRefInstance] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <div className={classes.embla} ref={emblaRefInstance}>
      <div className={classes.embla__container}>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag1} alt="flag1" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag2} alt="flag2" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag3} alt="flag3" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag4} alt="flag4" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag5} alt="flag5" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag6} alt="flag6" />
          </LazyLoad>
        </div>
        <div className={classes.embla__slide}>
          <LazyLoad offset={100}>
            <img src={flag7} alt="flag7" />
          </LazyLoad>
        </div>
      </div>
    </div>
  );
};

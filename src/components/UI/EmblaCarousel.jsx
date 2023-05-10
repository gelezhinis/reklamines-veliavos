import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import flag1 from '../../img/flags/flag1.jpg';
import flag2 from '../../img/flags/flag2.jpg';
import flag3 from '../../img/flags/flag3.jpg';
import flag4 from '../../img/flags/flag4.jpg';
import flag5 from '../../img/flags/flag5.jpg';
import flag6 from '../../img/flags/flag6.jpg';
import flag7 from '../../img/flags/flag7.jpg';
import classes from './EmblaCarousel.module.css';

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes()) // Access API
  //   }
  // }, [emblaApi]);

  return (
    <div className={classes.embla} ref={emblaRef}>
      <div className={classes.embla__container}>
        <div className={classes.embla__slide}><img src={flag1} alt="flag1" /></div>
        <div className={classes.embla__slide}><img src={flag2} alt="flag2" /></div>
        <div className={classes.embla__slide}><img src={flag3} alt="flag3" /></div>
        <div className={classes.embla__slide}><img src={flag4} alt="flag4" /></div>
        <div className={classes.embla__slide}><img src={flag5} alt="flag5" /></div>
        <div className={classes.embla__slide}><img src={flag6} alt="flag6" /></div>
        <div className={classes.embla__slide}><img src={flag7} alt="flag7" /></div>
      </div>
    </div>
  )
};
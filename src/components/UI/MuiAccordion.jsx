import React, { useState } from 'react';

import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useInView } from 'react-intersection-observer';

import cardS from '../../img/cards/S.jpg';
import cardM from '../../img/cards/M.jpg';
import cardL from '../../img/cards/L.jpg';
import cardXL from '../../img/cards/XL.jpg';
import found from '../../img/cards/Pagrindai.jpg';

import Card from '../UI/Card';

import classes from './MuiAccordion.module.css';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState('panel1');

  const { ref: ref1, inView: firstCardView } = useInView();
  const { ref: ref2, inView: secondCardView } = useInView();
  const { ref: ref3, inView: thirdCardView } = useInView();
  const { ref: ref4, inView: fourthCardView } = useInView();
  const { ref: ref5, inView: foundCardView } = useInView();

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  const exampleFileS = `${process.env.PUBLIC_URL}/exampleS.pdf`;
  const exampleFileM = `${process.env.PUBLIC_URL}/exampleM.pdf`;
  const exampleFileL = `${process.env.PUBLIC_URL}/exampleL.pdf`;
  const exampleFileXL = `${process.env.PUBLIC_URL}/exampleXL.pdf`;

  return (
    <>
      <Card>
        <div className={classes.title}>
          <h2>Pas mus rasite įvairių dydžių ir formų reklaminių vėliavų</h2>
          <p>
            Reklamines vėliavas siūlome rinktis iš 4-ių skirtingų dydžių - S, M,
            L ir XL bei 5-ių skirtingų formų - Convex, Straight, Angled, Concave
            ir Drop. Drop formos vėliava yra žemesnė nei visos kitos formos.
          </p>
        </div>
        <div className={classes.accordion}>
          <Accordion
            expanded={expanded === 'panel1'}
            disableGutters={true}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
          >
            <AccordionSummary
              id="panel1-header"
              area-controls="panel1-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>S dydžio vėliavos</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.img_container}>
                <img
                  ref={ref1}
                  src={cardS}
                  alt="cardS"
                  className={`${classes.img_card} ${
                    firstCardView ? classes.animate_card : ''
                  }`}
                />

                <a
                  className={`${classes.button} ${
                    firstCardView ? classes.animate_btn : ''
                  }`}
                  href={exampleFileS}
                  download
                >
                  Parsisiųsk šabloną
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            disableGutters={true}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
          >
            <AccordionSummary
              id="panel2-header"
              area-controls="panel2-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>M dydžio vėliavos</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.img_container}>
                <img
                  src={cardM}
                  alt="cardM"
                  ref={ref2}
                  className={`${classes.img_card} ${
                    secondCardView ? classes.animate_card : ''
                  }`}
                />
                <a
                  className={`${classes.button} ${
                    secondCardView ? classes.animate_btn : ''
                  }`}
                  href={exampleFileM}
                  download
                >
                  Parsisiųsk šabloną
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            disableGutters={true}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
          >
            <AccordionSummary
              id="panel3-header"
              area-controls="panel3-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>L dydžio vėliavos</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.img_container}>
                <img
                  src={cardL}
                  alt="cardL"
                  ref={ref3}
                  className={`${classes.img_card} ${
                    thirdCardView ? classes.animate_card : ''
                  }`}
                />
                <a 
                className={`${classes.button} ${
                  thirdCardView ? classes.animate_btn : ''
                }`}
                href={exampleFileL} download>
                  Parsisiųsk šabloną
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            disableGutters={true}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
          >
            <AccordionSummary
              id="panel4-header"
              area-controls="panel4-content"
              expandIcon={<ExpandMoreIcon />}
            >
              <h3>XL dydžio vėliavos</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.img_container}>
                <img
                  src={cardXL}
                  alt="cardXL"
                  ref={ref4}
                  className={`${classes.img_card} ${
                    fourthCardView ? classes.animate_card : ''
                  }`}
                />
                <a
                  className={`${classes.button} ${
                    fourthCardView ? classes.animate_btn : ''
                  }`}
                  href={exampleFileXL}
                  download
                >
                  Parsisiųsk šabloną
                </a>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </Card>
      <Card>
        <div className={classes.title}>
          <h3>
            Taip pat galėsite pasirinkti Jums tinkamiausią vėliavos pagrindą ir
            kitus priedus
          </h3>
        </div>
        <div className={classes.foundation}>
          <img
            src={found}
            alt="foundation"
            ref={ref5}
            className={`${classes.img_card} ${
              foundCardView ? classes.animate_found_card : ''
            }`}
          />
        </div>
      </Card>
    </>
  );
};

export default MuiAccordion;

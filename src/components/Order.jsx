import React from 'react';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BackupTableIcon from '@mui/icons-material/BackupTable';

import OrderForm from './OrderForm';
import Card from './UI/Card';

import classes from './Order.module.css';

const Order = () => {
  return (
    <>
      <Card>
        <OrderForm />
      </Card>
      <Card>
        <div className={classes.delivery_container}>
          <div className={classes.delivery}>
            <div className={classes.delivery_column}>
              <div className={classes.icon_container}>
                <BackupTableIcon />
              </div>
              <p>
                Nesudėtingus maketus galime paruošti NEMOKAMAI. Taip pat
                pakoreguoti Jūsų turimus.
              </p>
            </div>
            <div className={classes.delivery_column}>
              <div className={classes.icon_container}>
                <LocalShippingIcon />
              </div>
              <p>
                NEMOKAMAS pristatymas visoje Lietuvoje per 4-5 darbo dienas nuo
                užsakymo
              </p>
            </div>
          </div>
          <div className={classes.conditions}>
            <p>
              *Nesudėtingus maketus paruošiame NEMOKAMAI jeigu pateikiami
              tinkamo formato failai/logo. Paruošiamas 1-2 variantai ir
              atliekamos 1-2 korekcijos.
            </p>
            <p>
              *NEMOKAMAS užsakymo pristatymas Lietuvos didžiuosiuose miestuose
              vienu adresu. Užsakant ne mažiau 2-jų vėliavų kompletus su
              pagrindais. Užsakant vėliavas be pagrindų ar atskirai tik
              pagrindus, pristatymas kainuoja papildomai.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Order;

import React from 'react';
import './HowPage.scss';
import Sidemap from '../components/Sidemap';
import { howItWorks } from '../data';

const HowPage = () => {
  return (
    <div className='how'>
      <div className='how__container'>
        <h1 className='how__title'>
          How it works
          <div className='how__box'></div>
        </h1>
        <div className='how__info'>
          Choose your plan - Schedule cuisines - Delivered safely to your door
        </div>

        <div className='how__articles'>+</div>
      </div>

      <Sidemap />
    </div>
  );
};

export default HowPage;

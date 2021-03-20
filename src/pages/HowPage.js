import React from 'react';
import './HowPage.scss';
import Sidemap from '../components/Sidemap';
import { howItWorks } from '../data';
import ArticleHow from '../components/ArticleHow';

const HowPage = () => {
  return (
    <div className='how'>
      <div className='how__container'>
        <h1 className='how__title'>
          How it works
          <div className='how__box'></div>
        </h1>
        <p className='how__info'>
          Choose your plan - Make a schedule - Delivered safely to your door
        </p>

        <div className='how__articles'>
          {howItWorks.map((item) => {
            return <ArticleHow key={item.id} {...item} />;
          })}
        </div>
      </div>

      <Sidemap />
    </div>
  );
};

export default HowPage;

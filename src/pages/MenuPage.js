import React from 'react';
import Sidemap from '../components/Sidemap';
import './MenuPage.scss';
import { foodMenu } from '../data';

const MenuPage = () => {
  return (
    <div className='menu'>
      <div className='menu__container'>
        <h1 className='menu__containerTitle'>
          Our Menu
          <div className='menu__box'></div>
        </h1>
        <p className='menu__containerSub'>
          Discover the flavors that suit your personal taste:
        </p>

        <div className='menu__containerMenu'>
          {foodMenu.map((item) => {
            const { id, title, img, description, price } = item;
            return (
              <article key={id}>
                <img src={img} alt={title} />
                <div className='info'>
                  <h3>{title}</h3>
                  <p>£{price}</p>
                </div>
                <p className='info__description'>
                  {description.substring(0, 200)}...
                </p>
                <button>Subscribe</button>
              </article>
            );
          })}
        </div>
      </div>

      <Sidemap />
    </div>
  );
};

export default MenuPage;

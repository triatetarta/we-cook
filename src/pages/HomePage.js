import React from 'react';
import Sidemap from '../components/Sidemap';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='homepage__container'>
        <h1 className='homepage__title'>
          Taste of Fresh
          <div className='homepage__box'></div>
        </h1>
        <p className='homepage__subtitle'>
          The world-wide healthy food subscription service, <br /> a
          multicultular taste with just a Click.
        </p>

        <div className='homepage__backgroundImage'>
          <img
            src={process.env.PUBLIC_URL + '/assets/background.jpg'}
            alt='homepage background'
          />
          <div className='homepage__backgroundImageBox'></div>
        </div>
        <form>
          <input type='text' placeholder='Enter Your Email' />
          <button type='submit'>Start Here</button>
        </form>
      </div>

      <Sidemap />
    </div>
  );
};

export default HomePage;

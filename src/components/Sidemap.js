import React from 'react';
import './Sidemap.scss';

const Sidemap = () => {
  return (
    <div
      className='sidemap'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL + '/assets/map.png'}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    ></div>
  );
};

export default Sidemap;

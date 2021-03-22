import React from 'react';
import './Plans.scss';

const Plans = () => {
  return (
    <div className='plans'>
      <br />
      <p>
        Renewal date: {` `}
        {new Date().getFullYear()}
      </p>

      <div className='plans__plan'>
        <div className='plan__info'>
          <h5>name</h5>
          <h6>description</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Plans;

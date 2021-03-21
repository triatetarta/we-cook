import React from 'react';
import './Account.scss';

const Account = () => {
  return (
    <div className='account'>
      <div className='account__container'>
        <h3 className='account__title'>Edit Profile:</h3>
        <div className='account__info'>
          <img
            src={process.env.PUBLIC_URL + '/assets/wecook.png'}
            alt='profile pic'
          />
          <div className='account__details'>
            <h4 className='account__detailsTitle'>
              threequartersdev@gmail.com
            </h4>
            <div className='account__plans'>
              <h3>Plans</h3>
              {/* Plans Component */}

              <button className='account__signoutButton'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

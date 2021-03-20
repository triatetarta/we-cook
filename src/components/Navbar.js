import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__leftContainer'>
          <div className='navbar__logoContainer'>
            <img
              src={process.env.PUBLIC_URL + '/assets/wecook.png'}
              alt='we cook logo'
            />
            <h2 className='navbar__logoText'>WE COOK</h2>
          </div>

          <ul className='navbar__menu'>
            <li>Menu</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Account</li>
          </ul>
        </div>
        <div className='navbar__space'></div>
      </div>
    </nav>
  );
};

export default Navbar;

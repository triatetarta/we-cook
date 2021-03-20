import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <p>&copy; {new Date().getFullYear()} WE COOK</p>
          <ul>
            <li>Policy</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className='footer__right'>
          <p>IG</p>
          <p>FB</p>
          <p>TW</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

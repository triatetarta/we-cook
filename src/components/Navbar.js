import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__leftContainer'>
          <div className='navbar__logoContainer'>
            <img
              onClick={() => history.push('/')}
              src={process.env.PUBLIC_URL + '/assets/wecook.png'}
              alt='we cook logo'
            />
            <h2 onClick={() => history.push('/')} className='navbar__logoText'>
              WE COOK
            </h2>
          </div>

          <ul className='navbar__menu'>
            <li onClick={() => history.push('/menu')}>Menu</li>
            <li onClick={() => history.push('/how')}>How It Works</li>
            <li
              onClick={() => history.push('/login')}
              className='navbar__menuAccount'
            >
              Log In
            </li>
          </ul>
        </div>
        <div className='navbar__space'></div>
      </div>
    </nav>
  );
};

export default Navbar;

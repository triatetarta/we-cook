import React from 'react';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.scss';

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
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

            {!isAuthenticated ? (
              <li
                onClick={() => history.push('/login')}
                className='navbar__menuAccount'
              >
                Sign In
              </li>
            ) : (
              <li
                onClick={() => history.push('/login')}
                className='navbar__menuAccountUser'
              >
                Account
                <ul className='navbar__menuDropdown'>
                  <li onClick={() => history.push('/login')}>Account</li>
                  <li onClick={() => dispatch(logoutUser())}>Sign Out</li>
                </ul>
              </li>
            )}
          </ul>
        </div>
        <div className='navbar__space'></div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { userLogout } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.scss';

const Navbar = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.user);

  console.log(user);

  const dispatch = useDispatch();

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

            {!user ? (
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
                  <li onClick={() => dispatch(userLogout())}>Sign Out</li>
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

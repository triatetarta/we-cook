import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import ErrorIcon from '@material-ui/icons/Error';
import './Account.scss';
import Plans from './Plans';

const Account = () => {
  const { logoutError } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className='account'>
      <div className='account__container'>
        <h3 className='account__title'>Edit Profile</h3>
        <div className='account__info'>
          <img
            src={process.env.PUBLIC_URL + '/assets/wecook.png'}
            alt='profile pic'
          />
          <div className='account__details'>
            {logoutError && (
              <p className='account__detailsError'>
                <ErrorIcon />
                Couldn't sign you out, try again!
              </p>
            )}
            <h4 className='account__detailsTitle'>
              threequartersdev@gmail.com
            </h4>
            <div className='account__plans'>
              <h3>Plans</h3>
              <Plans />

              <button
                onClick={() => dispatch(logoutUser())}
                className='account__signoutButton'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

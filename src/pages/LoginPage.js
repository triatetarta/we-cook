import React from 'react';
import Sidemap from '../components/Sidemap';
import SignIn from '../components/SignIn';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className='login'>
      <div className='login__container'>
        <SignIn />
      </div>

      <Sidemap />
    </div>
  );
};

export default LoginPage;

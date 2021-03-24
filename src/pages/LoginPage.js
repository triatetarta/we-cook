import React from 'react';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import Sidemap from '../components/Sidemap';
import SignForm from '../components/SignForm';
import './LoginPage.scss';

const LoginPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className='login'>
      <div className='login__container'>
        {isAuthenticated ? <Account /> : <SignForm />}
      </div>
      <Sidemap />
    </div>
  );
};

export default LoginPage;

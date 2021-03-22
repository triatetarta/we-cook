import React from 'react';
import Account from '../components/Account';
import Sidemap from '../components/Sidemap';
import SignForm from '../components/SignForm';
import { useSelector } from 'react-redux';
import './LoginPage.scss';

const LoginPage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className='login'>
      <div className='login__container'>
        {user ? <Account /> : <SignForm />}
      </div>
      <Sidemap />
    </div>
  );
};

export default LoginPage;

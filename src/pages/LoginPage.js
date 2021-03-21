import React from 'react';
import Account from '../components/Account';
import Sidemap from '../components/Sidemap';
import SignForm from '../components/SignForm';
import './LoginPage.scss';

const LoginPage = ({ user, setUser }) => {
  return (
    <div className='login'>
      <div className='login__container'>
        {user ? <Account /> : <SignForm user={user} setUser={setUser} />}
      </div>
      <Sidemap />
    </div>
  );
};

export default LoginPage;

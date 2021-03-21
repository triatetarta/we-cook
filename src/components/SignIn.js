import React from 'react';
import './SignIn.scss';

const SignIn = () => {
  return (
    <div className='signIn'>
      <div className='signIn__container'>
        <h1 className='signIn__title'>Sign In</h1>
        <form>
          <input type='text' placeholder='Enter Email' />
          <input type='password' placeholder='Enter Password' />
          <button className='login__button'>Sign In</button>
        </form>
        <p className='signIn__bottomText'>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

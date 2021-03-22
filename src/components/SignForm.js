import React, { useState } from 'react';
import './SignForm.scss';

const SignIn = ({ user, setUser }) => {
  const [signUp, setSignUp] = useState(false);

  const handleSign = (e) => {
    e.preventDefault();

    if (!user) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    setSignUp(true);
  };

  return (
    <div className='signForm'>
      {!signUp ? (
        <div className='signForm__container'>
          <h1 className='signForm__title'>{user ? 'Sign Out' : 'Sign In'}</h1>
          <form>
            <input type='text' placeholder='Enter Email' />
            <input type='password' placeholder='Enter Password' />
            <button
              type='submit'
              onClick={handleSign}
              className='login__button'
            >
              {user ? 'Sign Out' : 'Sign In'}
            </button>
          </form>
          {!user && (
            <p className='signForm__bottomText'>
              Don't have an account? <span onClick={handleSignUp}>Sign Up</span>
            </p>
          )}
        </div>
      ) : (
        <div className='signForm__container'>
          <h1 className='signForm__title'>Sign Up</h1>
          <form>
            <input type='text' placeholder='Enter Email' />
            <input type='password' placeholder='Enter Password' />
            <button
              type='submit'
              onClick={handleSign}
              className='login__button'
            >
              Sign Up
            </button>
          </form>
          <p className='signForm__bottomText'>
            Already have an account?{' '}
            <span onClick={() => setSignUp(false)}>Sign In</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignIn;

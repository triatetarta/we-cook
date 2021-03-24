import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SignForm.scss';

const SignIn = () => {
  const user = false;

  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const handleSign = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='signForm'>
      {!signUp ? (
        <div className='signForm__container'>
          <h1 className='signForm__title'>{user ? 'Sign Out' : 'Sign In'}</h1>
          <form>
            <input ref={emailRef} type='text' placeholder='Enter Email' />
            <input
              ref={passwordRef}
              type='password'
              placeholder='Enter Password'
            />
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
          {error && <p>{error}</p>}
          <form>
            <input
              ref={emailRef}
              type='text'
              placeholder='Enter Email'
              required
            />
            <input
              ref={passwordRef}
              type='password'
              placeholder='Enter Password'
              required
            />
            <input
              ref={passwordConfirmRef}
              type='password'
              placeholder='Confirm Password'
              required
            />
            <button
              type='submit'
              onClick={handleSignUpSubmit}
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

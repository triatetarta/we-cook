import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, signUpUser } from '../actions/authActions';
import './SignForm.scss';

const SignIn = () => {
  const { isAuthenticated, loginError } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    dispatch(signUpUser(email, password));
  };

  return (
    <div className='signForm'>
      {!isAuthenticated && !signUp ? (
        <div className='signForm__container'>
          <h1 className='signForm__title'>
            {isAuthenticated ? 'Sign Out' : 'Sign In'}
          </h1>
          <form>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Enter Email'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter Password'
            />
            <button
              type='submit'
              onClick={handleSignIn}
              className='login__button'
            >
              {isAuthenticated ? 'Sign Out' : 'Sign In'}
            </button>
          </form>
          {!isAuthenticated && (
            <p className='signForm__bottomText'>
              Don't have an account?{' '}
              <span onClick={() => setSignUp(true)}>Sign Up</span>
            </p>
          )}
        </div>
      ) : (
        <div className='signForm__container'>
          <h1 className='signForm__title'>Sign Up</h1>
          {loginError && <p>{loginError}</p>}
          <form>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='text'
              placeholder='Enter Email'
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='Enter Password'
              required
            />
            <input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type='password'
              placeholder='Confirm Password'
              required
            />
            <button
              type='submit'
              onClick={handleSignUp}
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

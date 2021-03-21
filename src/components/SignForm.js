import React from 'react';
import './SignForm.scss';

const SignIn = ({ user, setUser }) => {
  const handleSign = (e) => {
    e.preventDefault();

    if (!user) {
      setUser(true);
    } else {
      setUser(false);
    }
  };

  return (
    <div className='signForm'>
      <div className='signForm__container'>
        <h1 className='signForm__title'>{user ? 'Sign Out' : 'Sign In'}</h1>
        <form>
          <input type='text' placeholder='Enter Email' />
          <input type='password' placeholder='Enter Password' />
          <button type='submit' onClick={handleSign} className='login__button'>
            {user ? 'Sign Out' : 'Sign In'}
          </button>
        </form>
        {!user && (
          <p className='signForm__bottomText'>
            Don't have an account? <span>Sign Up</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SignIn;

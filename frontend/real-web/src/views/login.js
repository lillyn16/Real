import React from 'react';
import '../styles/login.css'
import flourishPurple from '../styles/flourish-purple.png'

const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='login-background'>
        <div className='login-content'>
          <div className='login-header'>
            let's keep it REAL
          </div>
          <div className='login-form'>
            <div className='input-container'>
              <label>username</label>
              <input type='text' id='username' name='username'></input>
            </div>
            <div className='input-container'>
              <label>password</label>
              <input type='text' id='password' name='password'></input>
            </div>
            <div className='submit-button-container'>
              <a>forgot password?</a>
              <button type='button'>log in</button>
            </div>
            <hr className='break' />
            <div className='new-user-container'>
              <div className='new-user-label'>
                  don't have an account?
              </div>
              <div className='sign-up-button-container'>
                <button type='button'>sign up</button>
              </div>
            </div>
          </div>
        </div>
        <div className='background-image'>
          <img src={flourishPurple} alt='Flourish purple' />
        </div>
      </div>
      <div className='login-footer'>
        <div className='footer-text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
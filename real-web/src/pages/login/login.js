import React, { useState } from 'react';
import './login.css'
import flourishPurpleImg from '../../images/flourish-purple.png'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setMessage] = useState('');

  const login = async (e) => {
    navigate('/welcome');

    // e.preventDefault();

    // try {
    //   const response = await axios.post('http://localhost:5154/api/auth/login', {
    //     username,
    //     password,
    //   });

    //   // Assuming your backend returns a success message or user data
    //   setMessage('Login successful!');
    //   navigate('/home');

    // } catch (error) {
    //   // Improved error handling with Axios
    //   if (error.response) {
    //     // Server responded with a status other than 200 range
    //     setMessage(`Login failed: ${error.response.data}`);
    //   } else {
    //     // Network error or request setup error
    //     setMessage(`Error: ${error.message}`);
    //   }
    // }
  };

  const createAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className='login-container'>
        <div className='login-background'>
          <div className='login-content'>
            <div className='login-header'>
              let's keep it REAL
            </div>
            <div className='login-form'>
              <div className='login-input-container'>
                <label>username</label>
                <input className='real-input' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              <div className='login-input-container'>
                <label>password</label>
                <input className='real-input' type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='submit-button-container'>
                <Link to="/forgot-password">forgot password?</Link>
                <button className='real-button' type='button' onClick={login}>log in</button>
              </div>
              {errorMessage && <div className='error-message'>{errorMessage}</div>}
              <hr className='break' />
              <div className='new-user-container'>
                <div className='new-user-label'>
                    don't have an account?
                </div>
                <div className='sign-up-button-container'>
                  <button className='real-button' type='button' onClick={createAccount}>sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className='background-image'>
            <img className='vines-img' src={flourishPurpleImg} alt='Flourish purple' />
          </div>
        </div>
        <div className='login-footer'>
          <div className='footer-text'>
            REAL empowers you to track your menstrual cycle confidently, without sacrificing your privacy. 
            We prioritize protecting your personal data while providing meaningful insights to help you stay 
            on top of your health. Our goal is to support women in understanding their bodies better, fostering 
            wellness, and giving you the tools to manage your cycle with ease.
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
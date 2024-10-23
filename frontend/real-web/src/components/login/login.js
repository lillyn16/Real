import React, {useState} from 'react';
import './login.css'
import flourishPurpleImg from '../../images/flourish-purple.png'
import { useNavigate, Link } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.Token); // Store token in localStorage
        navigate('/forgot-password'); // Redirect
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Something went wrong in sending to backend.');
    }
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
              <div className='input-container'>
                <label>username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
              <div className='input-container'>
                <label>password</label>
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              <div className='submit-button-container'>
                <Link to="/forgot-password">forgot password?</Link>
                <button type='button' onClick={login}>log in</button>
              </div>
              {errorMessage && <div className='error-message'>{errorMessage}</div>}
              <hr className='break' />
              <div className='new-user-container'>
                <div className='new-user-label'>
                    don't have an account?
                </div>
                <div className='sign-up-button-container'>
                  <button type='button' onClick={createAccount}>sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className='background-image'>
            <img src={flourishPurpleImg} alt='Flourish purple' />
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
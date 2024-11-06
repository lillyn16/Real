import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './create-account.css';
import '../../stylesheet.css'
import axios from 'axios';

const CreateAccountPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  // const [securityQuestion, setSecurityQuestion] = useState('');
  // const [securityAnswer, setSecurityAnswer] = useState('');

  const createUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5154/api/auth/register', userData);
      console.log('User created successfully:', response.data);
    } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="create-account-container">
        <div className='create-account-header'>Create Account</div>
        <form>
            <label htmlFor="Username">Username:</label><br />
            <input className="textbox" type="text" value={username} 
              onChange={(e) => setUsername(e.target.value)} /><br />

            <label htmlFor="Password">Password:</label><br />
            <input className="textbox" type="password" value={password} 
              onChange={(e) => setPassword(e.target.value)}  /><br />

            <label htmlFor="ConPass">Confirm Password:</label><br />
            <input className="textbox" type="password" value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)} /><br />

            <label htmlFor="SecurityQ">Security Question:</label><br />
            <select className="textbox" id="SecurityQ" name="SecurityQ">
            <option value="Q1">What is your favorite color?</option>
            <option value="Q2">What is your mother's maiden name?</option>
            <option value="Q3">What was your first pet's name?</option>
            <option value="Q4">What street did you grow up on?</option>
            </select><br />

            <label htmlFor="Answer">Answer:</label><br />
            <input className="textbox" type="text" id="Answer" name="Answer" /><br />

            <label htmlFor="ConAnswer">Confirm Answer:</label><br />
            <input className="textbox" type="text" id="ConAnswer" name="ConAnswer" /><br />

            <div className="decision">
            <div className="return">
                <Link to="/login" className="return">Back to Login</Link>
            </div>
            <button className='real-button' type='button' onClick={createUser}>create</button>
            </div>
        </form>
        {/* <img className="vines" src="/images/vines.png" alt="Vines" /> */}
    </div>
  );
};

export default CreateAccountPage;
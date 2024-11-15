import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './create-account.css';
import '../../stylesheet.css';
import axios from 'axios';

const CreateAccountPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const createUser = async () => {
    const userData = {
      username,
      password,
      securityQuestion,
      securityAnswer,
    };

    console.log(userData);

    try {
      const response = await axios.post('http://localhost:5154/api/Auth/register', userData);
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-header">Create Account</div>
      <form className='create-account-form'>
        <label htmlFor="username">Username</label><br />
        <input
          className="textbox"
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />

        <label htmlFor="password">Password</label><br />
        <input
          className="textbox"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <label htmlFor="passwordConfirm">Confirm Password</label><br />
        <input
          className="textbox"
          id="passwordConfirm"
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        /><br />

        <label htmlFor="securityQuestion">Security Question</label><br />
        <select
          className="textbox"
          id="securityQuestion"
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
        >
          <option value="" disabled>
            -- Select a question --
          </option>
          <option value="Q1">What is your favorite color?</option>
          <option value="Q2">What is your mother's maiden name?</option>
          <option value="Q3">What was your first pet's name?</option>
          <option value="Q4">What street did you grow up on?</option>
        </select><br />

        <label htmlFor="securityAnswer">Security Answer</label><br />
        <input
          className="textbox"
          id="securityAnswer"
          type="text"
          value={securityAnswer}
          onChange={(e) => setSecurityAnswer(e.target.value)}
        /><br />

        <div className="button-container">
          <div className="return">
            <Link to="/login" className="return">Back to Login</Link>
          </div>
          <button
            className="real-button"
            type="button"
            onClick={createUser}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountPage;

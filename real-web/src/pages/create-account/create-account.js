import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './create-account.css';
import '../../stylesheet.css';
import { registerUser } from '../../services/api';

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');

  const createUser = async () => {
    const userRequest = {
      username,
      password,
      securityQuestion,
      securityAnswer,
    };

    try {
      const result = await registerUser(userRequest);
      console.log('User created successfully:', result);
      navigate('/welcome');
    } catch (error) {
      console.error('Error creating user');
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-header">Create Account</div>
      <form className='create-form-container'>
        <div className='create-input-container'>
          <label>username</label>
          <input
            className="real-input"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='create-input-container'>
          <label htmlFor="password">password</label>
          <input
            className="real-input"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='create-input-container'>
          <label htmlFor="passwordConfirm">confirm password</label>
          <input
            className="real-input"
            id="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className='create-input-container'>
          <label htmlFor="securityQuestion">security question</label>
          <select
            className="real-input"
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
          </select>
        </div>

        <div className='create-input-container'>
          <label htmlFor="securityAnswer">security answer</label>
          <input
            className="real-input"
            id="securityAnswer"
            type="text"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
        </div>

        <div className="button-container">
          <div className="return">
            <Link to="/login" className="return">back to login</Link>
          </div>
          <button
            className="real-button"
            type="button"
            onClick={createUser}
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountPage;

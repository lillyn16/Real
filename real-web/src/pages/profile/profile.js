import React, { useState } from 'react';
import './profile.css'

const ProfilePage = () => {
    const [username, setUsername] = useState('exampleUsername');
    const [securityQuestion, setSecurityQuestion] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    const updateProfile = async () => {

    }

    return (
        <div className='profile-container'>
            <h1 className='profile-header'>Profile</h1>
            <div className='profile-form'>
                <div className='profile-input-container'>
                    <label>username</label>
                    <input className='real-input' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='profile-input-container'>
                    <label htmlFor="securityQuestion">security question</label>
                    <select
                        className="security-question-select"
                        id="securityQuestion"
                        value={securityQuestion}
                        onChange={(e) => setSecurityQuestion(e.target.value)}>
                        <option className='select-option' value="Q1">What is your favorite color?</option>
                        <option className='select-option' value="Q2">What is your mother's maiden name?</option>
                        <option className='select-option' value="Q3">What was your first pet's name?</option>
                        <option className='select-option' value="Q4">What street did you grow up on?</option>
                    </select>
                </div>
                <div className='profile-input-container'>
                    <label>answer</label>
                    <input className='real-input' type='text' value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)}></input>
                </div>
                <div className='update-button-container'>
                    <button className="real-button"
                        type="button"
                        onClick={updateProfile}>
                        update profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
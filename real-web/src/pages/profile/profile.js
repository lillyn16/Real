import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css'

const ProfilePage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('exampleUsername');

    const logout = () => {
        navigate('/login');
    };

    const updateProfile = async () => {

    }

    return (
        <div className='profile-container'>
            <h1 className='profile-header'>Profile</h1>
            <div className='profile-form'>
                <div className='logout-button-container'>
                    <button className="real-button"
                        type="button"
                        onClick={logout}>
                        log out
                    </button>
                </div>
                <div className='profile-input-container'>
                    <label>username</label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
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
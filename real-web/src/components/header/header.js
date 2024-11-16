import React, { useState } from 'react';
import './header.css';
import logoLight from '../../images/logoLight.png';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();


    const updateProfile = () => {
        // Add logout logic here 
        navigate('/profile'); // Redirect to login page
    };

    const changePassword = () => {
        // Add logout logic here 
        navigate('/forgot-password'); // Redirect to login page
    };

    const logout = () => {
        // Add logout logic here 
        navigate('/login'); // Redirect to login page
    };

  return (
    <header>
        <div className='logo-container'>
            <img className="logo" src={logoLight} alt="logo" />
            <div className='website-name'>REAL</div>
        </div>
        <div className='page-tabs'>
            <Link className='tab' to='/home'>Home</Link>
            <Link className='tab' to='/calendar'>Calendar</Link>
            <Link className='tab' to='/learn'>Learn</Link>
            <Link className='tab' to='/about-us'>About</Link>
            {/* <Link className='tab' to='/profile'>Profile</Link> */}
            <div className="tab">
                <button className="dropdown-toggle" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >Profile</button>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    {/* <Link to="/profile" className="dropdown-item">Profile</Link> */}
                    <button onClick={updateProfile} className="dropdown-item">update profile</button>
                    <button onClick={changePassword} className="dropdown-item">change password</button>
                    {/* <Link to="/forgot-password" className="dropdown-item">Change Password</Link> */}
                    <button onClick={logout} className="dropdown-item">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        logout
                    </button>
                </div>
                )}
            </div>
        </div>
        {/* <a class="selected" href="/html/HOME.html">Home</a>
        <a href="/html/calendar.html">Calendar</a>
        <a href="/html/blog.html">Blog</a>
        <a href="/html/aboutus.html">About</a>
        <a href="/html/account.html">Account</a> */}
    </header>
  );
};

export default Header;
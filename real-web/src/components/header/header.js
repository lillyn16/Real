import React, { useState, useRef } from 'react';
import './header.css';
import logoLight from '../../images/logoLight.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const location = useLocation();
    const showTabs = location.pathname !== '/create-account' && location.pathname !== '/welcome';

    const closeDropdown = (e) => {
        if (isDropdownOpen && !dropdownRef.current?.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    }
    document.addEventListener('mousedown', closeDropdown)


    const updateProfile = () => {
        setIsDropdownOpen(false); 
        navigate('/profile');
    };

    const changePassword = () => {
        setIsDropdownOpen(false); 
        navigate('/forgot-password');
    };

    const logout = () => {
        setIsDropdownOpen(false); 
        navigate('/login');
    };

  return (
    <header>
        <div className='logo-container'>
            <img className="logo" src={logoLight} alt="logo" />
            <div className='website-name'>REAL</div>
        </div>
        {showTabs && <div className='page-tabs'>
            <Link className='tab' to='/home'>Home</Link>
            <Link className='tab' to='/calendar'>Calendar</Link>
            <Link className='tab' to='/learn'>Learn</Link>
            <Link className='tab' to='/about-us'>About</Link>
            <div className="tab button" ref={dropdownRef}>
                <button className="dropdown-toggle" 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    Profile
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    <button onClick={updateProfile} className="dropdown-item">update profile</button>
                    <hr className='dropdown-hr'></hr>
                    <button onClick={changePassword} className="dropdown-item">change password</button>
                    <hr className='dropdown-hr'></hr>
                    <button onClick={logout} className="dropdown-item">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                        logout
                    </button>
                </div>
                )}
            </div>
        </div>}
    </header>
  );
};

export default Header;
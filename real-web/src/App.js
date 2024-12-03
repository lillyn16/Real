import './App.css';
import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/login/login';
import CreateAccountPage from './pages/create-account/create-account';
import ForgotPasswordPage from './pages/forgot-password/forgot-password';
import AboutUsPage from './pages/about-us/about-us';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import HomePage from './pages/home/home';
import ProfilePage from './pages/profile/profile';
import CalendarPage from './pages/calendar/calendar';
import EducationPage from './pages/education/education';
import WelcomePage from './pages/welcome/welcome';
import SymptomsPage from './pages/symptoms/symptoms';
import { checkSession } from './services/api';


function App() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/login';
  const skipSessionCheck = location.pathname === '/login' || location.pathname === '/create-account' || location.pathname === '/welcome'
  const navigate = useNavigate();

  // useEffect(() => {
  //     const verifySession = async () => {
  //         try {
  //           if (skipSessionCheck) {
  //               return;
  //           }
  //             await checkSession();
  //             console.log('Session is valid');
  //         } catch (error) {
  //             console.error('Session expired:', error);
  //             navigate('/login'); // back to login if session is expired
  //         }
  //     };

  //     verifySession();
  // }, [navigate]);

  return (
      <div className='real-app-container'>
        <div className='real-header'>
          {showHeaderAndFooter && <Header />}
        </div>
        <div className='real-body'>
          <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/create-account' element={<CreateAccountPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/learn' element={<EducationPage />} />
            <Route path='/welcome' element={<WelcomePage />} />
            <Route path='/symptoms' element={<SymptomsPage />} />
          </Routes>
        </div>
        <div className='real-footer'>
          {showHeaderAndFooter && <Footer />}
        </div>
      </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
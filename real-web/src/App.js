// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import LoginPage from './pages/login/login';
import CreateAccountPage from './pages/create-account/create-account';
import ForgotPasswordPage from './pages/forgot-password/forgot-password';
import AboutUsPage from './pages/about-us/about-us';
import Footer from './components/footer/footer';
import Header from './components/header/header';


function App() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/login';

  return (
      <div>
        {showHeaderAndFooter && <Header />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />

        </Routes>
        {showHeaderAndFooter && <Footer />}
      </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

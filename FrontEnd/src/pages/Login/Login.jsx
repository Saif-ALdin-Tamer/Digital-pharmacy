import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaCapsules, FaShoppingBag, FaHeartbeat, FaPills } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [langOpen, setLangOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-page__left">
        <div className="login-page__left-content">
          <div className="login-deco login-deco--circle-1"></div>
          <div className="login-deco login-deco--circle-2"></div>
          <div className="login-deco login-deco--circle-3"></div>
          <div className="login-deco login-deco--dots">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="login-deco__dot"></span>
            ))}
          </div>

          <div className="login-phone">
            <div className="login-phone__notch"></div>
            <div className="login-phone__screen">
              <div className="login-phone__header">
                <FaCapsules className="login-phone__logo-icon" />
                <span className="login-phone__logo-text">Digital Pharmacy</span>
              </div>
              <div className="login-phone__search">
                <div className="login-phone__search-bar">Search medicines...</div>
              </div>
              <div className="login-phone__cards">
                <div className="login-phone__card login-phone__card--1">
                  <FaHeartbeat className="login-phone__card-icon" />
                  <div className="login-phone__card-lines">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="login-phone__card login-phone__card--2">
                  <FaPills className="login-phone__card-icon" />
                  <div className="login-phone__card-lines">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="login-phone__btn-row">
                <div className="login-phone__btn"></div>
                <div className="login-phone__btn login-phone__btn--outline"></div>
              </div>
            </div>
          </div>

          <div className="login-bag">
            <FaShoppingBag className="login-bag__icon" />
          </div>
        </div>
      </div>

      <div className="login-page__right">
        <div className="login-topbar">
          <div className="login-lang" onClick={() => setLangOpen(!langOpen)}>
            <span className="login-lang__text">EN</span>
            <FaChevronDown className="login-lang__arrow" />
            {langOpen && (
              <div className="login-lang__dropdown">
                <button className="login-lang__option" type="button">EN</button>
                <button className="login-lang__option" type="button">AR</button>
                <button className="login-lang__option" type="button">FR</button>
              </div>
            )}
          </div>
          <div className="login-tabs">
            <Link to="/login" className="login-tab login-tab--active">Sign In</Link>
            <Link to="/signup" className="login-tab">Sign Up</Link>
          </div>
        </div>

        <div className="login-form-wrapper">
          <h1 className="login-heading">Welcome Back!</h1>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label className="login-field__label" htmlFor="login-email">
                Email/Phone Number
              </label>
              <input
                id="login-email"
                className="login-field__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or phone number"
                autoComplete="email"
              />
            </div>

            <div className="login-field">
              <label className="login-field__label" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                className="login-field__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <div className="login-forgot">
              <Link to="/forgot-password" className="login-forgot__link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>
          </form>

          <div className="login-divider">
            <span className="login-divider__line"></span>
            <span className="login-divider__text">Or</span>
            <span className="login-divider__line"></span>
          </div>

          <Link to="/" className="login-guest-btn">
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaCapsules, FaShoppingBag, FaHeartbeat, FaPills } from 'react-icons/fa';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [langOpen, setLangOpen] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-page">
      <div className="signup-page__left">
        <div className="signup-page__left-content">
          <div className="signup-deco signup-deco--circle-1"></div>
          <div className="signup-deco signup-deco--circle-2"></div>
          <div className="signup-deco signup-deco--circle-3"></div>
          <div className="signup-deco signup-deco--dots">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="signup-deco__dot"></span>
            ))}
          </div>

          <div className="signup-phone">
            <div className="signup-phone__notch"></div>
            <div className="signup-phone__screen">
              <div className="signup-phone__header">
                <FaCapsules className="signup-phone__logo-icon" />
                <span className="signup-phone__logo-text">Digital Pharmacy</span>
              </div>
              <div className="signup-phone__search">
                <div className="signup-phone__search-bar">Search medicines...</div>
              </div>
              <div className="signup-phone__cards">
                <div className="signup-phone__card signup-phone__card--1">
                  <FaHeartbeat className="signup-phone__card-icon" />
                  <div className="signup-phone__card-lines">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="signup-phone__card signup-phone__card--2">
                  <FaPills className="signup-phone__card-icon" />
                  <div className="signup-phone__card-lines">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div className="signup-phone__btn-row">
                <div className="signup-phone__btn"></div>
                <div className="signup-phone__btn signup-phone__btn--outline"></div>
              </div>
            </div>
          </div>

          <div className="signup-bag">
            <FaShoppingBag className="signup-bag__icon" />
          </div>
        </div>
      </div>

      <div className="signup-page__right">
        <div className="signup-topbar">
          <div className="signup-lang" onClick={() => setLangOpen(!langOpen)}>
            <span className="signup-lang__text">EN</span>
            <FaChevronDown className="signup-lang__arrow" />
            {langOpen && (
              <div className="signup-lang__dropdown">
                <button className="signup-lang__option" type="button">EN</button>
                <button className="signup-lang__option" type="button">AR</button>
                <button className="signup-lang__option" type="button">FR</button>
              </div>
            )}
          </div>
          <div className="signup-tabs">
            <Link to="/login" className="signup-tab">Sign In</Link>
            <Link to="/signup" className="signup-tab signup-tab--active">Sign Up</Link>
          </div>
        </div>

        <div className="signup-form-wrapper">
          <h1 className="signup-heading">Create Account!</h1>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-field">
              <label className="signup-field__label" htmlFor="signup-name">
                Full Name
              </label>
              <input
                id="signup-name"
                className="signup-field__input"
                type="text"
                value={formData.fullName}
                onChange={handleChange('fullName')}
                placeholder="Enter your full name"
                autoComplete="name"
              />
            </div>

            <div className="signup-field">
              <label className="signup-field__label" htmlFor="signup-email">
                Email
              </label>
              <input
                id="signup-email"
                className="signup-field__input"
                type="email"
                value={formData.email}
                onChange={handleChange('email')}
                placeholder="Enter your email address"
                autoComplete="email"
              />
            </div>

            <div className="signup-field">
              <label className="signup-field__label" htmlFor="signup-phone">
                Phone Number
              </label>
              <input
                id="signup-phone"
                className="signup-field__input"
                type="tel"
                value={formData.phone}
                onChange={handleChange('phone')}
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </div>

            <div className="signup-field">
              <label className="signup-field__label" htmlFor="signup-password">
                Password
              </label>
              <input
                id="signup-password"
                className="signup-field__input"
                type="password"
                value={formData.password}
                onChange={handleChange('password')}
                placeholder="Create a password"
                autoComplete="new-password"
              />
            </div>

            <div className="signup-field">
              <label className="signup-field__label" htmlFor="signup-confirm">
                Confirm Password
              </label>
              <input
                id="signup-confirm"
                className="signup-field__input"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange('confirmPassword')}
                placeholder="Confirm your password"
                autoComplete="new-password"
              />
            </div>

            <button type="submit" className="signup-submit-btn">
              Sign Up
            </button>
          </form>

          <div className="signup-divider">
            <span className="signup-divider__line"></span>
            <span className="signup-divider__text">Or</span>
            <span className="signup-divider__line"></span>
          </div>

          <p className="signup-signin-link">
            Already have an account?{' '}
            <Link to="/login" className="signup-signin-link__anchor">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

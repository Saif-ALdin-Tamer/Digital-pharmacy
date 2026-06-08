import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronUp,
} from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__grid">
            <div className="footer__col footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon">
                  <GiMedicines />
                </div>
                <span className="footer__logo-text">
                  <span className="footer__logo-pharmacy">Digital</span>
                  <span className="footer__logo-marts">Pharmacy</span>
                </span>
              </Link>
              <p className="footer__description">
                Digital Pharmacy is your trusted online pharmacy marketplace in Egypt,
                delivering quality medicines, health products, and wellness
                essentials right to your doorstep. We connect you with verified
                pharmacies for a safe, convenient healthcare experience.
              </p>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/support">Contact Support</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Resources</h4>
              <ul className="footer__links">
                <li>
                  <Link to="/blog">Health Blog</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
                <li>
                  <Link to="/shipping">Shipping Info</Link>
                </li>
                <li>
                  <Link to="/returns">Returns &amp; Refunds</Link>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__heading">Contact Us</h4>
              <ul className="footer__contact-list">
                <li>
                  <FaEnvelope className="footer__contact-icon" />
                  <span>support@digitalpharmacy.eg</span>
                </li>
                <li>
                  <FaPhoneAlt className="footer__contact-icon" />
                  <span>+20 2 2345 6789</span>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer__contact-icon" />
                  <span>26 July St, Downtown, Cairo, Egypt</span>
                </li>
              </ul>

              <h4 className="footer__heading footer__heading--social">
                Connect With Us
              </h4>
              <div className="footer__socials">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="footer__social-link"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="footer__social-link"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="footer__social-link"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="footer__social-link"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            digitalpharmacy.eg &nbsp;|&nbsp; All rights reserved &copy;{' '}
            {new Date().getFullYear()}
          </p>

          <div className="footer__bottom-right">
            <span className="footer__rights">
              All Rights Reserved by Digital Pharmacy
            </span>
            <button
              className="footer__back-to-top"
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
            >
              <FaChevronUp />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

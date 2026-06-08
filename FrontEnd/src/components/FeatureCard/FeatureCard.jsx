import React from 'react';
import { FaMobileAlt, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import './FeatureCard.css';

const FEATURE_ICON_MAP = {
  ease: FaMobileAlt,
  offers: FaHandshake,
  choice: FaCheckCircle,
};

const FeatureCard = ({ feature }) => {
  const { id, title, description, icon, link } = feature;
  const IconComponent = FEATURE_ICON_MAP[icon] || FaCheckCircle;

  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrapper">
        <IconComponent className="feature-card__icon" />
      </div>

      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
        <span className="feature-card__link">
          Read More
        </span>
      </div>
    </div>
  );
};

export default FeatureCard;

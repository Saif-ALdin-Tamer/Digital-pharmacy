import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaPills,
  FaBaby,
  FaSpa,
  FaFemale,
  FaTags,
  FaDumbbell,
  FaPaintBrush,
  FaQuestionCircle,
} from 'react-icons/fa';
import './CategoryIcon.css';

const ICON_MAP = {
  FaPills: FaPills,
  FaBaby: FaBaby,
  FaSpa: FaSpa,
  FaFemale: FaFemale,
  FaTags: FaTags,
  FaDumbbell: FaDumbbell,
  FaPaintBrush: FaPaintBrush,
};

const CategoryIcon = ({ category, isActive = false }) => {
  const { id, name, icon, slug } = category;
  const IconComponent = ICON_MAP[icon] || FaQuestionCircle;

  return (
    <Link
      to={`/category/${slug}`}
      className={`category-icon ${isActive ? 'category-icon--active' : ''}`}
      aria-label={name}
    >
      <div className="category-icon__circle">
        <IconComponent className="category-icon__svg" />
      </div>
      <span className="category-icon__label">{name}</span>
    </Link>
  );
};

export default CategoryIcon;

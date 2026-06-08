import React from 'react';
import { FaPrescriptionBottleAlt } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, image, category } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card__image"
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder">
            <FaPrescriptionBottleAlt className="product-card__placeholder-icon" />
          </div>
        )}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name" title={name}>
          {name}
        </h3>

        <div className="product-card__price-info">
          <span className="product-card__price-line">you need to login to see</span>
          <span className="product-card__price-line">the price</span>
        </div>

        <button className="product-card__request-btn" aria-label={`Request ${name}`}>
          Request
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

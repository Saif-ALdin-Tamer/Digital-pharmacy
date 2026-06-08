import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ placeholder = 'Search products...', value, onChange, itemCount }) => {
  const [isFocused, setIsFocused] = useState(false);

  const displayPlaceholder = itemCount != null
    ? `Search ${itemCount} items`
    : placeholder;

  return (
    <div className={`search-bar ${isFocused ? 'search-bar--focused' : ''}`}>
      <FaSearch className="search-bar__icon" />
      <input
        type="text"
        className="search-bar__input"
        placeholder={displayPlaceholder}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label={displayPlaceholder}
      />
    </div>
  );
};

export default SearchBar;

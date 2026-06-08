import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination navigation">
      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <FaChevronLeft className="pagination__nav-icon" />
        <span>Previous</span>
      </button>

      <div className="pagination__pages">
        {pages.map((page) => (
          <button
            key={page}
            className={`pagination__btn pagination__btn--page ${
              page === currentPage ? 'pagination__btn--active' : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination__btn pagination__btn--nav"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <span>Next</span>
        <FaChevronRight className="pagination__nav-icon" />
      </button>
    </nav>
  );
};

export default Pagination;

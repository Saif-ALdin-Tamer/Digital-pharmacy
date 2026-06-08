import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { FaPills, FaBaby, FaSpa, FaFemale, FaTags, FaDumbbell, FaPaintBrush } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import { categories, products } from '../../data/mockData';
import './Category.css';

const iconMap = {
  FaPills: FaPills,
  FaBaby: FaBaby,
  FaSpa: FaSpa,
  FaFemale: FaFemale,
  FaTags: FaTags,
  FaDumbbell: FaDumbbell,
  FaPaintBrush: FaPaintBrush,
};

const ITEMS_PER_PAGE = 18;

const Category = () => {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const category = categories.find((cat) => cat.slug === slug);

  const categoryProducts = useMemo(() => {
    if (!category) return [];
    return products[category.slug] || [];
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return categoryProducts;
    const query = searchQuery.toLowerCase();
    return categoryProducts.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [categoryProducts, searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const IconComponent = category ? iconMap[category.icon] || FaPills : FaPills;

  if (!category) {
    return (
      <div className="category-page">
        <Header />
        <div className="category-not-found">
          <h2>Category Not Found</h2>
          <p>The category you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="category-page">
      <Header />

      <div className="category-banner">
        <div className="category-banner__icon-wrapper">
          <IconComponent className="category-banner__icon" />
        </div>
        <h1 className="category-banner__title">{category.name}</h1>
      </div>


      <div className="category-search">
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          itemCount={filteredProducts.length}
          placeholder={`Search ${filteredProducts.length} items`}
        />
      </div>


      <div className="category-products">
        {paginatedProducts.length > 0 ? (
          <div className="category-products__grid">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="category-products__empty">
            <p>No products found matching your search.</p>
          </div>
        )}
      </div>


      {totalPages > 1 && (
        <div className="category-pagination">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Category;

import React from 'react';
import { Search } from '@mui/icons-material';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Buscar herói..."
        className="search-bar"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;

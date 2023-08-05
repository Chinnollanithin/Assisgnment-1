// Search.jsx
import React from "react";

const Search = ({ searchText, onChange, onEnter }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <input
      type="text"
      value={searchText}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Search by Order ID..."
    />
  );
};

export default Search;

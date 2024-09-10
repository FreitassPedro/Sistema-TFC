import React, { useState } from "react";

import "./styles.css";


interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <nav className="search-box">
      <form className="">
        <div className="">
          <div className="search-text">
            <span className="">Nome</span>
            <input
              className=""
              type="text"
              placeholder="Buscar nome na lista..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;

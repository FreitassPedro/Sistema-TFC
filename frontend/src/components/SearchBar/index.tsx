import React, { useState } from "react";

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
    <nav className="navbar navbar-light bg-light">
      <form className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Nome</span>
          </div>
          <input 
            className="form-control" 
            type="text"
            placeholder="Buscar..."
            value={searchTerm}

            onChange={handleSearchChange}
          />
          
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;

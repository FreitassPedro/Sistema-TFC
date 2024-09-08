import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      
    </div>
  );
};

export default SearchBar;

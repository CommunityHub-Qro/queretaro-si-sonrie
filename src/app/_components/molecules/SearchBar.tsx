import React, { useState } from "react";
import SearchInput from "../atoms/SearchInput";
import SearchButt from "../atoms/SearchButton";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full items-center justify-between">
      <SearchInput
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        placeholder="Buscar..."
      />
      <SearchButt onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;

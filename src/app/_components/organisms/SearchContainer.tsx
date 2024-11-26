import React from "react";
import SearchBar from "../molecules/SearchBar";

interface SearchContainerProps {
  onSearch: (term: string) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({ onSearch }) => {
  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto w-full rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default SearchContainer;

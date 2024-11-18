import React from "react";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
    >
      <Search size={20} />
    </button>
  );
};

export default SearchButton;

import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="h-12 w-full rounded-full bg-transparent px-6 text-lg text-gray-600 placeholder-gray-400 focus:outline-none"
  />
);

export default SearchInput;

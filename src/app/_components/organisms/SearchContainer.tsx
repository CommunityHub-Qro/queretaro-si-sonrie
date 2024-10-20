import React from "react";
import SearchBar from "../molecules/SearchBar";

const SearchContainer: React.FC = () => {
  const handleSearch = (term: string) => {
    console.log(`Buscando: ${term}`);
    // Aquí iría la lógica real de búsqueda
  };

  return (
    <div className="mx-auto mt-8 max-w-md">
      <h2 className="mb-4 text-2xl font-bold">Búsqueda</h2>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchContainer;

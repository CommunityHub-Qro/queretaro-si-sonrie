"use client";

import { Key, useEffect, useState } from "react";
import PatientRecordForm from "../_components/organisms/patientRecordForm";
import PatientCard from "../_components/organisms/PatientCard";
import { getRecords } from "../_components/hooks/getRecords";
import SearchBar from "../_components/molecules/SearchBar";
import "./style.css";

export default function System() {
  const [isFormVisible, setFormVisible] = useState(false);
  const { data, error, isLoading } = getRecords();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [displayedData, setdisplayedData] = useState<any>()

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSearch = (term: string) => {
    if (!data) return;

    const filtered = data.filter(
      (patient) =>
        patient.name.toLowerCase().includes(term.toLowerCase()) ||
        patient.dx.toLowerCase().includes(term.toLowerCase()),
    );
    setSearchResults(filtered);
  };
  
  // let displayedData =
  //   searchResults.length > 0 || searchResults.length === 0
  //     ? searchResults
  //     : data;
  useEffect(() => {setdisplayedData(data)
    console.log(displayedData);
  }, [data]);



  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Querétaro SI SONRÍE</h1>
          <button
            onClick={toggleForm}
            className="rounded-full bg-red-500 px-6 py-2 text-white transition-colors hover:bg-red-600"
          >
            Añadir expediente
          </button>
        </div>

        <div className="mt-6 w-full rounded-full border-2 border-black bg-white p-2 shadow-sm">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
            <PatientRecordForm />
          </div>
        </div>
      )}

      <div className="relative">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isLoading ? (
            <p className="col-span-full text-center text-lg">
              Cargando registros...
            </p>
          ) : error ? (
            <p className="col-span-full text-center text-lg text-red-500">
              Error al cargar los registros
            </p>
          ) : displayedData?.length === 0 ? (
            <p className="col-span-full text-center text-lg">
              No se encontraron resultados
            </p>
          ) : (
            displayedData?.map(
              (patient: {
                id: Key | null | undefined;
                name: string;
                birth_date: Date;
                register_date: Date;
                dx: string;
              }) => (
                <PatientCard
                  key={patient.id}
                  id={patient.id as number}
                  name={patient.name}
                  b_date={patient.birth_date.toLocaleDateString()}
                  dx={patient.dx || "No definido"}
                />
              ),
            )
          )}
        </div>
        <button
          className="fixed bottom-8 left-8 h-16 w-32 rounded-full bg-third text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
          onClick={() => window.print()}
        >
          Generar PDF
        </button>
      </div>
    </div>
  );
}

"use client";

import { Key, useState } from "react";
import PatientRecordForm from "../_components/organisms/patientRecordForm";
import PatientCard from "../_components/organisms/PatientCard";
import { getRecords } from "../_components/hooks/getRecords";


export default function System() {
  const [isFormVisible, setFormVisible] = useState(false);
  const { data, error, isLoading } = getRecords();

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Querétaro SI SONRÍE</h1>
        <button
          onClick={toggleForm}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          Añadir expediente
        </button>
      </header>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <PatientRecordForm />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p className="text-center col-span-full">Cargando registros...</p>
        ) : (
          data?.map((patient: { id: Key | null | undefined; name: string; dx: any;}) => (
            <PatientCard
              key={patient.id}
              name={patient.name}
              dx={patient.dx || "No definido"}
            />
          ))
        )}
      </div>
    </div>
  );
}


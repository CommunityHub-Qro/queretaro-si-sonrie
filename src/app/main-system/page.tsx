"use client";

import { Key, useState } from "react";
import PatientRecordForm from "../_components/organisms/patientRecordForm";
import PatientCard from "../_components/organisms/PatientCard";
import { getRecords } from "../_components/hooks/getRecords";
import "./style.css";

export default function System() {
  const [isFormVisible, setFormVisible] = useState(false);
  const { data, error, isLoading } = getRecords();

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="p-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Querétaro SI SONRÍE</h1>
        <button
          onClick={toggleForm}
          className="addFile rounded-full bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          Añadir expediente
        </button>
      </header>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <PatientRecordForm />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <p className="col-span-full text-center">Cargando registros...</p>
        ) : (
          data?.map(
            (patient: {
              id: Key | null | undefined;
              name: string;
              birth_date: Date;
              register_date: Date;
              dx: string;
            }) => (
              <PatientCard
                key={patient.id}
                name={patient.name}
                b_date={patient.birth_date.toLocaleDateString()}
                dx={patient.dx || "No definido"}
              />
            ),
          )
        )}
        <button
          className="generatePdfButton h-16 w-32 items-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)]"
          onClick={() => window.print()}
        >
          Generar PDF
        </button>
      </div>
    </div>
  );
}

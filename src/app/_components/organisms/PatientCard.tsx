import React from "react";
//import GeneratePdfButton from "../atoms/GeneratePdfButton";

interface PatientCardProps {
  name: string;
  dx: string;
  b_date: string;
}

const PatientCard: React.FC<PatientCardProps> = ({ name, dx, b_date }) => {
  return (
    <div className="flex w-80 flex-row items-center rounded-2xl border-2 border-gray-300 bg-white p-4 shadow-lg">
      <img
        src="/images/patient.png"
        alt="ícono de paciente"
        className="mr-4 h-32 w-32 rounded-sm object-cover"
      />
      <div className="text-left">
        <p className="font-semibold">
          Nombre: <span className="text-sm font-normal">{name}</span>
        </p>
        <p className="font-semibold">
          Fecha de nacimiento:{" "}
          <span className="text-sm font-normal">{b_date}</span>
        </p>
        <p className="font-semibold">
          Diagnóstico: <span className="text-sm font-normal">{dx}</span>
        </p>
      </div>
    </div>
  );
};

export default PatientCard;

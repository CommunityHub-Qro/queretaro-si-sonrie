
import React from "react";

interface PatientCardProps {
  name: string;
  age: number;
  dx: string;
}

const PatientCard: React.FC<PatientCardProps> = ({ name, age, dx }) => {
  return (
    <div className="flex flex-col items-center border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-white">
      <img
        src="/images/patient.png" 
        alt="ícono de paciente"
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="mt-4 text-center">
        <p className="font-semibold">Nombre: <span className="font-normal">{name}</span></p>
        <p className="font-semibold">Edad: <span className="font-normal">{age}</span></p>
        <p className="font-semibold">Diagnóstico: <span className="font-normal">{dx}</span></p>
      </div>
    </div>
  );
};

export default PatientCard;

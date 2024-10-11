"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getRecords } from "../../_components/hooks/getRecords";

// Define la interfaz de tipo Patient
interface Patient {
  id: string;
  name: string;
  birth_date: Date;
  register_date: Date;
  dx: string;
  notes: string;
}

const RecordDetails = () => {
  // Extraer el parámetro recordId de la URL
  const { recordId } = useParams();

  // Estado para almacenar los registros, usando el tipo Patient[]
  const [records, setRecords] = useState<Patient[]>([]);
  const [patient, setPatient] = useState<Patient | null>(null); // Estado para almacenar el paciente encontrado
  const [isLoading, setIsLoading] = useState(true);
  const { data, error, isLoading: isFetching } = getRecords();

  useEffect(() => {
    if (data) {
      setRecords(data); // Asegúrate de que data sea del tipo Patient[]
      // Filtrar el registro correspondiente al ID
      const foundPatient = data.find((record) => record.id === recordId);
      setPatient(foundPatient || null);
    }
    setIsLoading(isFetching); // Manejar el estado de carga
  }, [data, recordId, isFetching]);

  if (isLoading) {
    return <p>Cargando detalles del paciente...</p>;
  }

  if (!patient) {
    return <p>No se encontró el paciente.</p>;
  }

  return (
    <div>
      <h1>Detalles del Registro</h1>
      <p>ID del registro: {recordId}</p>
      <p>Nombre: {patient.name}</p>
      <p>Fecha de nacimiento: {patient.birth_date.toDateString()}</p>
      <p>Diagnóstico: {patient.dx}</p>
      <p>Notas: {patient.notes}</p>
    </div>
  );
};

export default RecordDetails;

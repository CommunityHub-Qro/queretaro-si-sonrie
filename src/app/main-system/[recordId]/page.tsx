"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecords } from "../../_components/hooks/getRecords";
import UpdatePatientRecord from "../../_components/organisms/updatePatientRecord";
import DeletePatientRecord from "~/app/_components/organisms/deletePatientRecord";
import Link from "next/link";
import {useRouter} from "next/navigation";

interface Patient {
  id: string;
  name: string;
  birth_date: Date;
  register_date: Date;
  dx: string;
  notes: string;
}

const RecordDetails = () => {
  const { recordId } = useParams();
  const router = useRouter();
  const [records, setRecords] = useState<Patient[]>([]);
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { data, error, isLoading: isFetching } = getRecords();

  useEffect(() => {
    if (data) {
      setRecords(data);
      const foundPatient = data.find((record) => record.id === recordId);
      setPatient(foundPatient || null);
    }
    setIsLoading(isFetching);
  }, [data, recordId, isFetching]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateSuccess = (updatedData: Patient) => {
    setPatient(updatedData);
    setIsEditing(false);
  };

  const handleDeleteSucces = () =>{
    router.push("/main-system");
  };

  if (isLoading) {
    return <p className="text-center">Cargando detalles del paciente...</p>;
  }

  if (!patient) {
    return <p className="text-center">No se encontró el paciente.</p>;
  }

  return (
    <div className="mx-auto max-w-xl p-4">
      <Link
        href={"/main-system"}
        className="flex h-full w-32 items-center justify-center rounded-full bg-third py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
      >
        Regresar
      </Link>
      <h1 className="mb-4 text-2xl font-bold">Detalles del Registro</h1>
      {isEditing ? (
        <UpdatePatientRecord
          patientId={patient.id}
          initialData={{
            name: patient.name,
            birth_date: patient.birth_date
              ? patient.birth_date.toISOString().split("T")[0]
              : "",
            register_date: patient.register_date
              ? patient.register_date.toISOString().split("T")[0]
              : "",
            dx: patient.dx,
            notes: patient.notes,
          }}
          onSuccess={handleUpdateSuccess}
        />
      ) : (
        <div className="space-y-4">
          <p>
            <strong>ID del registro:</strong> {recordId}
          </p>
          <p>
            <strong>Nombre:</strong> {patient.name}
          </p>
          <p>
            <strong>Fecha de nacimiento:</strong>{" "}
            {patient.birth_date.toDateString()}
          </p>
          <p>
            <strong>Diagnóstico:</strong> {patient.dx}
          </p>
          <p>
            <strong>Notas:</strong> {patient.notes}
          </p>
          <button
            onClick={handleEditClick}
            className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
          >
            Editar
          </button>
          <DeletePatientRecord 
            patientId={patient.id}
            onSuccess={handleDeleteSucces}
          />
        </div>
      )}
    </div>
  );
};

export default RecordDetails;

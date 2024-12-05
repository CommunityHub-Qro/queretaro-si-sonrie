"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getRecords } from "../../_components/hooks/getRecords";
import { useGetTreatments } from "../../_components/hooks/getTreatments";
import UpdatePatientRecord from "../../_components/organisms/updatePatientRecord";
import DeletePatientRecord from "~/app/_components/organisms/deletePatientRecord";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./style.css";
import { Patient, Treatment } from "~/app/_components/types/types";

const RecordDetails = () => {
  const { recordId } = useParams();
  const router = useRouter();
  const [records, setRecords] = useState<Patient[]>([]); // Para qué??
  const [patient, setPatient] = useState<Patient | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const {
    data: recordsData,
    error: recordsError,
    isLoading: isFetching,
  } = getRecords();
  const {
    data: treatmentsData,
    error: treatmentsError,
    isLoading: isFetchingt,
  } = useGetTreatments(patient?.id ?? undefined);

  useEffect(() => {
    if (recordsData) {
      setRecords(recordsData as Patient[]);
      const foundPatient = recordsData.find((record) => record.id === recordId);
      setPatient((foundPatient as Patient) ?? null);
    }
    setIsLoading(isFetching);
  }, [recordsData, recordId, isFetching]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateSuccess = (updatedData: Patient) => {
    setPatient(updatedData);
    setIsEditing(false);
  };

  const handleDeleteSucces = () => {
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
        className="regresar ml-[55rem] flex h-full w-32 items-center justify-center rounded-full bg-third py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
      >
        Regresar
      </Link>
      <h2 className="detailsTitle mb-4 text-3xl font-bold">Paciente</h2>

      {isEditing ? (
        <UpdatePatientRecord
          patientId={patient.id}
          initialData={{
            name: patient.name,
            birth_date: patient.birth_date?.toISOString().split("T")[0] ?? "",
            register_date:
              patient.register_date?.toISOString().split("T")[0] ?? "",
            dx: patient.dx,
            notes: patient.notes,
            record_link: patient.record_link,
            treatments: patient.treatments ?? [],
            sex: patient.sex,
            active: patient.active,
          }}
          onSuccess={handleUpdateSuccess}
        />
      ) : (
        <div className="space-y-4">
          <div className="ml-20 flex items-center">
            <img
              src={patient.photoUrl}
              alt="ícono de paciente"
              className="mr-4 h-52 w-52 rounded-sm object-cover"
            />
            <div>
              <p className="ml-5 mt-2 text-lg">
                <strong>Estado:</strong> <br />
                <span
                  className={
                    patient.active
                      ? "font-semibold text-green-600"
                      : "font-semibold text-red-600"
                  }
                >
                  {patient.active ? "Activo" : "Inactivo"}
                </span>
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>Nombre:</strong> <br></br> {patient.name}
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>Sexo:</strong>{" "}
                {patient.sex === true ? "Hombre" : "Mujer"}
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>Fecha de nacimiento:</strong>{" "}
                {new Date(
                  new Date(patient.birth_date).setDate(
                    new Date(patient.birth_date).getDate() + 1,
                  ),
                ).toDateString()}
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>Fecha de registro:</strong>{" "}
                {new Date(
                  new Date(patient.register_date).setDate(
                    new Date(patient.register_date).getDate() + 1,
                  ),
                ).toDateString()}
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>DX:</strong> <br></br>
                {patient.dx}
              </p>
              <p className="ml-5 mt-2 text-lg">
                <strong>Notas:</strong>
                {patient.notes}
              </p>
            </div>
          </div>

          {/* Display Exams
          <h2 className="ml-5 mt-6 text-xl font-bold">Exámenes</h2>
          {patient.exams && patient.exams.length > 0 ? (
            <ul>
              {patient.exams.map((exam) => (
                <li key={exam.id}>
                  <strong>{exam.title}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay exámenes disponibles.</p>
          )} */}

          {/* Display Diagnoses
          <h2 className="ml-5 mt-6 text-xl font-bold">Diagnósticos</h2>
          {patient.diagnoses && patient.diagnoses.length > 0 ? (
            <ul>
              {patient.diagnoses.map((diagnosis) => (
                <li key={diagnosis.id}>
                  <strong>{diagnosis.title}:</strong> {diagnosis.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay diagnósticos disponibles.</p>
          )} */}

          <h2 className="ml-5 mt-6 text-xl font-bold">
            Documento del paciente
          </h2>
          {patient.record_link ? (
            <Link
              href={patient.record_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              {patient.name}
            </Link>
          ) : (
            <p>El paciente no tiene un documento.</p>
          )}

          <h2 className="ml-5 mt-6 text-xl font-bold">Tratamientos</h2>
          {isFetchingt ? (
            <p className="text-center">Cargando tratamientos...</p>
          ) : treatmentsData && treatmentsData.length > 0 ? (
            <div className="space-y-4">
              {treatmentsData.map((treatment: Treatment) => (
                <div
                  key={treatment.id}
                  className="flex flex-col items-start rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:flex-row sm:items-center"
                >
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {treatment.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      <strong>Diagnóstico:</strong> {treatment.diagnosis}
                    </p>
                    <p className="mt-2 text-gray-600">
                      <strong>Informe:</strong> {treatment.report}
                    </p>
                    <p className="mt-2 text-gray-600">
                      <strong>Doctor:</strong> {treatment.doctor}
                    </p>
                    <p className="mt-2 text-gray-600">
                      <strong>Fecha:</strong>{" "}
                      {(() => {
                        const date = new Date(treatment.date);
                        // Agregar un día a la fecha
                        date.setDate(date.getDate() + 1);
                        // Formatear la fecha con el nuevo día
                        return date.toLocaleDateString();
                      })()}
                    </p>
                  </div>
                  <p
                    className={`mt-4 text-sm font-medium sm:ml-6 sm:mt-0 ${
                      treatment.external ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {treatment.external
                      ? "Tratamiento externo"
                      : "Tratamiento interno"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">No hay tratamientos disponibles.</p>
          )}

          <div className="justify-between">
            <button
              onClick={handleEditClick}
              className="editar rounded-full bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Editar
            </button>
            <button
              className="generatePdfButton ml-20 h-10 w-32 items-center rounded-full bg-third py-2 text-center text-slate-100 drop-shadow-md hover:bg-[rgb(255,40,40)]"
              onClick={() => window.print()}
            >
              Generar PDF
            </button>
            <DeletePatientRecord
              patientId={patient.id}
              onSuccess={handleDeleteSucces}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordDetails;

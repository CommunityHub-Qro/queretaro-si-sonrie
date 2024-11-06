import { api } from "~/trpc/react";
import { useState, FormEvent } from "react";

interface Patient {
  id: string;
  name: string;
  birth_date: Date;
  register_date: Date;
  dx: string;
  notes: string;
  record_link: string;
}

interface UpdatePatientRecordProps {
  patientId: string;
  initialData: {
    name: string;
    birth_date: string;
    register_date: string;
    dx: string;
    notes: string;
    record_link: string;
  };
  onSuccess: (updatedData: Patient) => void;
}
const UpdatePatientRecord: React.FC<UpdatePatientRecordProps> = ({
  patientId,
  initialData,
  onSuccess,
}) => {
  const [name, setName] = useState(initialData.name);
  const [birthDate, setBirthDate] = useState(initialData.birth_date);
  const [registerDate, setRegisterDate] = useState(initialData.register_date);
  const [dx, setDx] = useState(initialData.dx);
  const [notes, setNotes] = useState(initialData.notes);
  const [record_link, setLink] = useState(initialData.record_link);

  const updatePatientRecordMutation =
    api.patientRecord.updatePatientRecord.useMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Convertir las fechas de cadena a objetos Date
      const birthDateObj = new Date(birthDate);
      const registerDateObj = new Date(registerDate);

      const updatedPatient = await updatePatientRecordMutation.mutateAsync({
        id: patientId,
        name,
        birth_date: birthDateObj, // Pasar la fecha como un objeto Date
        register_date: registerDateObj, // Pasar la fecha como un objeto Date
        dx,
        notes,
        record_link,
      });

      onSuccess(updatedPatient);
    } catch (error) {
      console.error("Error al actualizar el registro del paciente:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-semibold">Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block font-semibold">Fecha de nacimiento:</label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block font-semibold">Fecha de ingreso:</label>
        <input
          type="date"
          value={registerDate}
          onChange={(e) => setRegisterDate(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block font-semibold">Diagnóstico:</label>
        <textarea
          value={dx}
          onChange={(e) => setDx(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block font-semibold">Notas:</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <div>
        <label className="block font-semibold">Link del documento:</label>
        <textarea
          value={record_link}
          onChange={(e) => setLink(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Guardar
      </button>
    </form>
  );
};

export default UpdatePatientRecord;

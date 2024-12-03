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

interface Treatment {
  id: string;
  title: string;
  report: string;
  patientId: string;
  doctor: string;
  external: boolean;
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
    treatments: Treatment[];
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
  const [recordLink, setLink] = useState(initialData.record_link);
  const [treatments, setTreatments] = useState<Treatment[]>(initialData.treatments || []);


  const updatePatientRecordMutation =
    api.patientRecord.updatePatientRecord.useMutation();

  const createTreatmentMutation = api.treatment.createTreatment.useMutation();

  const updateTreatmentMutation = api.treatment.updateTreatment.useMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const birthDateObj = new Date(birthDate);
      const registerDateObj = new Date(registerDate);

      const updatedPatient = await updatePatientRecordMutation.mutateAsync({
        id: patientId,
        name,
        birth_date: birthDateObj,
        register_date: registerDateObj,
        dx,
        notes,
        record_link: recordLink,
      });

      alert("Registro del paciente actualizado exitosamente");
      onSuccess(updatedPatient);
    } catch (error) {
      console.error("Error al actualizar el registro del paciente:", error);
    }
  };

  const handleTreatmentChange = (
    index: number,
    field: keyof Treatment,
    value: string | boolean,
  ) => {
    setTreatments((prev) =>
      prev.map((treatment, i) =>
        i === index ? { ...treatment, [field]: value } : treatment,
      ),
    );
  };

  const handleUpdateTreatment = async (index: number) => {
    const treatment = treatments[index];

    if (!treatment) {
      console.error(
        "Tratamiento no encontrado para el índice proporcionado:",
        index,
      );
      return;
    }

    try {
      await updateTreatmentMutation.mutateAsync({
        id: treatment.id,
        title: treatment.title,
        report: treatment.report,
        doctor: treatment.doctor,
        external: treatment.external,
      });
      alert("Tratamiento actualizado exitosamente");
    } catch (error) {
      console.error("Error al actualizar el tratamiento:", error);
    }
  };

  const handleAddTreatment = () => {
    setTreatments((prev) => [
      ...prev,
      {
        id: "",
        title: "",
        report: "",
        patientId,
        doctor: "Nombre del doctor", // Cambiar por valor dinámico si es necesario
        external: false,
      },
    ]);
  };

  const handleCreateTreatment = async (index: number) => {
    const newTreatment = treatments[index];

    if (
      !newTreatment ||
      !newTreatment.title ||
      !newTreatment.report ||
      !newTreatment.doctor
    ) {
      console.error("Los datos del tratamiento no están completos.");
      alert("Por favor, completa todos los campos requeridos del tratamiento.");
      return;
    }

    try {
      const createdTreatment = await createTreatmentMutation.mutateAsync({
        ...newTreatment,
        patientId,
      });

      setTreatments((prev) =>
        prev.map((treatment, i) =>
          i === index ? { ...treatment, id: createdTreatment.id } : treatment,
        ),
      );

      alert("Nuevo tratamiento creado exitosamente");
    } catch (error) {
      console.error("Error al crear el tratamiento:", error);
    }
  };

  return (
    <>
      {/* Formulario principal del paciente */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos del paciente */}
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-2"
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
            value={recordLink}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <button type="submit" className="btn-primary">
          Guardar
        </button>
      </form>

      {/* Tratamientos */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Tratamientos</h3>
        {treatments?.length > 0 ? (
          treatments.map((treatment, index) => (
            <div key={treatment.id || index} className="space-y-2 border p-4">
              <input
                type="text"
                value={treatment.title}
                onChange={(e) =>
                  handleTreatmentChange(index, "title", e.target.value)
                }
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
              {/* Otros campos */}
            </div>
          ))
        ) : (
          <p>No hay tratamientos disponibles. Añade uno nuevo.</p>
        )}
        <button
          type="button"
          onClick={handleAddTreatment}
          className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
        >
          Añadir tratamiento
        </button>
      </div>
    </>
  );
};

export default UpdatePatientRecord;

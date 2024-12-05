import { api } from "~/trpc/react";
import { useState, FormEvent, useEffect } from "react";
import { UploadButton } from "@uploadthing/react";

interface Patient {
  id: string;
  name: string;
  birth_date: Date;
  register_date: Date;
  dx: string;
  notes: string;
  record_link: string;
  sex: boolean;
  active: boolean;
}

interface Treatment {
  id: string;
  title: string;
  report: string;
  patientId: string;
  doctor: string;
  external: boolean;
  diagnosis?: string;
  date?: Date;
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
    sex: boolean;
    active: boolean;
  };
  onSuccess: (updatedData: Patient) => void;
}

const UpdatePatientRecord: React.FC<UpdatePatientRecordProps> = ({
  patientId,
  initialData,
  onSuccess,
}) => {
  const [name, setName] = useState(initialData.name);
  const [birthDate, setBirthDate] = useState<string>(initialData.birth_date);
  const [registerDate, setRegisterDate] = useState<string>(
    initialData.register_date,
  );
  const [dx, setDx] = useState(initialData.dx);
  const [notes, setNotes] = useState(initialData.notes);
  const [recordLink, setLink] = useState(initialData.record_link);
  const [sex, setSex] = useState(initialData.sex ?? false);
  const [active, setActive] = useState(initialData.active ?? false);
  const [loading, setLoading] = useState(false);

  const updatePatientRecordMutation =
    api.patientRecord.updatePatientRecord.useMutation();
  const createTreatmentMutation = api.treatment.createTreatment.useMutation();
  const updateTreatmentMutation = api.treatment.updateTreatment.useMutation();
  const {
    data: treatmentsData,
    isLoading,
    isError,
  } = api.treatment.getTreatmentsByPatientId.useQuery({
    patientId: patientId,
  });

  const [treatments, setTreatments] = useState<Treatment[]>([]);

  useEffect(() => {
    if (treatmentsData && Array.isArray(treatmentsData)) {
      const updatedTreatments = treatmentsData.map((treatment) => {
        if (treatment.date) {
          const treatmentDate = new Date(treatment.date);
          treatment.date = treatmentDate.toISOString().split("T")[0];
        }
        return treatment;
      });
      setTreatments(updatedTreatments);
    }
  }, [treatmentsData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
        sex,
        active,
      });

      alert("Registro del paciente actualizado exitosamente");
      onSuccess(updatedPatient);
    } catch (error) {
      console.error("Error al actualizar el registro del paciente:", error);
      alert("Hubo un error al actualizar el registro. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const handleTreatmentChange = (index: number, field: string, value: any) => {
    if (field === "date" && value) {
      value = new Date(value);
    }

    setTreatments((prevTreatments) => {
      const updatedTreatments = [...prevTreatments];
      updatedTreatments[index] = {
        ...updatedTreatments[index],
        [field]: value,
      };
      return updatedTreatments;
    });
  };

  const handleSaveTreatment = async (index: number) => {
    const treatment = treatments[index];

    if (!treatment) {
      console.error(
        "Tratamiento no encontrado para el índice proporcionado:",
        index,
      );
      return;
    }

    if (treatment.date && !(treatment.date instanceof Date)) {
      treatment.date = new Date(treatment.date);
    }

    try {
      if (treatment.id) {
        await updateTreatmentMutation.mutateAsync({
          id: treatment.id,
          title: treatment.title,
          report: treatment.report,
          doctor: treatment.doctor,
          external: treatment.external,
          diagnosis: treatment.diagnosis,
          date: treatment.date,
        });
        alert("Tratamiento actualizado exitosamente");
      } else {
        const createdTreatment = await createTreatmentMutation.mutateAsync({
          title: treatment.title,
          report: treatment.report,
          patientId,
          doctor: treatment.doctor,
          external: treatment.external,
          diagnosis: treatment.diagnosis,
          date: treatment.date,
        });
        alert("Tratamiento creado exitosamente");
        setTreatments((prev) =>
          prev.map((t, i) =>
            i === index ? { ...t, id: createdTreatment.id } : t,
          ),
        );
      }
    } catch (error) {
      console.error("Error al guardar el tratamiento:", error);
      alert("Hubo un error al guardar el tratamiento.");
    }
  };

  const handleAddTreatment = () => {
    setTreatments((prev) => [
      ...prev,
      {
        id: "", // id vacío significa que es un nuevo tratamiento
        title: "",
        report: "",
        patientId,
        doctor: "",
        diagnosis: "",
        external: false,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Activo */}
        <div className="flex items-center space-x-4">
          <label className="block font-semibold">Activo:</label>
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)} // Cambia el estado con el valor booleano del checkbox
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </div>
        {/* Nombre del paciente */}
        <div>
          <label className="block font-semibold">Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        {/* Sexo */}
        <div>
          <label className="block font-semibold">Sexo:</label>
          <select
            value={sex !== null ? (sex ? "true" : "false") : ""}
            onChange={(e) => setSex(e.target.value === "true")}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            <option value="true">Masculino</option>
            <option value="false">Femenino</option>
          </select>
        </div>
        {/* Fecha de nacimiento */}
        <div>
          <label className="block font-semibold">Fecha de nacimiento:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Fecha de registro */}
        <div>
          <label className="block font-semibold">Fecha de registro:</label>
          <input
            type="date"
            value={registerDate}
            onChange={(e) => setRegisterDate(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Diagnóstico */}
        <div>
          <label className="block font-semibold">DX:</label>
          <textarea
            value={dx}
            onChange={(e) => setDx(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Notas */}
        <div>
          <label className="block font-semibold">Notas:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        {/* Enlace al registro */}
        <div>
          <label className="block font-semibold">Enlace al registro:</label>
          <input
            type="url"
            value={recordLink}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>

        <button
          type="submit"
          className="transform rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          disabled={loading}
        >
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">Tratamientos</h3>
        {treatments?.length > 0 ? (
          treatments.map((treatment, index) => (
            <div key={treatment.id || index} className="space-y-2 border p-4">
              <div>
                <label className="block font-semibold">Título:</label>
                <select
                  value={treatment.title || ""}
                  onChange={(e) =>
                    handleTreatmentChange(index, "title", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="NAM">NAM</option>
                  <option value="Nutrición">Nutrición</option>
                  <option value="Queiloplastia">Queiloplastia</option>
                  <option value="C. nasal">C. nasal</option>
                  <option value="Veloplastia">Veloplastia</option>
                  <option value="Palatoplastia">Palatoplastia</option>
                  <option value="T. Lenguaje">T. Lenguaje</option>
                  <option value="Odonto Gral.">Odonto Gral.</option>
                  <option value="Odontopediatria">Odontopediatría</option>
                  <option value="Ortopedia">Ortopedia</option>
                  <option value="Ortodoncia">Ortodoncia</option>
                  <option value="Correc. Cicatriz">Correc. Cicatriz</option>
                  <option value="Ortognatica">Ortognática</option>
                  <option value="Rinoplastia">Rinoplastia</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">
                  Fecha del tratamiento:
                </label>
                <input
                  type="date"
                  value={treatment.date || ""} // Fecha directamente desde la base de datos
                  onChange={(e) =>
                    handleTreatmentChange(index, "date", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block font-semibold">Reporte:</label>
                <textarea
                  value={treatment.report}
                  onChange={(e) =>
                    handleTreatmentChange(index, "report", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block font-semibold">Doctor:</label>
                <input
                  type="text"
                  value={treatment.doctor}
                  onChange={(e) =>
                    handleTreatmentChange(index, "doctor", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div>
                <label className="block font-semibold">Diagnóstico:</label>
                <textarea
                  value={treatment.diagnosis || ""}
                  onChange={(e) =>
                    handleTreatmentChange(index, "diagnosis", e.target.value)
                  }
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => handleSaveTreatment(index)}
                  className="mt-2 rounded-lg bg-green-500 px-4 py-2 text-white"
                >
                  Guardar
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay tratamientos registrados.</p>
        )}
        <button
          type="button"
          onClick={handleAddTreatment}
          className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white"
        >
          Agregar tratamiento
        </button>
      </div>
    </>
  );
};

export default UpdatePatientRecord;

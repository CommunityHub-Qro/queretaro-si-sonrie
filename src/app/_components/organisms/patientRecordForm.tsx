import { useState, FormEvent } from "react";
import { api } from "~/trpc/react";
import { UploadButton } from "~/utils/uploadthing";

export default function PatientRecordForm() {
  const [name, setName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [dx, setDx] = useState("");
  const [notes, setNotes] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const createPatientRecordMutation =
    api.patientRecord.createPatientRecord.useMutation();

  function create_patientRecord(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Convierte las fechas a Date si están presentes
    const birthDate = birthdayDate ? new Date(birthdayDate) : new Date();
    const registerDate = registrationDate ? new Date(registrationDate) : new Date();

    createPatientRecordMutation.mutate(
      {
        name,
        dx,
        notes,
        photoUrl,
        b_date: birthDate,
        r_date: registerDate,
        active: true,
      },
      {
        onSuccess(data) {
          console.log("Registro creado exitosamente:", data);
          window.location.reload();
        },

        onError(error, variables, context) {
          console.log({
            error,
          });
        },
      },
    );
  }

  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        create_patientRecord(e);
      }}
    >
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="b_date">Fecha de nacimiento:</label>
        <input
          type="date"
          id="b_date"
          name="b_date"
          value={birthdayDate}  
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="r_date">Fecha de ingreso:</label>
        <input
          type="date"
          id="r_date"
          name="r_date"
          value={registrationDate} 
          onChange={(e) => setRegistrationDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dx">DX:</label>
        <input
          type="text"
          id="dx"
          name="dx"
          onChange={(e) => setDx(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="notes">Anotaciones:</label>
        <input
          type="text"
          id="notes"
          name="notes"
          onChange={(e) => setNotes(e.target.value)}
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res && res[0] && res[0].url) {
              setPhotoUrl(res[0].url);
              console.log("Files: ", res);
              alert("Upload Completed");
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

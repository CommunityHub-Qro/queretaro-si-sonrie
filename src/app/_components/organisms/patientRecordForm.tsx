import { useState, FormEvent } from "react";
import { api } from "~/trpc/react";
import { UploadDropzone } from "~/utils/uploadthing";

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
    // if (!photoUrl) {
    //   e.preventDefault();
    //   alert("Cargar foto del paciente.");
    //   return;
    // }
    e.preventDefault();
    createPatientRecordMutation.mutate(
      {
        name,
        dx,
        notes,
      },
      {
        onSuccess(data) {
          console.log("Registro creado exitosamente:", data);
          // Recargar la página después de que la mutación sea exitosa
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
          onChange={(e) => setBirthdayDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="r_date">Fecha de ingreso:</label>
        <input
          type="date"
          id="r_date"
          name="r_date"
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
        <UploadDropzone
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

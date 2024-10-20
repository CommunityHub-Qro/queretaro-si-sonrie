import { useState, FormEvent } from "react";
import { api } from "~/trpc/react";

export default function PatientRecordForm() {
  const [name, setName] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");
  const [dx, setDx] = useState("");
  const [notes, setNotes] = useState("");

  const createPatientRecordMutation =
    api.patientRecord.createPatientRecord.useMutation();

  function create_patientRecord(e: FormEvent<HTMLFormElement>) {
    createPatientRecordMutation.mutate(
      {
        name,
        dx,
        notes,
      },
      {
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
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

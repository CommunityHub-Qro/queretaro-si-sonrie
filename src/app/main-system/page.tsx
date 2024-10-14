"use client";

import { useState } from "react";
import PatientRecordForm from "~/app/_components/organisms/patientRecordForm";

export default function System() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button onClick={toggleForm}>
        <div>Añadir expediente</div>
      </button>

      {isFormVisible && (
        <div className="modal">
          <div className="modal-content">
            <PatientRecordForm />
          </div>
        </div>
      )}
    </div>
  );
}
interface Diagnosis {
  id: string;
  title: string;
  description: string;
}
interface Exam {
  id: string;
  title: string;
}
export interface Treatment {
  id: string;
  title: string;
  report: string;
  diagnosis: string;
  patientId: string;
  doctor: string;
  external: boolean;
  date: Date;
  // photoUrlTreatment: string;
}

export interface Patient {
  id: string;
  name: string;
  birth_date: Date;
  register_date: Date;
  dx: string;
  notes: string;
  photoUrl: string;
  exams?: Exam[];
  diagnoses?: Diagnosis[];
  treatments?: Treatment[];
  record_link: string;
  sex: boolean;
  active: boolean;
}

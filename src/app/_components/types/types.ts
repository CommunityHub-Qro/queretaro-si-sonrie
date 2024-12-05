import { Diagnosis, Exam } from "@prisma/client";

export interface Treatment {
  id: string;
  title: string;
  report: string;
  diagnosisId: string;
  patientId: string;
  doctor: string;
  external: boolean;
  photoUrlTreatment: string;
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
}

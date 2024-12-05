import { api } from "~/trpc/react";

export function useGetTreatments(patientId: string | null) {
  return api.treatment.getTreatments.useQuery(
    { patientId },
    { enabled: !!patientId }  
  );
}

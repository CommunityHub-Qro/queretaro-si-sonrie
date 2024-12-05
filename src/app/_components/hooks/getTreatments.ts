import { api } from "~/trpc/react";

export function useGetTreatments(patientId: string | undefined) {
  return api.treatment.getTreatments.useQuery(
    { patientId },
    { enabled: !!patientId },
  );
}

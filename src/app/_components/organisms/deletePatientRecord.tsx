import {useRouter} from "next/navigation";
import {api} from "~/trpc/react";
import React from "react";

//Properties that the component expects to receive
interface DeletePatientRecordProps {
    patientId: string;
    onSuccess: () => void;
}

const DeletePatientRecord: React.FC<DeletePatientRecordProps> = ({
    patientId,
    onSuccess,
}) => {
    const router = useRouter();

    const deletePatientRecordMutation = api.patientRecord.deletePatientRecord.useMutation();

    const handleDeleteClick = async () => {
        try{
            await deletePatientRecordMutation.mutateAsync({
                id: patientId
            });

            onSuccess();
            router.push("/main-system");
        }catch(error){
            console.error("Error al eliminar el registro del paciente: ", error);
        }
    };

    return(
        <button onClick={handleDeleteClick} className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Eliminar</button>
    );
};

export default DeletePatientRecord;
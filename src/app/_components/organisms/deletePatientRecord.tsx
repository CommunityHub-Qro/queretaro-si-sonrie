import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import React from "react";
import Swal from "sweetalert2";
import { error } from "console";

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

  const deletePatientRecordMutation =
    api.patientRecord.deletePatientRecord.useMutation();

  const handleDeleteClick = async () => {
    const result = await Swal.fire({
      title: "¿Estas seguro de querer eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
      footer: "Una vez aceptada la acción no se podra deshacer",
    });

    if (result.isConfirmed) {
      try {
        await deletePatientRecordMutation.mutateAsync({
          id: patientId,
        });
        await Swal.fire(
          "ELIMINADO",
          "El registro del paciente ha sido eliminado con exito",
        );
        onSuccess();
        router.push("/main-system");

        setTimeout(() => {
          window.location.reload();
        }, 100);
      } catch (error) {
        console.error("Error al eliminar el registro del paciente: ", error);
      }
    }
  };

  return (
    <button
      onClick={handleDeleteClick}
      className="eliminar m-10 ml-20 rounded-full bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Eliminar
    </button>
  );
};

export default DeletePatientRecord;

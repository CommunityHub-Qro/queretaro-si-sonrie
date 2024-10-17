import React, { FC } from "react";
import { UserDataType } from "~/server/api/routers/newUser";
import Swal from "sweetalert2";
import { useDeleteUser } from "../hooks/useRetrieveUser";

interface Props {
  user: UserDataType;
}

const UserCards: FC<Props> = ({ user }) => {
  const deleteUser = async () => {
    const response = await useDeleteUser(user.id);
    if (response == "success") {
      Swal.fire({
        title: "Eliminado!",
        text: "Usuario ha sido eliminado de forma exitosa",
        icon: "success",
      });
    }
  };
  const confirmation = () => {
    Swal.fire({
      title: `¿Seguro quieres eliminar al usuario: ${user.name}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4141",
      cancelButtonColor: "#00A2FF",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser();
      }
    });
  };

  const showInfo = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <button
      className="grid w-10/12 grid-cols-10 items-center rounded-md border-2 p-2 drop-shadow-md"
      onClick={(e) => showInfo(e)}
    >
      <p className="col-span-1">{user.name}</p>
      <p className="col-start-3">{user.email}</p>
      <button
        className="bg-specialRed col-start-10 rounded-md border-2 p-2 text-white drop-shadow-sm hover:border-black"
        onClick={(user) => confirmation()}
      >
        Delete
      </button>
    </button>
  );
};

export default UserCards;

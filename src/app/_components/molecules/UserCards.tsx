import React, { FC } from "react";
import { UserDataType } from "~/server/api/routers/newUser";
import Swal from "sweetalert2";
import { useDeleteUser } from "../hooks/useRetrieveUser";

interface Props {
  user: UserDataType;
}

const UserCards: FC<Props> = ({ user }) => {
  const deleteUser = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useDeleteUser(user.id);
    if (response == "success") {
      void Swal.fire({
        title: "Eliminado!",
        text: "Usuario ha sido eliminado de forma exitosa",
        icon: "success",
      });
    }
  };
  const confirmation = () => {
    void Swal.fire({
      title: `¿Seguro quieres eliminar al usuario: ${user.name}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4141",
      cancelButtonColor: "#00A2FF",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        void deleteUser();
      }
    });
  };

  const showInfo = (e: React.MouseEvent<HTMLElement>) => {
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
        className="col-start-10 rounded-md border-2 bg-third p-2 text-white drop-shadow-sm hover:border-black"
        onClick={() => confirmation()}
      >
        Delete
      </button>
    </button>
  );
};

export default UserCards;

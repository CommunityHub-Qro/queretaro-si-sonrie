"use client";

import React, { FC, useState } from "react";
import { UserDataType } from "~/server/api/routers/newUser";
import Swal from "sweetalert2";
import { useDeleteUser, useUpdateUser } from "../hooks/useRetrieveUser";

interface Props {
  user: UserDataType;
}

const UserCards: FC<Props> = ({ user }) => {
  const [shown, setShown] = useState(true);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    // useUpdateUser(user.id, ...formData);

    setShown(false);
  }

  return (
    <>
      <button
        className="grid w-10/12 grid-cols-10 items-center rounded-md border-2 p-2 drop-shadow-md"
        type="button"
        onClick={() => setShown(!shown)}
      >
        <p className="col-span-1">{user.name}</p>
        <p className="col-start-3">{user.email}</p>
        <button
          className="col-start-10 rounded-md border-2 bg-specialRed p-2 text-white drop-shadow-sm hover:border-black"
          onClick={(user) => confirmation()}
        >
          Delete
        </button>
      </button>
      <div className={`${shown ? "hidden" : "block"} `}>
        <div className="modal">
          <div className="modal-dialog">
            <div className="h-56 w-96 rounded-xl bg-white p-10">
              <div className="relative text-end">
                <button
                  type="button"
                  className="close -mt-5 p-0 text-3xl"
                  onClick={() => setShown(!shown)}
                >
                  &times;
                </button>
              </div>
              <form method="put" onSubmit={handleUpdate}>
                <div className="modal-body flex flex-col gap-3">
                  <div className="inline-flex gap-2">
                    Usuario:{" "}
                    <input
                      placeholder={user.name}
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inline-flex gap-2">
                    Email:{" "}
                    <input
                      placeholder={user.email}
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="inline-flex gap-2">
                    Contraseña:{" "}
                    <input
                      placeholder="Contraseña"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="modal-footer text-end">
                  <button
                    type="submit"
                    className="mt-6 rounded-md bg-specialRed p-1 font-bold text-white"
                  >
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCards;

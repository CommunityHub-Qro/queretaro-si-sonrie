"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRetrieveAllUsers } from "~/app/_components/hooks/useRetrieveUser";
import UserCards from "~/app/_components/molecules/UserCards";
import { UserDataType } from "~/server/api/routers/newUser";

const EliminarUsuario = () => {
  const [users, setUsers] = useState<UserDataType[] | void>([]);

  const useFetchUsers = async () => {
    // Función fetchUsers para conseguir usuario y contraseña para acceder acceso
    const users = await useRetrieveAllUsers()
      .then((users) => users)
      .catch((error) => console.log("ERROR: " + error));
    console.log("useFetchUSers");
    setUsers(users);
  };

  useEffect(() => {}, [users]);

  if (!users?.length) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    void useFetchUsers();
  }

  // Sign in funcionality

  return (
    <div className="flex h-screen flex-col gap-5 p-4">
      <div className="flex justify-between">
        <h1 className="text-xl">Usuarios</h1>
        <Link
          className="text-md flex h-[2rem] w-44 items-center justify-center rounded-full border-4 border-third py-2 font-bold text-black drop-shadow-md hover:bg-third hover:text-white"
          href={"/main-system/users/registerUser"}
        >
          Registrar Usuario
        </Link>
      </div>
      {users
        ? users.map((u: UserDataType, idx: number) => (
            <UserCards user={u} key={idx} />
          ))
        : null}
    </div>
  );
};

export default EliminarUsuario;

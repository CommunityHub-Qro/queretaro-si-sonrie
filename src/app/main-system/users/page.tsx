"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRetrieveAllUsers } from "~/app/_components/hooks/useRetrieveUser";
import UserCards from "~/app/_components/molecules/UserCards";
import { UserDataType } from "~/server/api/routers/newUser";

const EliminarUsuario = () => {
  const [users, setUsers] = useState<any>();
  const [signIn, setSignIn] = useState(false);

  const fetchUsers = async () => {
    // Función fetchUsers para conseguir usuario y contraseña para acceder acceso
    const users = await useRetrieveAllUsers()
      .then((users) => users)
      .catch((error) => console.log("ERROR: " + error));
    setUsers(users);
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  if (!users) {
    fetchUsers();
  }

  // Sign in funcionality

  return (
    <div className="flex h-screen flex-col gap-5 p-4">
      <div className="flex justify-between">
        <h1 className="text-xl">Usuarios</h1>
        <Link
          className="text-md border-specialRed hover:bg-specialRed flex h-[2rem] w-44 items-center justify-center rounded-full border-4 py-2 font-bold text-black drop-shadow-md hover:text-white"
          href={"/main-system/users/registerUser"}
        >
          Registrar Usuario
        </Link>
      </div>
      {users ? users.map((u: UserDataType) => <UserCards user={u} />) : null}
    </div>
  );
};

export default EliminarUsuario;

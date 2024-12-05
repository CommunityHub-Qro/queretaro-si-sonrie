"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRetrieveAllUsers } from "~/app/_components/hooks/useRetrieveUser";
import UserCards from "~/app/_components/molecules/UserCards";
import { UserDataType } from "~/server/api/routers/newUser";

const EliminarUsuario = () => {
  const [users, setUsers] = useState<UserDataType[]>([]); // Estado inicial como un arreglo vacío
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const fetchedUsers = await useRetrieveAllUsers();
        if (fetchedUsers) {
          setUsers(fetchedUsers); // Actualiza usuarios si se obtienen correctamente
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    void fetchUsers();
  }, []); // Solo ejecuta al montar el componente

  if (loading) {
    return <div>Cargando usuarios...</div>;
  }

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
      {users.length > 0 ? (
        users.map((u: UserDataType, idx: number) => (
          <UserCards user={u} key={idx} />
        ))
      ) : (
        <div>No se encontraron usuarios.</div>
      )}
    </div>
  );
};

export default EliminarUsuario;

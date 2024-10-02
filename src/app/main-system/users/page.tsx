'use client'

import React, { useEffect, useState } from 'react'
import { useRetrieveAllUsers } from '~/app/_components/hooks/useRetrieveUser'
import UserCards from '~/app/_components/molecules/UserCards'
import { UserDataType } from '~/server/api/routers/newUser'
import { api } from '~/trpc/server'

const EliminarUsuario =  () => {
  
  const [users, setUsers] = useState<any>()

  const fetchUsers = async () => { // Función fetchUsers para conseguir usuario y contraseña para acceder acceso
    const users = await useRetrieveAllUsers()
                        .then(users => users)
                        .catch((error) => console.log('ERROR: ' + error));
    setUsers(users);
  }

  useEffect(() => {
    console.log(users);
  }, [users])

  if (!users)
  {
    fetchUsers();
  }

  return (
    <div className='h-screen flex flex-col gap-5 p-4'>
      <h1 className='text-xl'>Usuarios</h1>
      {users ? users.map((u: UserDataType) => (
        <UserCards user={u}/>
        )) : null}
    </div>
  )
}

export default EliminarUsuario
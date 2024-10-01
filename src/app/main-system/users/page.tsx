'use client'

import React, { useEffect } from 'react'
import { useRetrieveAllUsers } from '~/app/_components/hooks/useRetrieveUser'
import { api } from '~/trpc/server'

const EliminarUsuario = () => {
  
  const fetchUsers = async () => { // Función fetchUsers para conseguir usuario y contraseña para acceder acceso
    console.log('cllick');
    const users = await useRetrieveAllUsers()
                        .then(users => users)
                        .catch((error) => console.log('ERROR: ' + error));
    return <>
      {users ? users.map(u => {console.log(u)}) : null};
    </>;
  }

  fetchUsers();  
  return (
    <div className='h-screen'>
      Usuarios
      <button onClick={() => fetchUsers()}>getUsers</button>
    </div>
  )
}

export default EliminarUsuario
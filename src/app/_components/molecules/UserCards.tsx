import React, { FC } from 'react'
import { UserDataType } from '~/server/api/routers/newUser'
import Swal from 'sweetalert2'
import { useDeleteUser } from '../hooks/useRetrieveUser'


interface Props {
  user: UserDataType,
}

const UserCards: FC<Props> = ({user}) => {
  
  const deleteUser = async () => {
    const response = await useDeleteUser(user.id);
    if (response == 'success')
    {
      Swal.fire({
        title: "Eliminado!",
        text: "Usuario ha sido eliminado de forma exitosa",
        icon: "success"
      });
    }
  }
  const confirmation = () => {
    Swal.fire({
      title: `¿Seguro quieres eliminar al usuario: ${user.name}?`,
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF4141",
      cancelButtonColor: "#00A2FF",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser();
      }
    });
  }
  
  return (
    <div className='w-10/12 rounded-md border-2 drop-shadow-md grid grid-cols-10 p-2 items-center'>
      <p className='col-span-1'>{user.name}</p>
      <p className='col-start-3'>{user.email}</p>
      <button className='col-start-10 p-2 rounded-md bg-third text-white drop-shadow-sm border-2 hover:border-black' onClick={(user) => confirmation()}>Delete</button>
    </div>
  )
}

export default UserCards
import React, { FC } from 'react'
import { UserDataType } from '~/server/api/routers/newUser'
import { useDeleteUser } from '../hooks/useRetrieveUser'

interface Props {
  user: UserDataType,
}

const UserCards: FC<Props> = ({user}) => {
  const deleteUser = async () => {
    const response = await useDeleteUser(user.id);
    console.log(response);
  }
  
  return (
    <div className='w-10/12 rounded-md border-2 drop-shadow-md grid grid-cols-10 p-2 items-center'>
      <p className='col-span-1'>{user.name}</p>
      <p className='col-span-1'>{user.email}</p>
      <button className='col-start-10 p-2 rounded-md bg-third text-white drop-shadow-sm border-2 hover:border-black' onClick={(user) => deleteUser()}>Delete</button>
    </div>
  )
}

export default UserCards
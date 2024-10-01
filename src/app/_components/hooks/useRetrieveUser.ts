import { newUser } from './../../../server/api/routers/newUser';
'use server'

import { error } from "console";
import { api } from "~/trpc/server";
const argon2 = require('argon2')

type newUser = {
  name: string,
  password: string, 
  email: string,
}

export const useCreateUser = async (newUser: newUser) => {
  const hash = await argon2.hash(newUser.password)
    .then((h: string) => api.newUser.create({
      name: newUser.name,
      email: newUser.email,
      password: h,
    }))
    .catch((error: any) => console.log(error));
  
  
}

export const useRetrieveUser = async (name: string, password: string) => {
  const user = await api.newUser.getUser({name})
    .then((u) => u);
  if (!user) {
    return "Error: user not found";
  }
    
  try {
    if (await argon2.verify(user.password, password)) {
      return true
    }
    else {
      return false
    }
  }
  catch (error) {
    return error
  }
  
}

export const useRetrieveAllUsers = async() => {
  const user = await api.newUser.getAllUsers()
    .then((u) => u);
  
    return user;
}
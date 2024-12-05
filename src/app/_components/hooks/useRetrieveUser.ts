"use server";
import { type UserRole } from "@prisma/client";
import { type newUser } from "./../../../server/api/routers/newUser";

import { api } from "~/trpc/server";
import { loginSession } from "../library/sessionAuth";
import argon2 from "argon2";

// const argon2 = require("argon2");

type newUser = {
  name: string;
  password: string;
  email: string;
  role: UserRole;
};

export const useCreateUser = async (newUser: newUser) => {
  const hash = await argon2
    .hash(newUser.password)
    .then((h: string) =>
      api.newUser.create({
        name: newUser.name,
        email: newUser.email,
        password: h,
        role: newUser.role,
      }),
    )
    .catch((error: string) => console.log(error));
};

export const useRetrieveUser = async (name: string, password: string) => {
  const user = await api.newUser.getUser({ name }).then((u) => u);
  // console.log(user);
  if (!user) {
    return "Error: usuario no registrado";
  }

  try {
    if (await argon2.verify(user.password, password)) {
      await loginSession(user);
      return true;
    } else {
      return "Error: contraseña incorrecta";
    }
  } catch (error) {
    return error;
  }
};

export const useRetrieveAllUsers = async () => {
  const user = await api.newUser.getAllUsers().then((u) => u);

  return user;
};
export const useDeleteUser = async (id: string) => {
  const result = await api.newUser
    .deleteUser({ id: id })
    .then(() => "success")
    .catch((e) => "Error: " + e);
  return result;
};

"use client";

import React, { useState } from "react";
import { useCreateUser } from "~/app/_components/hooks/useRetrieveUser";

const RegisterUser = () => {
  const [user, setUser] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailValidation, setEmailValidation] = useState(false);

  function comprobarEntradas() {
    if (user === "") {
      const userEntry = document.getElementById("user");
      userEntry?.classList.add("placeholder-red-500");
      userEntry?.setAttribute("placeholder", "Email: NECESARIO");
    }
    if (password === "") {
      const passwordEntry = document.getElementById("password");
      passwordEntry?.classList.add("placeholder-red-500");
      passwordEntry?.setAttribute("placeholder", "Contraseña: NECESARIO");
    }
    if (user === "" || password === "") {
      return false;
    }
    return true;
  }

  function sessionSignIn(e: any) {
    e.preventDefault();
    const userEntry = document.getElementById("user");
    const passwordEntry = document.getElementById("password");
    const emailEntry = document.getElementById("email");
    if (!comprobarEntradas()) {
      userEntry?.setAttribute("placeholder", "Usuario: NECESARIO");
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
      emailEntry?.classList.add("placeholder-red-500");
      emailEntry?.setAttribute("placeholder", "Email: NECESARIO");
      if ((!email.includes("@") || !email.includes(".")) && !(email === "")) {
        setEmailValidation(true);
        console.log(emailValidation);
        return;
      }
    }
    // Comprobar que haya información
    if (
      password === "" ||
      email === "" ||
      user === "" ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      return;
    }
    // Generar usuario con valores de entrada
    useCreateUser({
      name: user,
      email: email,
      password: password,
    });
    alert("Usuario creado");
    window.location.reload();
  }

  return (
    <div className="max-md:h-full md:flex md:h-[90vh]">
      <img src="/images/Voluntariado2.png" className="-mt-2 h-[90vh]" />
      <aside className="flex w-full flex-col items-center justify-center max-md:mt-10">
        <form
          className="flex h-1/2 w-full flex-col items-center justify-center gap-10"
          id="sing_in"
        >
          <input
            className="input w-3/5 p-2"
            placeholder={"User"}
            type="text"
            onChange={(u) => setUser(u.target.value)}
            id="user"
          />
          <input
            className="input w-3/5 p-2"
            placeholder={"Email"}
            type="text"
            onChange={(u) => setEmail(u.target.value)}
            id="email"
          />
          <input
            className="input w-3/5 p-2"
            placeholder="Contraseña"
            type="password"
            onChange={(p) => setPassword(p.target.value)}
            id="password"
          />
          <button
            type="submit"
            className={`h-[3rem] w-32 items-center rounded-full bg-third py-2 text-center text-xl font-bold text-white drop-shadow-md hover:bg-[rgb(255,40,40)]`}
            onClick={(e) => sessionSignIn(e)}
          >
            Registrar
          </button>
        </form>
        {/* <hr
            className={`m-5 w-11/12 border-black border-b-[1] ${signIn ? "hidden" : ""}`}
          /> */}
      </aside>
    </div>
  );
};

export default RegisterUser;

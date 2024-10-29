"use client";

import { useState } from "react";
import {
  useCreateUser,
  useRetrieveUser,
} from "../_components/hooks/useRetrieveUser";
import RecuperarContrasenia from "../_components/organisms/RecuperarContrasenia";
import Link from "next/link";
import { Decorations } from "../_components/atoms/Decorations";

export default function AccessPage() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [recuperarContraseniaState, setRecuperarContraseniaState] =
    useState(false);
  const [code, setCode] = useState<string | boolean>(false);
  const [verificationCode, setVerificationCode] = useState<string>("");

  let userSession;

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

  function sessionLogIn(e: any) {
    e.preventDefault();

    if (!comprobarEntradas()) {
      return;
    }

    const fetch = async () => {
      // Función Fetch para conseguir usuario y contraseña para acceder acceso
      userSession = await useRetrieveUser(user, password)
        .then((value) => value)
        .catch((error) => {
          console.log("Error" + error);
          alert("Error: Usuario no registrado");
          return error;
        });
      console.log(userSession);
      if (userSession) {
        window.location.href = "main-system";
      }
    };
    fetch();
  }

  function handleVerifyCode(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (code === verificationCode) {
      console.log("success!");
    } else {
      console.log("Error!");
    }
  }
  if (code) {
    return (
      <form
        onSubmit={(e) => handleVerifyCode(e)}
        className="flex h-screen flex-col items-center justify-center gap-10"
      >
        <p>Ingresa el código de recuperación:</p>
        <input
          className="input w-1/5 p-2"
          placeholder="Código"
          type="text"
          onChange={(u) => setVerificationCode(u.target.value)}
          value={verificationCode}
        />
        <button
          type="submit"
          className="h-10 w-32 items-center rounded-full bg-specialRed py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
        >
          Enviar
        </button>
        <Decorations
          color1="specialBlue"
          color2="specialRed"
          color3="specialYellow"
          className={"right-[15rem] top-[5rem]"}
          rotation="45"
        />
        <Decorations
          color1="specialBlue"
          color2="specialYellow"
          color3="specialRed"
          className={"left-[10rem] top-[30rem]"}
          rotation="45"
        />
      </form>
    );
  }
  if (recuperarContraseniaState) {
    return (
      <RecuperarContrasenia
        setCode={(code: string | boolean) => setCode(code)}
      />
    );
  } else {
    return (
      <div className="max-md:h-full md:flex md:h-[90vh]">
        <img src="images/Voluntariado2.png" className="-mt-2 h-[90vh]" />
        <aside className="flex w-full flex-col items-center justify-center max-md:mt-10">
          <form
            className="flex h-1/2 w-full flex-col items-center justify-center gap-10"
            id="sing_in"
          >
            <input
              className="input w-3/5 p-2"
              placeholder={"Email"}
              type="text"
              onChange={(u) => setUser(u.target.value)}
              id="user"
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
              className={`h-[3rem] w-32 items-center rounded-full bg-specialRed py-2 text-center text-xl font-bold text-white drop-shadow-md hover:bg-[rgb(255,40,40)]`}
              onClick={(e) => sessionLogIn(e)}
            >
              Log in
            </button>
          </form>
          <a
            onClick={() => setRecuperarContraseniaState(true)}
            className="text-specialRed hover:underline"
          >
            ¿Olvidé mi contraseña?
          </a>
        </aside>
      </div>
    );
  }
}

"use client";

import { useState } from "react";
import {
  useCreateUser,
  useRetrieveUser,
} from "../_components/hooks/useRetrieveUser";
import RecuperarContrasenia from "../_components/organisms/RecuperarContrasenia";

export default function AccessPage() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [recuperarContraseniaState, setRecuperarContraseniaState] =
    useState(false);

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
      // console.log(userSession);
      if (userSession != "Error: usuario no registrado") {
        window.location.href = "main-system";
      } else {
        alert("Error: usuario no registrado");
      }
    };
    fetch();
  }

  function recuperarContraseña() {
    setRecuperarContraseniaState(true);
  }
  if (recuperarContraseniaState) {
    return <RecuperarContrasenia />;
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
              className={`bg-third h-[3rem] w-32 items-center rounded-full py-2 text-center text-xl font-bold text-white drop-shadow-md hover:bg-[rgb(255,40,40)]`}
              onClick={(e) => sessionLogIn(e)}
            >
              Log in
            </button>
          </form>
          {/* <hr
            className={`m-5 w-11/12 border-black border-b-[1] ${signIn ? "hidden" : ""}`}
          /> */}
        </aside>
      </div>
    );
  }
}

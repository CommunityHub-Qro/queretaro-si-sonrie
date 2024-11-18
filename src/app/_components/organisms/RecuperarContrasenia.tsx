import React, { useState } from "react";
import sendEmail from "../hooks/sendEmail";
import { Decorations } from "../atoms/Decorations";

const RecuperarContrasenia = () => {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    void sendEmail();
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex h-screen flex-col items-center justify-center gap-10"
    >
      <p>Ingresa su correo electrónico para recuperar su contraseña</p>
      <input
        className="input w-3/5 p-2"
        placeholder="Email"
        type="text"
        onChange={(u) => setEmail(u.target.value)}
        value={email}
      />
      <button
        type="submit"
        className="h-10 w-32 items-center rounded-full bg-third py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
      >
        Enviar
      </button>
      <Decorations
        color1="fifth"
        color2="third"
        color3="fourth"
        className={"right-[10rem] top-[10rem]"}
        rotation="45"
      />
      <Decorations
        color1="fifth"
        color2="fourth"
        color3="third"
        className={"left-[10rem] top-[30rem]"}
        rotation="45"
      />
    </form>
  );
};

export default RecuperarContrasenia;

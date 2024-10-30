import React, { FC, useState } from "react";
import sendEmail from "../hooks/sendEmail";
import { Decorations } from "../atoms/Decorations";

interface Props {
  setCode: (code: string | boolean) => void;
}

const RecuperarContrasenia: FC<Props> = ({ setCode }) => {
  const [email, setEmail] = useState("");

  let retrieveCode: boolean | string = false;
  async function handleSubmitRetrieve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    retrieveCode = await sendEmail(email)
      .then((code) => code)
      .catch((error) => {
        alert(error);
        return false;
      });
    setCode(retrieveCode);
  }

  return (
    <form
      onSubmit={(e) => handleSubmitRetrieve(e)}
      className="flex h-screen flex-col items-center justify-center gap-10"
    >
      <p>Ingresa su correo electrónico para recuperar su contraseña</p>
      <input
        className="input w-1/5 p-2"
        placeholder="Email"
        type="text"
        onChange={(u) => setEmail(u.target.value)}
        value={email}
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
};

export default RecuperarContrasenia;

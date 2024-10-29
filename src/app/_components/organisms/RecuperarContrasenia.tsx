import React, { useEffect, useState } from "react";
import sendEmail from "../hooks/sendEmail";
import { Decorations } from "../atoms/Decorations";

const RecuperarContrasenia = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  let retrieveCode: boolean | string = false;
  async function handleSubmitRetrieve(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    retrieveCode = await sendEmail(email)
      .then((code) => code)
      .catch((error) => {
        alert("Error: " + error);
        return false;
      });
    console.log(retrieveCode);
  }

  // function handleVerifyCode(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   if (retrieveCode === code) {
  //     console.log("success");
  //   }
  //   console.log("ERROR: Wrong code");
  // }
  // if (retrieveCode) {
  //   return (
  //     <form
  //       onSubmit={(e) => handleVerifyCode(e)}
  //       className="flex h-screen flex-col items-center justify-center gap-10"
  //     >
  //       <p>Ingresa el código de recuperación:</p>
  //       <input
  //         className="input w-1/5 p-2"
  //         placeholder="Código"
  //         type="text"
  //         onChange={(u) => setCode(u.target.value)}
  //         value={code}
  //       />
  //       <button
  //         type="submit"
  //         className="h-10 w-32 items-center rounded-full bg-specialRed py-2 text-center text-white drop-shadow-md hover:bg-[rgb(255,40,40)]"
  //       >
  //         Enviar
  //       </button>
  //       <Decorations
  //         color1="specialBlue"
  //         color2="specialRed"
  //         color3="specialYellow"
  //         className={"right-[15rem] top-[5rem]"}
  //         rotation="45"
  //       />
  //       <Decorations
  //         color1="specialBlue"
  //         color2="specialYellow"
  //         color3="specialRed"
  //         className={"left-[10rem] top-[30rem]"}
  //         rotation="45"
  //       />
  //     </form>
  //   );
  // }

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

import React, { FC, useState } from "react";
import { Decorations } from "../atoms/Decorations";

interface Props {
  setVerificationCode: (val: string) => void;
  handleVerifyCode: (val: React.FormEvent<HTMLFormElement>) => void;
}

const VerificarCodigoDeRecuperacion: FC<Props> = ({
  setVerificationCode,
  handleVerifyCode,
}) => {
  const [code, setCode] = useState<string>("");
  return (
    <div>
      <form
        onSubmit={(e) => handleVerifyCode(e)}
        className="flex h-screen flex-col items-center justify-center gap-10"
      >
        <p>Ingresa el código de recuperación:</p>
        <input
          className="input w-1/5 p-2"
          placeholder="Código"
          type="text"
          onChange={(u) => {
            setVerificationCode(u.target.value);
            setCode(u.target.value);
          }}
          value={code}
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
    </div>
  );
};

export default VerificarCodigoDeRecuperacion;

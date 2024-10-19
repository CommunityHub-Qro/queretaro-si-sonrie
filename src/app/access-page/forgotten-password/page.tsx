"use client";

import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-bold">Olvide mi contraseña</h1>
      <input
        className="input w-2/5 p-2"
        placeholder={"Email"}
        type="text"
        onChange={(u) => setEmail(u.target.value)}
        id="email"
      />
      <button className="bg-specialRed mt-10 h-16 w-40 items-center rounded-full py-2 text-center font-bold text-white drop-shadow-md hover:bg-[rgb(255,40,40)]">
        Enviar correo de recuperación
      </button>
    </div>
  );
};

export default ForgotPassword;

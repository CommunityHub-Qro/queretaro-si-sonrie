'use client'

import {  useSession } from "next-auth/react";
import { useState } from "react";

export default function AccessPage(){
    const session = useSession();
    // console.log(session);
    const [user, setUser] = useState<string>();
    const [password, setPassword] = useState<string>();

    function login(e: any) {
        e.preventDefault();
        useRetrieveUser
    }
    function recuperarContraseña() {

    }
    return(
        <div className="h-[90vh] flex">
            <img src="images/Voluntariado2.png" className="h-[90vh]"/>
            <form className="flex justify-center items-center flex-col h-full w-full gap-10" id="sing_in">
                <input className="w-3/5 input p-2" placeholder="Usuario" type="text" onChange={(u) => setUser(u.target.value)}/>
                <input className="w-3/5 input p-2" placeholder="Contraseña" type="password" onChange={(p) => setPassword(p.target.value)}/>
                {/* <button className="w-1/3 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center"
                    onClick={() => signIn()}>
                    <img src="icons/google.webp" className="size-10"/>
                    <p>Ingresar con google</p>
                </button> */}
                <button type="submit" className="w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-[3rem] items-center text-white font-bold text-xl"
                    onClick={(e) => login(e)}>
                    Entrar
                </button>
                <a className="text-[rgb(255,65,65)] text-sm -mt-8" onClick={() => recuperarContraseña()}>
                    ¿Olvidaste tu contraseña?
                </a>
            </form>
        </div>
    );
}

function useRetrieveUser() {
    throw new Error("Function not implemented.");
}

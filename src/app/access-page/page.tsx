'use client'

import { useState } from "react";
import { useCreateUser, useRetrieveUser } from "../_components/hooks/useRetrieveUser";

export default function AccessPage(){
    const [user, setUser] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [signIn, setSignIn] = useState(false);

    let userSession;

    function sessionLogIn(e: any) {
        e.preventDefault();
        const fetch = async () => {
            userSession = await useRetrieveUser(user, password)
                                .then((value) => value)
                                .catch((error) => 
                                    console.log("Error" + error)
                                );
            console.log(userSession)
        }
        fetch();
    }

    function sessionSignIn(e: any) {
        if (!signIn){
            e.preventDefault();
            setSignIn(true);
            return
        }
        if (user === '') {
            const userEntry = document.getElementById('user');
            userEntry?.classList.add('placeholder-red-500')
            userEntry?.setAttribute('placeholder', 'Usuario: NECESARIO')
        }
        if (email === '') {
            const emailEntry = document.getElementById('email');
            emailEntry?.classList.add('placeholder-red-500')
            emailEntry?.setAttribute('placeholder', 'Email: NECESARIO')
        }
        if (password === '') {
            const passwordEntry = document.getElementById('password');
            passwordEntry?.classList.add('placeholder-red-500')
            passwordEntry?.setAttribute('placeholder', 'Contraseña: NECESARIO')
        }
        if (password === '' || email === '' || user === '') {
            return 
        }

        useCreateUser({
            name: user,
            email: email,
            password: password,
        });
        alert('Usuario creado')
        window.location.reload();
        
    }

    function recuperarContraseña() {
        console.log("recuperar contraseña")
        const fetch = async () => {
            const userR = await useRetrieveUser(user, password)
                .then((userR) => console.log(user))
                .catch((error) => console.log("ERROR! " + error));
        }
    }
    
    return(
        <div className="md:h-[90vh] md:flex max-md:h-full">
            <img src="images/Voluntariado2.png" className="h-[90vh]"/>
            <aside className="flex flex-col justify-center items-center w-full max-md:mt-10">
                <form className="flex justify-center items-center flex-col h-1/2 w-full gap-10" id="sing_in">
                    <input className="w-3/5 input p-2" placeholder={`${signIn ? 'User' : 'Email'}`} type="text" onChange={(u) => setUser(u.target.value)} id='user'/>
                    {signIn ? 
                        <input className="w-3/5 input p-2" placeholder="Email" type="text" onChange={(u) => setEmail(u.target.value)} id='email'/> : null}
                    <input className="w-3/5 input p-2" placeholder="Contraseña" type="password" onChange={(p) => setPassword(p.target.value)} id='password'/>
                    <button type="submit" className={`w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-[3rem] items-center text-white font-bold text-xl ${signIn ? 'hidden' : null}`} 
                        onClick={(e) => sessionLogIn(e)}>
                        Log in
                    </button>
                    <a className={`text-[rgb(255,65,65)] text-sm -mt-8 cursor-pointer ${signIn ? 'hidden' : null} `} onClick={() => recuperarContraseña()}>
                        ¿Olvidaste tu contraseña?
                    </a>
                </form>
                <hr className={`w-11/12 border-b-[1] border-black m-5 ${signIn ? 'hidden' : ''}`}/>
                <button type="submit" className="w-32 drop-shadow-md border-third border-4 rounded-full text-center hover:bg-third py-2 h-[3rem] items-center text-black font-bold text-xl hover:text-white flex justify-center"
                    onClick={(e) => sessionSignIn(e)}>
                    Sign in
                </button>
            </aside>
        </div>
    );
}

import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function AccessPage(){
    return(
        <HydrateClient>
            <div className="h-[90vh] flex">
                <img src="images/Voluntariado2.png" className="h-[90vh]"/>
                <form className="flex justify-center items-center flex-col h-full w-full gap-10" id="sing_in">
                    <input className="w-3/5 input p-2" placeholder="Usuario" type="text"/>
                    <input className="w-3/5 input p-2" placeholder="Contraseña" type="password"/>
                    <button type="submit" className="w-32 drop-shadow-md bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-[3rem] items-center text-white font-bold text-xl">Entrar</button>
                </form>
            </div>
        </HydrateClient>
    );
}
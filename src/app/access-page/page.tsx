import { HydrateClient } from "~/trpc/server";
import Link from "next/link";

export default function AccessPage(){
    return(
        <HydrateClient>
            <Link href={'main-system'} className='flex items-center justify-center w-32 drop-shadow-md text-white bg-third rounded-full text-center hover:bg-[rgb(255,40,40)] py-2 h-full'>
            Acceder
            </Link>
        </HydrateClient>
    );
}
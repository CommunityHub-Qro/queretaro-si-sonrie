import { HydrateClient } from "~/trpc/server";

export default function System(){
    return(
        <HydrateClient>
            <div>System</div>
        </HydrateClient>
    );
}
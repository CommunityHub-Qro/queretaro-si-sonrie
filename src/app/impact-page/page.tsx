import { HydrateClient } from "~/trpc/server";

export default function ImpactPage(){
    return(
        <HydrateClient>
            <div>new page</div>
        </HydrateClient>
    );
}
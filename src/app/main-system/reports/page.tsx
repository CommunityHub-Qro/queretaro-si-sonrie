import { HydrateClient } from "~/trpc/server";

export default function Reports(){
    return(
        <HydrateClient>
            <div>Reports</div>
        </HydrateClient>
    );
}
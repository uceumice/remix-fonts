import { LoaderArgs } from "@remix.w/types";

// https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap

export async function loader({ request, context }: LoaderArgs) {
    return await fetch(`https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap`, request)
}

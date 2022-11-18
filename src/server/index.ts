import { DefineRouteFunction } from "@remix-run/dev/dist/config/routes";
import path from "path";

interface Config {
    filesDir?: string;
    mountRoute?: string;
}

export function WRemixFonts(route: DefineRouteFunction, config?: Config) {
    // ...
    const dir = (p: string) => path.join(p, (config?.filesDir || "."), "fonts");

    // ...
    route("/api/fonts", dir("./api/index.ts"));
    route("/api/fonts/proxy/google/:file", dir("./proxy/google.ts"));
}
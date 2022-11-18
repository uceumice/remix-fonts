
interface Config {
    google?: (string | {
        family: "string",
        width?: number;
    })[];
}

export function WFontLink(config: Config) {
    return {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
    };
}
import { Discord, Github, Onlyfans, TelegramIcon } from "@icons"
import { IConfig } from "./types"

export const config: IConfig = {
    networks: [
        {
            id: 1,
            url: "https://t.me/localhostov",
            title: "Telegram channel",
            caption: "@localhostov",
            icon: <TelegramIcon />,
        },
        {
            id: 2,
            url: "https://t.me/lolchs",
            title: "Telegram account",
            caption: "@locxlx",
            icon: <TelegramIcon />,
        },
        {
            id: 3,
            url: "https://github.com/localhostov",
            title: "GitHub",
            caption: "@localhostov",
            icon: <Github />,
        },
        {
            id: 4,
            url: "https://discordapp.com/users/805158509645398096",
            title: "Discord",
            caption: "@localhostov",
            icon: <Discord />,
        },
        {
            id: 5,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "Onlyfans",
            caption: "@localhostov",
            icon: <Onlyfans />,
        },
    ],
}

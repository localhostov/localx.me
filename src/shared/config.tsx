import { Discord, Github, Onlyfans, TelegramIcon } from "@icons"
import { IConfig } from "./types"

export const config: IConfig = {
    networks: [
        {
            id: 1,
            url: "https://t.me/localhostov",
            title: "Telegram канал",
            caption: "@localhostov",
            icon: <TelegramIcon />,
        },
        {
            id: 2,
            url: "https://t.me/lolchs",
            title: "Telegram ЛС",
            caption: "@lolchs",
            icon: <TelegramIcon />,
        },
        {
            id: 3,
            url: "https://gtihub.com/localhostov",
            title: "GitHub",
            caption: "@localhostov",
            icon: <Github />,
        },
        {
            id: 4,
            url: "https://gtihub.com/localhostov",
            title: "GitHub 2nd",
            caption: "@localhostov2",
            icon: <Github />,
        },
        {
            id: 5,
            url: "https://discordapp.com/users/805158509645398096",
            title: "Discord",
            caption: "@localhostov",
            icon: <Discord />,
        },
        {
            id: 6,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "Onlyfans",
            caption: "@localhostov",
            icon: <Onlyfans />,
        },
    ],
}

import { DiscordIcon, GithubIcon, OnlyfansIcon, TelegramIcon } from "@icons"
import { IConfig } from "./types"

const iconSizePx = 28

export const config: IConfig = {
    networks: [
        {
            id: 1,
            url: "https://t.me/localhostov",
            title: "Telegram channel",
            caption: "@localhostov",
            icon: <TelegramIcon width={iconSizePx} height={iconSizePx} />,
        },
        {
            id: 2,
            url: "https://t.me/localxxl",
            title: "Telegram account",
            caption: "@localxxl",
            icon: <TelegramIcon width={iconSizePx} height={iconSizePx} />,
        },
        {
            id: 3,
            url: "https://github.com/localhostov",
            title: "GitHub",
            caption: "@localhostov",
            icon: <GithubIcon width={iconSizePx} height={iconSizePx} />,
        },
        {
            id: 4,
            url: "https://discordapp.com/users/805158509645398096",
            title: "Discord",
            caption: "@localhostov",
            icon: <DiscordIcon width={iconSizePx} height={iconSizePx} />,
        },
        {
            id: 5,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            title: "Onlyfans",
            caption: "@localhostov",
            icon: <OnlyfansIcon width={iconSizePx} height={iconSizePx} />,
        },
    ],
}

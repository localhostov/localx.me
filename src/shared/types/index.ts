import { ReactElement } from "react"

interface Network {
    id: number
    url: string
    title: string
    caption: string
    icon: ReactElement
}

export interface IConfig {
    networks: Network[]
}

export interface IconProps {
    width?: number
    height?: number
    color?: string
}

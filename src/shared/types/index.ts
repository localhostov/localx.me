import { ReactElement } from "react"

interface INetwork {
    id: number
    url: string
    title: string
    caption: string
    icon: ReactElement
}

export interface IConfig {
    networks: INetwork[]
}

export interface IIconProps {
    width?: number
    height?: number
    color?: string
}

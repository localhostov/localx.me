import { IconProps } from "@shared"

export const OnlyfansIcon = ({
    width = 24,
    height = 24,
    color = "#FFFFFF",
}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            width={width}
            height={height}
        >
            <path fill="none" d="M0 0H400V400H0z" />
            <path
                fill={color}
                d="M137.5 75a125 125 0 10125 125 125 125 0 00-125-125zm0 162.5A37.5 37.5 0 11175 200a37.45 37.45 0 01-37.5 37.5z"
            />
            <path
                fill={color}
                d="M278 168.75c31.76 9.14 69.25 0 69.25 0-10.88 47.5-45.38 77.25-95.13 80.87A124.73 124.73 0 01137.5 325L175 205.81C213.55 83.3 233.31 75 324.73 75h62.77c-10.5 46.25-46.69 81.58-109.5 93.75z"
            />
        </svg>
    )
}

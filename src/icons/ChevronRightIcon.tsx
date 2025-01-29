import { IconProps } from "@shared"

export const ChevronRightIcon = ({
    width = 24,
    height = 24,
    color = "#FFFFFF",
}: IconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 6l6 6-6 6"
            />
        </svg>
    )
}

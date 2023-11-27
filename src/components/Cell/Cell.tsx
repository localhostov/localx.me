import { ReactElement } from "react"
import styles from "./styles.module.css"

interface IProps {
    title: string
    caption: string
    before?: ReactElement
    after?: ReactElement
    action?: () => void
}

export const Cell = ({ title, caption, before, after, action }: IProps) => {
    return (
        <div
            className={`${styles.container} ${
                action ? styles.clickableContainer : undefined
            }`}
            onClick={action}
        >
            {before && <div className={styles.before}>{before}</div>}

            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                <div className={styles.caption}>{caption}</div>
            </div>

            {after && <div className={styles.after}>{after}</div>}
        </div>
    )
}

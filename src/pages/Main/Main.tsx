import { Cell } from "@components"
import { ChevronRight } from "@icons"
import { config } from "@shared"
import styles from "./styles.module.css"

export const Main = () => {
    const networks = config.networks.map((item, index) => (
        <div key={`network-${item.id}`}>
            <Cell
                title={item.title}
                caption={item.caption}
                before={item.icon}
                action={() => window.open(item.url, "_blank")}
                after={<ChevronRight />}
            />

            {index !== config.networks.length - 1 && (
                <div className={styles.networkDivider} />
            )}
        </div>
    ))

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.name}>Alexander Localhostov</div>
                <div>Me in social media</div>
            </div>

            <div style={{ height: 24 }} />

            <div className={styles.networksContainer}>{networks}</div>
        </div>
    )
}

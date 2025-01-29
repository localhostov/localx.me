import { Cell } from "@components"
import { ChevronRightIcon } from "@icons"
import { config } from "@shared"
import styles from "./styles.module.css"

export const MainPage = () => {
    const networks = config.networks.map((item, index) => (
        <div key={`network-${item.id}`}>
            <Cell
                title={item.title}
                caption={item.caption}
                before={item.icon}
                action={() => window.open(item.url, "_blank")}
                after={<ChevronRightIcon width={24} height={24} />}
            />

            {index !== config.networks.length - 1 && (
                <div className={styles.networkDivider} />
            )}
        </div>
    ))

    return (
        <div className={styles.container}>
            <center>
                <h3>Alexander Localhostov</h3>
                <p className={styles.nameCaption}>My accounts</p>
            </center>

            <div className={styles.networksContainer}>{networks}</div>
        </div>
    )
}

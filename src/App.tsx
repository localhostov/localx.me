import "./root.css"
import { Main } from "@pages"
import { useEffect } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { noisyLinesBackground } from "threejs-toys"

export const App = () => {
    const setupBackground = () => {
        noisyLinesBackground({
            el: document.querySelector("#root"),
            colors: [4283706273, 4286735330],
            minStroke: 0.5,
            maxStroke: 2,
            timeCoef: 0.0001,
            coordScale: 1,
            displacementScale: 0.02,
        })
    }

    useEffect(() => {
        setupBackground()
    }, [])

    useEffect(() => {
        window.addEventListener("resize", setupBackground)

        return () => window.removeEventListener("resize", setupBackground)
    }, [])

    return (
        <>
            <Main />
        </>
    )
}

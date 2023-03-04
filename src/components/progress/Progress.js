import React from "react"
import StepIdx from "./StepIdx"

export default function Progress() {
    let txts = ["Your Info", "Seclect Plan", "add-ones", "Summary"]
    let [active, setActive] = React.useState("")

    return <div className="progress">
        <div className="steps-container">
            {
                txts.map((el, idx) => <StepIdx txt={el} num={idx+1} key={idx} active={active} /> )
            }
        </div>
    </div>
}
import React from "react"

export function Plan({name, heading, pricing, icon, id}) {
    const [isChoosed, setChoosed] = React.useState(false)
    const [color, setColor] = React.useState("")

    return (
        <div className={"plan-box"}> 
            <input
                className="plan-opt"
                type="radio"
                name={name}
                value={isChoosed}
                onChange={() => {setChoosed(prev => !prev)}}
            />

            <div className="icon" style={{
                backgroundImage: `url(${icon})`
            }}></div>

            <div className="plan-txt">
                <h2>{heading}</h2>
                <p>{pricing}</p>
            </div>
        </div>
    )
}
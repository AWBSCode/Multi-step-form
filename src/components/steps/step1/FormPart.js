import { useState } from "react";

export function FormPart(props) {
    const [reqStyle, setReqStyle] = useState({}), [isReq, setReq] = useState(false)

    function requiedHandler(e) {
        e.preventDefault()
        setReqStyle({
            border: '1px solid red'
        })
        setReq(true)
    }

    return (<div className="part">
        <div className="labels">
            <label>{props.label}</label>
            <p style={{ color: 'red' }} hidden={!isReq}>This field is required</p>
        </div>
        <input
            type={props.type}
            placeholder={props.holder}
            required
            onInvalid={requiedHandler}
            style={reqStyle} />
    </div>)
}
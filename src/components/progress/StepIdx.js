export default function StepIdx(props) {
    return <div className="step-container-idx">
        <div className="step-num-idx">{props.num}</div>
        <div className="step-content-idx">
            <span>STEP {props.num}</span>
            <br />
            <p>{props.txt}</p>
        </div>
    </div>
}
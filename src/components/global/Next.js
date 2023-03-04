const Button = (props) => {
    return (
        <button
            onClick={props.clickHandler}
            type="submit"
            className="btn"
        >
            {props.text}
        </button>
    );
};
export default Button;
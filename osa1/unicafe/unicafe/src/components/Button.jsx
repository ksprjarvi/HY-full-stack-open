/* eslint-disable react/prop-types */
const Button = (props) => {
    return (
        <button onClick={props.task}>{props.title}</button>
    )
}

export default Button;
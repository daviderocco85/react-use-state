import './Button.css'


export const Button = props => {
    return (
        <button
            className={props.active === props.item.id ? "tab-btn active" : "tab-btn"}
            onClick={() =>
                props.setActive(props.item.id)
            }
        >
            {props.item.title}
        </button>
    );
};
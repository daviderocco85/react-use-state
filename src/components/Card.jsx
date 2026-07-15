import './Card.css'

export const Card = props => {

    return (
        <div className="content-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};
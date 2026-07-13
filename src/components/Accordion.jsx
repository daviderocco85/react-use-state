import './Accordion.css'
import { useState } from 'react'


export const Accordion = props => {
    const [active, setActive] = useState(props.data[0].id);
    const current = props.data.find(item => item.id === active);
    return (
        <>
            <div className="tabs">
                {props.data.map((item) => (
                    <button
                        key={item.id}
                        className={active === item.id ? "tab-btn active" : "tab-btn"}
                        onClick={() => setActive(item.id)}
                    >
                        {item.title}
                    </button>
                ))}
            </div>

            <div className="content-box">
                <h2>{current.title}</h2>
                <p>{current.description}</p>
            </div>
        </>
    )
};




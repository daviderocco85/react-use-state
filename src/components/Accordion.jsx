import './Accordion.css'
import { useState } from 'react'
import { Button } from './Button';
import { Card } from "./Card";


export const Accordion = props => {
    const [active, setActive] = useState(props.data[0].id)
    const currentCard = props.data.find(item => item.id === active);

    return (
        <>
            <div className="buttons">
                {props.data.map((item) => (

                    <Button
                        key={item.id}
                        item={item}
                        active={active}
                        setActive={setActive}
                    />
                ))}
            </div>
            {currentCard && <Card title={currentCard.title} description={currentCard.description} />}
        </>
    )
};




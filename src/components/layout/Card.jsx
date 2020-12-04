import React from 'react';
import './Card.css';
export default props => {

    const cardStyle = {
        backgroundColor: props.color || 'red',
        borderColor: props.color || 'red'
    }

    return (
        <div className="Card" style={cardStyle}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}
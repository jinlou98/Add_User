import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    return (
        // we want Card to recognize className 
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    )
};

export default Card;
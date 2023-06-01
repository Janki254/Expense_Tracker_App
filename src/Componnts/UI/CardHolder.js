import React from 'react';
import './CardHolder.css';

const CardHolder = (props) => {
    const classes = `card-holder ${props.className}`;
    return <div className={classes}>{props.children}</div>;
};

export default CardHolder;

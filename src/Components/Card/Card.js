import React from 'react';
import './Card.css';

const Card = ({id, img, title, handleClick}) => {
    return(
        <div onClick = {() => handleClick(id)} className="card">
            <img src={img} alt="" />
            <h4 className="category-title">{title}</h4>
        </div>
    );

}

export default Card;
import React from 'react';
import placeholder from '../styling/imgs/img-placeholder.png';
import '../styling/item-thumbnail.css';

const ItemThumbNail = (props) => {
    return (
        <div className="item-container">
            <div className="img-container">
                <img src={placeholder} alt="default img placeholder" />
            </div>
            <h4 className="item-name">{props.item.name}</h4>
    <p className="item-price">{props.item.price}</p>
            <p className="item-quantity">{props.item.quantity}</p>
        </div>
    )
}

export default ItemThumbNail;
import React from 'react';
import placeholder from '../styling/imgs/img-placeholder.png';
import '../styling/item-thumbnail.css';
import Link from '@material-ui/core/Link';

const ItemThumbNail = (props) => {

    
    return (
        <Link href="/item-page" item={props.item}>
        <div className="thumbnail-container">
            <div className="img-container">
                <img src={placeholder} alt="default img placeholder" />
            </div>
            <h4 className="item-name">{props.item.name}</h4>
             <p className="item-price">{props.item.price}</p>
            <p className="item-quantity">{props.item.quantity}</p>
        </div>
        </Link>
    )
}

export default ItemThumbNail;
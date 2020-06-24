import React from 'react';
import placeholder from '../styling/imgs/img-placeholder.png';
import '../styling/item-thumbnail.css';
import Link from '@material-ui/core/Link';

const ItemThumbNail = (props) => {

    
    return (
        <Link href="/item-page" item={props.item}>
        <div className="thumbnail-container">
            <div className="thumb-img-container">
                <img src={props.item.img} alt="default img placeholder" />
            </div>
            <h4 className="thumb-item-name">{props.item.name}</h4>
             <p className="thumb-item-price">Price: ${props.item.price}</p>
        </div>
        </Link>
    )
}

export default ItemThumbNail;
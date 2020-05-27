import React from 'react';
import placeholder from '../styling/imgs/img-placeholder.png';
import '../styling/item-page.css';

const ItemPage = (props) => {
    return(
        <div className="item-container">
            <div className="left-item-content">
                <div className="image-carousel">
                    <img src={placeholder} alt="default img placeholder" />
                </div>
                <p className="item-desc">The Metolius Ultralight Asymmetric Curve Nut is 30% lighter than standard stoppers out there, and that's just the start of convenience on the climb. It also has an asymmetric shape that eases placing and cleaning in flared cracks, pin scars. Metolius anodized each nut in a different color to help you identify the right size at the right place at the right time.</p>
            </div>

            <div className="right-item-content">
                <p className="item-name">Item Name</p>
                <p className="item-price">Item Price</p>
                <p className="item-quantity">Item Quantity</p>
            </div>

        </div>
    )
};

export default ItemPage;
import React, {useState} from 'react';
import placeholder from '../styling/imgs/img-placeholder.png';
import '../styling/item-page.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';

const selectedItem = JSON.parse(localStorage.getItem('selected'));

const ItemPage = () => {
    const [email] = useState(localStorage.getItem('email'));
    const [item] = useState(JSON.parse(localStorage.getItem('selected'))._id);

    fetch(`http://localhost:5100/api/accounts/cart`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, item})
    })

    return(
        <div className="item-container">
            <div className="left-item-content">
                <div className="image-carousel">
                    <img src={placeholder} alt="default img placeholder" />
                </div>
                <p className="item-desc">{selectedItem.desc}</p>
            </div>

            <div className="right-item-content">
                <p className="item-name">{selectedItem.name}</p>
                <p className="item-price">{selectedItem.price}</p>
                <p className="item-quantity">{selectedItem.quantity}</p>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<AddShoppingCartIcon />}
                >Add to Cart
                </Button>
            </div>



        </div>
    )
};

export default ItemPage;
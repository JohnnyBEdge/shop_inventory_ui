import React, {useState, useContext} from 'react';
import '../styling/item-page.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { UserContext } from '../context/user-context';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const selectedItem = JSON.parse(localStorage.getItem('selected'));

const ItemPage = () => {

    let existingCart = localStorage.getItem("cart");
    const user = useContext(UserContext);
    const [id] = useState(user._id);
    const [item] = useState(JSON.parse(localStorage.getItem('selected')));
    const [cart, setCart] = useState(JSON.parse(existingCart))



    const handleAddToCart = () => {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart))
    };



    return(
        <div className="item-container">
            <div className="left-item-content">
                <div className="image-carousel">
                    <img src={selectedItem.img} className="item-img" alt="default img placeholder" />
                </div>
                <p className="item-desc">{selectedItem.desc}</p>
            </div>
            <div className="right-item-content">
                <p className="item-name">{selectedItem.name}</p>
                <p className="item-price">Price: ${selectedItem.price}</p>
                <FormControl variant="outlined" >
                <InputLabel id="demo">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    className="select-size"
                    label="Size"
                >
                    <MenuItem value={"s"}>Small</MenuItem>
                    <MenuItem value={"m"}>Medium</MenuItem>
                    <MenuItem value={"l"}>Large</MenuItem>
                </Select>
                </FormControl>
                <p className="item-quantity">Quantity: {selectedItem.quantity}</p>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddToCart()}
                >Add to Cart
                </Button>
            </div>
        </div>
    )
}

    export default ItemPage









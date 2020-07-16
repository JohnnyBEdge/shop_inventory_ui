import React, {useState} from 'react';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const Item = () => {

    const [item] = useState(JSON.parse(localStorage.getItem('selected')));
    const classes = useStyles();
    return(
        <div className={classes.itemContainer}>
            <div className={classes.itemContent}>
                <div className="image-carousel">
                    <img 
                        src={item.img} 
                        className={classes.img} 
                        alt="default img placeholder" 
                    />
                </div>
                <p className={classes.desc}>{item.desc}</p>
            </div>
            <div className={classes.itemContent}>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.price}>Price: ${item.price}</p>
                <FormControl variant="outlined" >
                <InputLabel id="demo">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    className={classes.selectSize}
                    label="Size"
                >
                    <MenuItem value={"s"}>Small</MenuItem>
                    <MenuItem value={"m"}>Medium</MenuItem>
                    <MenuItem value={"l"}>Large</MenuItem>
                </Select>
                </FormControl>
                <p className={classes.quantity}>Quantity: {item.quantity}</p>
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<AddShoppingCartIcon />}
                    // onClick={() => handleAddToCart()}
                >Add to Cart
                </Button>
            </div>
        </div>
    )
}
const useStyles = makeStyles(() => ({
    itemContainer: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        height: "auto",
    },
    itemContent: {
        display: "flex",
        flexDirection: "column",
        width: "1fr",
        alignItems: "center",
    },
    img: {
        width: 400,
        padding: 20
    },
    desc: {
        lineHeight: 1.5,
        fontSize: 20,
        fontWeight: 300,
        padding: 5,
        width: 600,
    },
    selectSize: {
        minWidth: 120
    },
    name: {
        fontFamily: "Stuart,Georgia,serif",
        fontWeight: 700,
        fontSize: 35,
        padding: 5,
        marginTop: 40,
    },
    quantity: {
        fontSize: 18
    },
    price: {
        fontSize: 18
    }
  }));

export default Item;
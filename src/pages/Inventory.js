import React, {useState, useContext} from 'react';
import ItemThumbnail from '../components/ItemThumbnail';
import {ItemContext} from '../context/item-context';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router";


const Inventory = () => {

    // const [inventory, setInventory] = useState([]);
    const inventory = useContext(ItemContext);
    const [selected, setSelected] = useState({});

    // function getInventory(){
    //     fetch(`https://jm-shop-api.herokuapp.com/api/inventory`)
    //         .then(response => response.json())
    //         .then(data => setInventory(data))
    //     };

    const handleSelected = (item) => {
        localStorage.setItem('selected', JSON.stringify(item))
    }
    let { id } = useParams();
    const item = inventory.map((item) => {
        return <a to={`/item/${item._id}` }onClick={() => handleSelected(item)} key={item._id}>
                <ItemThumbnail item={item}/>
            </a>
    });

    // useEffect(() => {
    //     getInventory();
    // }, []);



    const classes = useStyles();
    return(
        <div id="inventory_container" >
            <h1>Inventory Page</h1>
            <div id="items_container" className={classes.itemsContainer}>
                {item}
            </div> 
        </div>
    )
}

const useStyles = makeStyles(() => ({
    itemsContainer: {
        width: "80%",
        height: "auto",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: 15,
        marginTop: 30,
    },
  }));

export default Inventory;
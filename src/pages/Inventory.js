import React, {useState, useEffect} from 'react';
import ItemThumbnail from '../components/ItemThumbnail';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const Inventory = () => {

    const [inventory, setInventory] = useState([]);
    const [selected, setSelected] = useState({});

    function getInventory(){
        fetch(`https://jm-shop-api.herokuapp.com/api/inventory`)
            .then(response => response.json())
            .then(data => setInventory(data))
        };

    const handleSelected = (item) => {
        localStorage.setItem('selected', JSON.stringify(item))
    }

    const item = inventory.map((item) => {
        return <Link to="/item" onClick={() => handleSelected(item)} key={item._id}>
                <ItemThumbnail item={item}/>
            </Link>
    });

    useEffect(() => {
        getInventory();
    }, []);

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
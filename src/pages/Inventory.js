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
        console.log("inventory ",inventory)

    const handleSelected = (item) => {
        localStorage.setItem('selected', JSON.stringify(item))
    }

    const item = inventory.map((item) => {
        return <Link to="/item-page" onClick={() => handleSelected(item)} key={item._id}>
                <ItemThumbnail item={item}/>
            </Link>
    });

    useEffect(() => {
        getInventory();
    }, []);

    const classes = useStyles();
    return(
        <div id="inventory_container">
            <h1>Inventory Page</h1>
            <div id="items_container">
                {item}
            </div> 
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
  }));

export default Inventory;
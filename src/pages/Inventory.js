import React, {useState, useContext} from 'react';
import {ItemContext} from '../context/item-context';
import '../styling/main.css';


import ItemThumbnail from '../components/ItemThumbnail';
import Link from '@material-ui/core/Link';
// import classes from '*.module.css';




const Inventory = () => {
const [open, setOpen] = useState(false);
// const [selected, setSelected] = useState('')

const inventory = useContext(ItemContext);

const handleSelected = (item) => {
    localStorage.setItem('selected', JSON.stringify(item))
}
    
const item = inventory.map((item) => {
    return <Link to="/item-page" onClick={() => handleSelected(item)}>
            <ItemThumbnail item={item}/>
        </Link>

});



    return (
        <div id="inventory_container">

            <div id="items_container">
                {item}
            </div> 
        
        </div>
        
    )
};

export default Inventory;
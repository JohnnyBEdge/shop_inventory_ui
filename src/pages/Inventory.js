import React, {useState, useEffect} from 'react';
import '../styling/main.css';


import ItemThumbnail from '../components/ItemThumbnail';


const Inventory = () => {

const [inventory, setInventory] = useState([]);
const [error, setError] = useState(false);
const [open, setOpen] = useState(false);


async function getInventory(){
    const response = await fetch('http://localhost:5100/api/inventory');
    response.json()
        .then(response => setInventory(response))
        .catch(err => setError());
};

useEffect(() => {
    getInventory();
}, []);
    
const item = inventory.map((item) => {
    return <ItemThumbnail item={item} />;
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
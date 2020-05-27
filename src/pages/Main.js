import React, {useState, useEffect} from 'react';
import '../styling/main.css';
import ItemThumbnail from '../components/ItemThumbnail';

const Main = () => {

const [inventory, setInventory] = useState([]);
const [error, setError] = useState(false);

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
})


    return (
        <div id="main_container">
            {item}
        </div>
    )
};

export default Main;
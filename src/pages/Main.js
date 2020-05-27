import React, {useState, useEffect} from 'react';
import '../styling/main.css';
import ItemThumbnail from '../components/ItemThumbnail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import ItemPage from '../components/ItemPage';

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
            <Router>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/item-page">Item Page</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/">
                            <div id="items_container">
                                {item}
                            </div> 
                        </Route>

                        <Route path="/item-page">
                            <ItemPage />
                        </Route>
                    </Switch>
                </Router>

        </div>
        
    )
};

export default Main;
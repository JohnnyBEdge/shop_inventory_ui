import React, {useState, useEffect} from 'react';
import '../styling/main.css';
import {isLoggedIn, logout} from '../config/auth';

import ItemThumbnail from '../components/ItemThumbnail';
import ItemPage from '../components/ItemPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import InventoryManagement from '../pages/InventoryManagement';

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

// const handleLogout = () => {
//     logout();
//     setOpen(open);
// }

// const PrivateRoute = ({ children, ...rest }) => {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           isLoggedIn() ? (
//             children
//           ) : (
//               <Redirect
//                 to={{
//                   pathname: "/",
//                   state: { from: location }
//                 }}
//               />
//             )
//         }
//       />
//     );
//   }


    return (
        <div id="inventory_container">

            <div id="items_container">
                {item}
            </div> 
            
            {/* <li>
            { isLoggedIn() ? 
                <p onClick={handleLogout}>
                    Logout
                </p> 
            : ''}
            </li> */}
                    



                        
        </div>
        
    )
};

export default Inventory;
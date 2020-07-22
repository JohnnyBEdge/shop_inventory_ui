import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import Item from './pages/Item';
import Admin from './pages/Admin';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart';
import Nav from './pages/Nav';
import {isLoggedIn} from './config/auth';
import { LoginStatus } from './context/login-status-context';
import {ItemContext} from './context/item-context';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

  const [loginStatus, setLoginStatus] = useState(isLoggedIn() ? "Logged In" : "Not Logged In")
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [inventory, setInventory] = useState([]);

  function getInventory(){
    fetch(`https://jm-shop-api.herokuapp.com/api/inventory`)
        .then(response => response.json())
        .then(data => setInventory(data))
    };
  function initializeCart(){
    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart", JSON.stringify([]))
    };
  };


    const AdminRoute = ({component: Component, ...rest}) => {
    const admin = isLoggedIn() && user.isAdmin;
      
      return (
            <Route {...rest} render={props => 
              admin ?
                  (<Component {...props} />)
              : (<Redirect to="/" />)
            } />
        );
      };
    
    const PrivateRoute = ({component: Component, ...rest}) => {
      return (
          <Route {...rest} render={props => 
              isLoggedIn() ?
              (<Component {...props} />)
              : (<Redirect to="/" />)
          } />
      );
    };

    const LoggedInRoute = ({component: Component, ...rest}) =>{
      return (
        <Route {...rest} render={props => 
          !isLoggedIn() ?
        (<Component {...props} />)
        : (<Redirect to="inventory" />)
      } />
      );
    };

    useEffect(() => {
      getInventory();
      initializeCart();
  }, []);

    return (
      <ItemContext.Provider value={inventory} >
      <LoginStatus.Provider value={{loginStatus, setLoginStatus}}>
      <div className="App">
        
        <Router>
          <Nav />
          <Switch>
          
            <LoggedInRoute exact path="/"  component={Home} />
            <PrivateRoute exact path="/item"  component={Item} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/inventory" component={Inventory} />
            <AdminRoute exact path="/admin" component={Admin} />
          </Switch>
        </Router>
      </div>
    </LoginStatus.Provider>
    </ItemContext.Provider>
    );
  }


export default App;
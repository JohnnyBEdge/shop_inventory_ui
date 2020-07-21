import React, {useState, Component, useContext, useMemo} from 'react';
import Home from './pages/Home';
import Item from './pages/Item';
import Admin from './pages/Admin';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart';
import Nav from './pages/Nav';
import {isLoggedIn} from './config/auth';
import { LoginStatus } from './context/login-status-context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

  const [loginStatus, setLoginStatus] = useState(isLoggedIn() ? "Logged In" : "Not Logged In")


  // render() {

    // const AdminRoute = ({component: Component, ...rest}) => {
    //   // const admin = isLoggedIn() && user.isAdmin;
      
    //   return (
    //         <Route {...rest} render={props => 
    //           admin ?
    //               (<Component {...props} />)
    //           : (<Redirect to="/" />)
    //       } />
    //   );
    // };

    // const loggedInStatus = isLoggedIn() ? "logged in" : "not logged in"
    
    const PrivateRoute = ({component: Component, ...rest}) => {
      return (
          <Route {...rest} render={props => 
              isLoggedIn() ?
              (<Component {...props} />)
              : (<Redirect to="/" />)
          } />
      );
    };

    return (
      <LoginStatus.Provider value={{loginStatus, setLoginStatus}}>
      <div className="App">
        
        <Router>
          <Nav />
          <Switch>
          
            <Route exact path="/"  component={Home} />
            {/* <Route exact path="/item" component={Item} /> */}
            <PrivateRoute exact path="/item"  component={Item} />
            {/* <Route exact path="/login"  component={Login} /> */}
            {/* <LoggedInRoute exact path="/sign-up"  component={SignUp} /> */}
            {/* <Route exact path="/cart" component={Cart} /> */}
            <PrivateRoute exact path="/cart" component={Cart} />

            {/* <Route exact path="/inventory" component={Inventory} /> */}
            <PrivateRoute exact path="/inventory" component={Inventory} />
            <Route exact path="/admin" component={Admin} />
            {/* <AdminRoute exact path="/admin" component={Admin} /> */}
          </Switch>
        </Router>
      </div>
    </LoginStatus.Provider>
    );
  }


export default App;
import React, { Component } from 'react';
import Home from './pages/Home';
import Item from './pages/Item';
import Admin from './pages/Admin';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart';
import Nav from './pages/Nav';
import {isLoggedIn} from './config/auth';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {

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
      <div className="App">
        <Nav/>
        <Router>
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
    );
  }
}

export default App;
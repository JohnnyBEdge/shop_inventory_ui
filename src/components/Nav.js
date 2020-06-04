import React, {useState, useEffect, useContext, Component} from 'react';
import ItemPage from '../components/ItemPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import InventoryManagement from '../pages/InventoryManagement';
import Inventory from '../pages/Inventory';
import Main from '../pages/Main';
import Admin from '../pages/Admin';
import {isLoggedIn, logout, isUserAdmin} from '../config/auth';
import {ItemContext} from '../context/item-context';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  // const PrivateRoute = ({ children, ...rest }) => {
  //   return (
  //     <Route
  //       {...rest}
  //       render={({ location }) =>
  //         isLoggedIn() ? (
  //           children
  //         ) : (
  //           <Redirect to='/login' />
  //             // <Redirect
  //             //   to={{
  //             //     pathname: "/",
  //             //     state: { from: location }
  //             //   }}
  //             // />
  //           )
  //       }
  //     />
  //     )};

  // const AdminRoute = ({children, ...rest}) => {
  //   const admin = isLoggedIn() && isUserAdmin() === true;
  //   console.log("admin ", admin)
  //   return (
  //     <Route
  //       {...rest}
  //       render={({location}) =>
  //       admin ? (
  //         children
  //       ) : (
  //         <Redirect to='/' />
  //         // <Redirect
  //         //   to={{
  //         //     pathname: "/",
  //         //     state: {from: location}
  //         //   }}
  //         // />
  //       )}
  //       />
  //   )};

  const PrivateRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => 
            // isLoggedIn() && restricted ?
            isLoggedIn() ?
            (<Component {...props} />)
            : (<Redirect to="/inventory" />)
        } />
    );
};

  const AdminRoute = ({component: Component, ...rest}) => {
    const admin = isLoggedIn() && isUserAdmin();
    
    return (
          <Route {...rest} render={props => 
            admin ?
                (<Component {...props} />)
            : (<Redirect to="/" />)
        } />
    );
};

  
const Nav = () => {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(false);

async function getInventory(){
  const response = await fetch('http://localhost:5100/api/inventory');
  response.json()
      .then(response => setInventory(response))
      .catch(err => setError());
};

  const handleLogout = () => {
    logout();
  }

  const status = (isLoggedIn() ?
    <Button onClick={handleLogout}>Log out</Button>
    : <Button color="inherit">
      <Link to="login">Login</Link>
    </Button>
  );

  useEffect(() => {
    getInventory();
}, []);

    const classes = useStyles();

    return (
      <div id="nav_container">
 
        <Router>

        <AppBar position="static" color="inherit">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                Shop Inventory
              </Link>
            </Typography>
              {status}
            </Toolbar>
        </AppBar>

          <ItemContext.Provider value={inventory}>
            <Switch>
              <Route exact path="/" restricted={false} component={Main} />
    
              <Route exact path="/item-page" restricted={true} component={ItemPage} />
              <Route exact path="/login" restricted={true} component={Login} />
              <Route exact path="/sign-up"  component={SignUp} />

              <PrivateRoute exact path="/inventory" component={Inventory} />
              <AdminRoute exact path="/admin" component={Admin} />

            </Switch>

          </ItemContext.Provider>
        </Router>
      </div>
    )
};

export default Nav;
import React, {useState, useEffect} from 'react';
import ItemPage from '../components/ItemPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import InventoryManagement from '../pages/InventoryManagement';
import Inventory from '../pages/Inventory';
import Main from '../pages/Main';
import {isLoggedIn, logout} from '../config/auth';

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

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn() ? (
            children
          ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location }
                }}
              />
            )
        }
      />
      )};





const Nav = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const setUser = () => {
    if(isLoggedIn()){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    };
  };

  const handleLogout = () => {
    logout();
  }

  const status = () => {
      if(loggedIn){
        return <Button onClick={handleLogout}>Log out</Button>
      } else {
        return <Button color="inherit">
                <Link to="login">Login</Link>
              </Button>
      };
  };

  useEffect(() => {
    setUser();
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
              {status()}
            </Toolbar>
        </AppBar>

        
      
        <Switch>
          <Route exact path="/" component={Main} />

          <Route path="/item-page">
              <ItemPage />
          </Route>

          <Route path="/login">
              <Login />
          </Route>

          <Route path="/sign-up">
              <SignUp />
          </Route>

          {/* <Route path="/inventory">
            <Inventory/>
          </Route> */}

        <PrivateRoute exact path="/inventory">
            {/* <InventoryManagement inventory={inventory} getInventory={getInventory}/> */}
            <Inventory />
        </PrivateRoute>
          </Switch>

        </Router>
      </div>
    )
};

export default Nav;
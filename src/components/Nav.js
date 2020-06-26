import React, {useState, useEffect} from 'react';
import ItemPage from '../components/ItemPage';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
// import InventoryManagement from '../pages/InventoryManagement';
import Inventory from '../pages/Inventory';
import Main from '../pages/Main';
import Admin from '../pages/Admin';
import Cart from '../pages/Cart';
import {isLoggedIn} from '../config/auth';
import {ItemContext} from '../context/item-context';
import AvatarLink from '../components/AvatarLink';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { UserContext } from '../context/user-context';
// import { Avatar } from '@material-ui/core';



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
  
const Nav = () => {
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(false);
  const [loginStatus, setLoginStatus] = useState('false');
  const [user] = useState(JSON.parse(localStorage.getItem('user')));

  const initializeCart = () => {
    if(localStorage.getItem("cart") === null){
        localStorage.setItem("cart", JSON.stringify([]))
    };
};


  async function getInventory(){
    const response = await fetch('http://localhost:5100/api/inventory');
    response.json()
        .then(response => setInventory(response))
        .catch(err => setError());
  };

  const handleStatus = () => {
    isLoggedIn() ? 
    setLoginStatus(true)
    : setLoginStatus(false)
  }


  useEffect(() => {
    getInventory();
    handleStatus();
    initializeCart();
}, []);

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

    const classes = useStyles();

    return (
      <div id="nav_container">
        <UserContext.Provider value={user} >
          <ItemContext.Provider value={inventory} >
 
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
                    <span>
                    <AvatarLink />
                    </span>
                  </Toolbar>
              </AppBar>

              <Switch>
                <Route exact path="/"  component={Main} />
                <PrivateRoute exact path="/item-page"  component={ItemPage} />
                <LoggedInRoute exact path="/login"  component={Login} />
                <LoggedInRoute exact path="/sign-up"  component={SignUp} />
                <PrivateRoute exact path="/cart" component={Cart} />

                <PrivateRoute exact path="/inventory" component={Inventory} />
                <AdminRoute exact path="/admin" component={Admin} />
              </Switch>

            </Router>
          </ItemContext.Provider>
        </UserContext.Provider>
      </div>
    )
};

export default Nav;
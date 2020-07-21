import React, {useState, useContext} from 'react';
import {isLoggedIn} from '../config/auth';
// import {LoginStatus} from '../context/login-status-context'
// import AvatarLink from '../components/AvatarLink';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AvatarLink from '../components/Avatar';

const Nav = () => {
  // const [loginStatus, setLoginStatus] = useState(isLoggedIn());
  // const {loginStatus} = useContext(LoginStatus)
  // const {loginStatus, setLoginStatus} = useContext(LoginStatus)

    const classes = useStyles();
    return(
        <div id="nav_container">
            <AppBar position="static" color="inherit">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}> 
                    {/* <Link to="/" style={{ textDecoration: 'none' }}> */}
                    {/* Shop Inventory */}
                    {/* </Link> */}
                </Typography>
                    <span>
                    {/* {loginStatus} */}
                    <AvatarLink/>
                    </span>
            </Toolbar>
            </AppBar>
        </div>
    )
}

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

export default Nav;
import React, {useState, useEffect, useContext} from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {logout, isLoggedIn} from '../config/auth';
import {Redirect } from 'react-router-dom';
import { UserContext } from '../context/user-context';

import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const AvatarLink = () => {
    const user = useContext(UserContext)

    const [redirComp, setRedirComp] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const [loginStatus, setLoginStatus] = useState('');


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = async () => {
        await logout();
        // setLoginStatus(loginStatus);
        const redirect = < Redirect to='/' />
        setRedirComp(redirect);
    }
    // const handleStatus = () => {
    //     isLoggedIn() ? 
    //     setLoginStatus(true)
    //     : setLoginStatus(false)
    //   }
      useEffect(() => {
        // handleStatus();
        if (redirComp !== '') setRedirComp('');
     }, [redirComp]);
    
    // useEffect(() => {
    //     if (redirComp !== '') setRedirComp('');
    // }, [redirComp]);

    const loginStatus = isLoggedIn();


    return (
        <div id="avatar_container">
            { loginStatus ? 
                <span>
                    Welcome back {user.fname}
                    <AccountCircleIcon 
                    aria-controls="avatar-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick} 
                    fontSize={'large'}/>
                    <Link to="/cart"><ShoppingCartOutlinedIcon /></Link>
                <Menu
                    id="avatar-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Shopping Cart</MenuItem>
                    <MenuItem onClick={handleClose, () => handleLogout() }>Logout</MenuItem>
                </Menu>
                </span>
                :
                <p> You are not logged in.</p>
                 } 
            
            {redirComp}
            
        </div>
    )
};

export default AvatarLink;
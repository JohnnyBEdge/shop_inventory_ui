import React, {useState} from 'react';


import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {logout, isLoggedIn} from '../config/auth';
import {Redirect } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


const AvatarLink = () => {
    const [redirComp, setRedirComp] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleLogout = async () => {
        await logout();
        const redirect = <Redirect to='/' />
        setRedirComp(redirect);
    }

    const loginStatus = isLoggedIn();


    return (
        <div id="avatar_container">
            { loginStatus ? 
                <span>
                    <AccountCircleIcon 
                    aria-controls="avatar-menu" 
                    aria-haspopup="true" 
                    onClick={handleClick} 
                    fontSize={'large'}/>
                    {/* <Link to=""> */}
                        <ShoppingCartOutlinedIcon />
                    {/* </Link> */}
                <Menu
                    id="avatar-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem 
                        onClick={handleClose}
                        >Profile
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClose}
                        >Shopping Cart
                    </MenuItem>
                    <MenuItem 
                        onClick={() => {
                        handleClose(); 
                        handleLogout()}}
                        >Logout
                    </MenuItem>
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
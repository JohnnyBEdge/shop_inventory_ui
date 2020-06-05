import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {logout} from '../config/auth';

const AvatarLink = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <div id="avatar_container">
            <AccountCircleIcon 
                aria-controls="avatar-menu" 
                aria-haspopup="true" 
                onClick={handleClick} 
                fontSize={'large'}/>
            <Menu
                id="avatar-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Shopping Cart</MenuItem>
                <MenuItem onClick={handleClose, () => logout() }>Logout</MenuItem>
            </Menu>

        </div>
    )
};

export default AvatarLink;
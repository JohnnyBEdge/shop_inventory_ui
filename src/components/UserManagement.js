import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


const UserManagement = () => {

const [users, setUsers] = useState([]);

async function getUsers(){
    const response = await fetch(`https://jm-shop-api.herokuapp.com/api/accounts`);
    response.json()
        .then(response => setUsers(response))
        // .catch(err => setError());
  };

  useEffect(() => {
    getUsers();
}, []);


    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        descCell: {
            maxWidth: 300
        },
        itemCell: {
            minWidth: 50
        },
        quantityCell: {
            width: 20
        },
        tableHeader: {
            fontWeight: 'bold'
        }
      });
    
    const classes = useStyles();

    return (
        <div id="inventory_container">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" align="left" className={classes.tableHeader}>
                            <Checkbox/>

                        </TableCell>
                        <TableCell align="left" className={classes.tableHeader}>First Name</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>Last Name</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>Email</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>isAdmin</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>Edit</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user) => (
                        <TableRow key={user._id}>
                        <TableCell component="th" scope="row" padding="checkbox" className={classes.itemCell}>
                            <Checkbox/>
                        </TableCell>
                        <TableCell align="left" className={classes.itemCell}>{user.fname}</TableCell>
                        <TableCell align="left">{user.lname}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left" className={classes.descCell}>
                            {user.isAdmin ? 
                                "yes"
                                :"no"}
                            </TableCell>
                        <TableCell align="left">
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default UserManagement;
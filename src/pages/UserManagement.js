import React, {useState, useEffect} from 'react';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';


const UserManagement = () => {

const [users, setUsers] = useState([]);
const [error, setError] = useState(false);

async function getUsers(){
    const response = await fetch('http://localhost:5100/api/accounts');
    response.json()
        .then(response => setUsers(response))
        .catch(err => setError());
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
                {/* <AddModal 
                    getInventory={props.getInventory}
                /> */}
                <Table className={classes.table} aria-label="simple table">
                    {/* <EnhancedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        // rowCount={rows.length}
                    /> */}
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
                            {/* <EditModal 
                                user={user} 
                                getUsers={getUsers} 
                                /> */}
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
import React from 'react';
import EditModal from '../components/EditModal';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';


const InventoryManagement = (props) => {
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        descCell: {
            maxWidth: 300
        },
        itemCell: {
            minWidth: 300
        },
        quantityCell: {
            width: 20
        }
      });
    
    const classes = useStyles();

    return (
        <div id="inventory_container">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" align="left">
                            <Checkbox/>
                            Item
                        </TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Edit</TableCell>
                        {/* <TableCell align="right">isActive</TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.inventory.map((item) => (
                        <TableRow key={item._id}>
                        <TableCell component="th" scope="row" padding="checkbox" className={classes.itemCell}>
                            <Checkbox/>
                            {item.name}
                        </TableCell>
                        <TableCell align="right" className={classes.quantityCell}>{item.quantity}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="left" className={classes.descCell}>{item.desc}</TableCell>
                        <TableCell align="left">
                            <EditModal />
                        </TableCell>
                        {/* <TableCell align="right">{item.isActive}</TableCell> */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default InventoryManagement;
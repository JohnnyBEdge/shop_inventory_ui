import React, {useContext, useState} from 'react';
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
import {ItemContext} from '../context/item-context';
import orderBy from 'lodash/orderBy';

const InventoryManagement = (props) => {

    const inventory = useContext(ItemContext);
    console.log("inv ",inventory)

    const toggleDirection = () => {
        if(direction === "asc"){
            setDirection("desc")
        } else {
            setDirection("asc")
        };
    };

    const [sortList, setSortList] = useState(inventory);
    const [direction, setDirection] = useState('asc');

 

    const sortNames =() => {
        const sorted = orderBy(inventory, [item => item.name.toLowerCase()], direction);
        toggleDirection();
        setSortList(sorted)
    };

    const sortQuantity =() => {
        const sorted = orderBy(inventory, "quantity", direction);
        toggleDirection();
        setSortList(sorted)
    };


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
        },
        tableHeader: {
            fontWeight: 'bold'
        }
      });
    
    const classes = useStyles();

    // useEffect(() => {
    //     if(sortList == []){
    //         setSortList(inventory)
    //     }
    // }, [])

    console.log("sortlist ", sortList)

    return (
        <div id="inventory_container">
            <TableContainer component={Paper}>
                <AddModal 
                    getInventory={props.getInventory}
                />
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell 
                            padding="checkbox" 
                            align="left" 
                            className={classes.tableHeader}
                            onClick={() => sortNames()}
                            >
                                <Checkbox/>
                                Item
                        </TableCell>
                        <TableCell 
                            align="right" 
                            className={classes.tableHeader}
                            onClick={() => sortQuantity()}
                            >
                                Quantity</TableCell>
                        <TableCell 
                            align="right" 
                            className={classes.tableHeader}
                            onClick={() => sortQuantity()}
                            >
                                Price</TableCell>
                        <TableCell 
                            align="left" 
                            className={classes.tableHeader}
                            >
                                Description</TableCell>
                        <TableCell 
                            align="left" 
                            className={classes.tableHeader}>
                                Edit</TableCell>
                        {/* <TableCell align="right">isActive</TableCell> */}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    {sortList.map((item) => (
                        <TableRow key={item._id}>
                        <TableCell component="th" scope="row" padding="checkbox" className={classes.itemCell}>
                            <Checkbox/>
                            {item.name}
                        </TableCell>
                        <TableCell align="right" className={classes.quantityCell}>{item.quantity}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="left" className={classes.descCell}>{item.desc}</TableCell>
                        <TableCell align="left">
                            <EditModal 
                                inventory={item} 
                                getInventory={props.getInventory} 
                                />
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default InventoryManagement;
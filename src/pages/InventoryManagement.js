import React from 'react';
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

const InventoryManagement = (props) => {

// -----------------SORT--------------------------------------------
// const [order, setOrder] = React.useState('asc');
// const [orderBy, setOrderBy] = React.useState('calories');
// const [selected, setSelected] = React.useState([]);

// const headCells = [
//     { id: 'name',  label: 'Name' },
//     { id: 'quantity', label: 'Quantity' },
//     { id: 'price', label: 'Price' },
//     { id: 'desc', label: 'Description' },
//     { id: 'edit', label: 'Edit' },
//   ];


// const handleRequestSort = (e, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (e) => {
//     if (e.target.checked) {
//       const newSelecteds = props.inventory.map((n) => n.name);
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (e, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

// //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   function EnhancedTableHead(props) {
//     const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//     const createSortHandler = (property) => (e) => {
//       onRequestSort(e, property);
//     };

//     const useStyles = makeStyles((theme) => ({
//         root: {
//           width: '100%',
//         },
//         paper: {
//           width: '100%',
//           marginBottom: theme.spacing(2),
//         },
//         table: {
//           minWidth: 750,
//         },
//         visuallyHidden: {
//           border: 0,
//           clip: 'rect(0 0 0 0)',
//           height: 1,
//           margin: -1,
//           overflow: 'hidden',
//           padding: 0,
//           position: 'absolute',
//           top: 20,
//           width: 1,
//         },
//       }));
  
//     return (
//       <TableHead>
//         <TableRow>
//           <TableCell padding="checkbox">
//             <Checkbox
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={rowCount > 0 && numSelected === rowCount}
//               onChange={onSelectAllClick}
//               inputProps={{ 'aria-label': 'select all desserts' }}
//             />
//           </TableCell>
//           {headCells.map((headCell) => (
//             <TableCell
//               key={headCell.id}
  
//               sortDirection={orderBy === headCell.id ? order : false}
//             >
//               <TableSortLabel
//                 active={orderBy === headCell.id}
//                 direction={orderBy === headCell.id ? order : 'asc'}
//                 onClick={createSortHandler(headCell.id)}
//               >
//                 {headCell.label}
//                 {orderBy === headCell.id ? (
//                   <span className={classes.visuallyHidden}>
//                     {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                   </span>
//                 ) : null}
//               </TableSortLabel>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHead>
//     );
//   }


// -------------------------------------------------------------

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

    return (
        <div id="inventory_container">
            <TableContainer component={Paper}>
                <AddModal getInventory={props.getInventory}/>
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
                            Item
                        </TableCell>
                        <TableCell align="right" className={classes.tableHeader}>Quantity</TableCell>
                        <TableCell align="right" className={classes.tableHeader}>Price</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>Description</TableCell>
                        <TableCell align="left" className={classes.tableHeader}>Edit</TableCell>
                        <TableCell align="right">isActive</TableCell>
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
                            <EditModal inventory={item} getInventory={props.getInventory} />
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
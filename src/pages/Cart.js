import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const rows = JSON.parse(localStorage.getItem("cart"));

function ccyFormat(num) {
// return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
return qty * unit;
}

function subtotal(items) {
// return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const invoiceSubtotal = subtotal("rows");
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;



let index = 0;
const Cart = () => {
    const classes = useStyles();
    return (
        <div id="cart_container">
            <h2>Your Cart</h2>
            <Button>Proceed With Order</Button>

            <TableContainer component={Paper}>
                <Table 
                    className={classes.table} 
                    aria-label="spanning table">
                    <TableHead>
                    <TableRow>
                        <TableCell 
                            align="center" 
                            colSpan={3}>
                        Order Summary
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell align="right">Qty.</TableCell>
                        <TableCell align="right">Price/Each</TableCell>
                        <TableCell align="right">Sum</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={index++}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell align="right">1</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tax</TableCell>
                        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
};

export default Cart;
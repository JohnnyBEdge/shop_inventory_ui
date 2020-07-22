import React, {useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


let index = 0;
const Cart = () => {

    const [cart, setCart] = useState([])
    const TAX_RATE = 0.07;

    //maintains currency format
    function ccyFormat(num) {
    return `${num.toFixed(2)}`;
    };

    function priceRow(qty, unit) {
    return qty * unit;
    };

    function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
    };

    function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    };

    const rows = [];

    cart.map((item) => {
        return (
            rows.push(createRow(item.name, 1, item.price))
        );
    });

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, []);

    const classes = useStyles();

    return (
        <div id="cart_container">
            <h2 className={classes.cartH2}>Your Cart</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.header}>Item</TableCell>
                            <TableCell className={classes.header} align="left">Quantity:</TableCell>
                            <TableCell className={classes.header} align="left">Price each:</TableCell>
                            <TableCell className={classes.header} align="right">Sum Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={index++}>
                        <TableCell>{row.desc}</TableCell>
                        <TableCell align="left">{row.qty}</TableCell>
                        <TableCell align="left" >{row.unit}</TableCell>
                        <TableCell align="right" >{ccyFormat(row.price)}</TableCell>
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
                <Button 
                    className={classes.btn}
                    variant="contained"
                    color="primary">
                    Proceed With Order
                </Button>
        </div>
    )
};

const useStyles = makeStyles({
    table: {
      minWidth: 700,
      maxWidth: 1000,
      margin: "0 auto"
    },
    btn: {
      margin: "20px",
      position: "relative",
      left: "70%",
      paddingBottom: 10
    },
    header: {
        fontWeight: 800,
        fontSize: 18
    },
    cartH2:{
        marginLeft: "42%",
        fontSize: 30
    }
  });

export default Cart;
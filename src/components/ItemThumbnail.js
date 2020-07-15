import React from 'react';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const ItemThumbNail = (props) => {

    const classes = useStyles();

    return (
        <Link href="/item-page" item={props.item}>
            <div className={classes.container}>
                <div className={classes.imgContainer}>
                    <img className={classes.img} src={props.item.img} alt={props.item.name} />
                </div>
                <h4 className={classes.itemName}>{props.item.name}</h4>
                <p className={classes.itemPrice}>Price: ${props.item.price}</p>
            </div>
        </Link>
    )
}
const useStyles = makeStyles(() => ({
    container: {
        width: "1fr",
        height: "auto",
        border: "solid black 1px",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .1s ease-in-out",
        color: "rgb(45, 42, 42)",
    },
    itemName: {
        padding: 0,
        margin: 5,
        fontSize: 20,
        maxWidth: 225,
    },
    itemPrice: {

    },
    img: {
        width: 150,
        margin: 10
    }
  }));

export default ItemThumbNail;
import React from 'react';
import Login from './Login';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "50%",
        border: "1px black solid",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 50px"
    },
    signIn: {
        border: "solid black 1px"
    }
});

const Main = () => {

      const classes = useStyles();

    return (
        <div id="main_container" className={classes.main}>
            <div id="ad_container" className={classes.container}>

            </div>
            <div id="welcome_container" className={classes.container}>
                <h1>Welcome</h1>
                <p>Welcome to the members only shop where you can get the best deals on the latest gear.
                     To view our inventory, please <Link href="login">login.</Link>If you do not have an 
                     account, you can create one <Link href="sign-up">here!</Link></p>
            </div>

        </div>
    )
};

export default Main;
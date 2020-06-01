import React from 'react';
import Login from './Login';
import Logo1 from '../styling/imgs/logo1.png';
import Logo2 from '../styling/imgs/logo2.png';
import Logo3 from '../styling/imgs/logo3.png';
import Logo4 from '../styling/imgs/logo4.png';
import Logo5 from '../styling/imgs/logo5.png';
import Logo6 from '../styling/imgs/logo6.png';
import Logo7 from '../styling/imgs/logo7.png';
import Logo8 from '../styling/imgs/logo8.png';

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
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 50px",
        color: "#4E4E4E",
        fontSize: "22px",
        fontWeight: "300",
        lineHeight: "1.5"
    },
    logos: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        width: "100%"
    },
    logo: {
        width: "1fr",
        height: "100px"
    },
    image: {
        width: "90%"
    }
});

const Main = () => {

      const classes = useStyles();

    return (
        <div id="main_container" className={classes.main}>
            <div id="ad_container" className={classes.container}>
                <p>All the brands you love, at prices you can afford!</p>
                <div className={classes.logos}>
                    <div className={classes.logo}>
                        <img src={Logo1} className={classes.image}/>
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo2} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo3} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo4} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo5} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo6} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo7} className={classes.image} />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo8} className={classes.image} />
                    </div>

                </div>
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
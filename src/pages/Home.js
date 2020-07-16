import React, {useState} from 'react';
import LoginForm from '../components/LoginForm'

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';


const Home = () => {
    const [formType, setFormType] = useState('');

    const classes = useStyles();
    return(
        <div id="main_container">
            {/* <div id="ad_container" className={classes.container}>
                <p>All the brands you love, at prices you can afford!</p>
                <div className={classes.logos}>
                    <div className={classes.logo}>
                        <img src={Logo1} className={classes.image} alt="logo"/>
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo2} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo3} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo4} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo5} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo6} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo7} className={classes.image} alt="logo" />
                    </div>
                    <div className={classes.logo}>
                        <img src={Logo8} className={classes.image} alt="logo" />
                    </div>

                </div>
            </div> */}
            <div className={classes.welcomeContainer}>
                <div className={`${classes.left} ${classes.con}`}>
                    <h1>Welcome</h1>
                    <p>Welcome to the exclusive, members only gear shop. To view the best deals on the
                        market right now, please login. If you have not made an account yet, you can do 
                        so <Link>here!</Link></p>
                </div>

                <div className={`${classes.right} ${classes.con}`}>
                    <LoginForm />
                </div>
            </div>

        </div>
    )
};

const useStyles = makeStyles(() => ({
    welcomeContainer: {
        display: "flex",
    },
    con: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        alignItems: "center"
    },
    left: {
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        padding: "30px 50px",
        color: "#4E4E4E",
        fontSize: "22px",
        fontWeight: "300",
        lineHeight: "1.5"
    }


  }));

export default Home;
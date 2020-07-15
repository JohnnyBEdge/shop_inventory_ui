import React, {useState} from 'react';

import Link from '@material-ui/core/Link';

const Home = () => {
    const [formType, setFormType] = useState('');

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
            <div id="welcome_container">
                <h1>Welcome</h1>
                <p>Welcome to the members only shop where you can get the best deals on the latest gear.
                     To view our inventory, please <Link href="login">login.</Link>If you do not have an 
                     account, you can create one <Link href="sign-up">here!</Link></p>
            </div>

        </div>
    )
}

export default Home;
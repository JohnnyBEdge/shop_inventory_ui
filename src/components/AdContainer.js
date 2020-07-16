import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const AdContainer = () => {

    const classes = useStyles();
    return(
        <div id="ad_container" className={classes.container}>
            <p>All the brands you love, at prices you can afford!</p>

            <div className={classes.logos}>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/f41203d00a203780.png" className={classes.image} alt="logo"/>
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/40f2eeff324dbf8f.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/33d52ffb1724c1a8.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/f19cf7832ff1eac4.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/7e5f2994c8c46d10.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/0e1617d09434ceee.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/65d54fe044bd4863.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/e8c894a432523c05.png" className={classes.image} alt="logo" />
                </div>
                <div className={classes.logo}>
                    <img src="https://cdn.expertvoice.com/static-forever/public-web/bdcc4ff759625385.png" className={classes.image} alt="logo" />
                </div>
            </div>
        </div>
    )
};

const useStyles = makeStyles(() => ({
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
  }));

export default AdContainer;
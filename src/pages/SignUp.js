import React, {useState} from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const SignUp = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');

    const [fNameError, setFNameError] = useState(false);
    const [lNameError, setLNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );

	
    //   Password must contain at least one letter, at least one number, and be longer than six charaters.
    const passwordRegex = RegExp(
        /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/
    );



    const handleFormValidation = (e) => {
        const {name, value} = e;
        switch(name){
            case "firstName":
                fname === '' ? setFNameError(true) : setFNameError(false);
                break;
            case "lastName":
                lname === '' ? setLNameError(true) : setLNameError(false);
                break;
            case "email":
                email.match(emailRegex) ? setEmailError(false) : setEmailError(true);
                break;
            case "password":
                value.match(passwordRegex) ? setPasswordError(false) : setPasswordError(true);
                break;    
            case "passwordMatch":
                value.match(password) ? setPasswordMatchError(false) : setPasswordMatchError(true);
                break;    
        }
    }


    const addAccount = () => {

        if(fNameError === false && fname !== '' 
            && lNameError === false && lname !== ''
            && emailError === false && email !== ''
            && passwordError === false && password !== ''
            && passwordMatchError === false){
                console.log("valid form")
            } else {
                console.log("invalid form")
            };


        // fetch(`http://localhost:5100/api/accounts`, {
        //     method: "POST",
        //     header: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify({fname, lname, email, password})
        // }).then(() => {setFname(''); setLname(''); setEmail(''), setPassword('')})
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },

      }));

      const classes = useStyles();

    return (
        <div id="sign_up_container">
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form id="sign_up_form" className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        // autoComplete="fname"
                        name="firstName"
                        error={fNameError}
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={fname}
                        onChange={({target}) => setFname(target.value)}
                        onBlur={({target}) => handleFormValidation(target)}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        error={lNameError}
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        // autoComplete="lname"
                        value={lname}
                        onChange={({target}) => setLname(target.value)}
                        onBlur={({target}) => handleFormValidation(target)}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        error={emailError}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        onBlur={({target}) => handleFormValidation(target)}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        error={passwordError}
                        // type="password"
                        required
                        fullWidth
                        id="password"
                        label="Create Password"
                        name="password"
                        value={password}
                        onChange={({target}) => {setPassword(target.value); handleFormValidation(target)}}
                        // onBlur={({target}) => handleFormValidation(target)}
                        helperText="Password must be at least 6 characters long and include at least one number."

                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        // type="password"
                        error={passwordMatchError}
                        variant="outlined"
                        required={true}
                        fullWidth
                        id="passwordMatch"
                        label="Confirm Password"
                        name="passwordMatch"
                        onChange={({target}) => {setPasswordMatch(target.value); handleFormValidation(target)}}
                        helperText="Passwords must match."
                    />
                    </Grid>

                </Grid>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => addAccount()}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
        </Container>
    </div>
    )
};

export default SignUp;
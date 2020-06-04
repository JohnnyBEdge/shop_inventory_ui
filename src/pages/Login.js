import React, {useState, useEffect} from 'react';
import { setToken, isLoggedIn } from '../config/auth';
// import {isLoggedIn} from '../config/auth';
import Main from '../pages/Main';
import '../styling/login.css';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, Route } from 'react-router-dom'

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [msg, setMsg] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    const toggle = () => {
        setRemember(!remember);
    }

    const handleLogin = (event) => {
        setMsg('');
        if(remember){
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('email');
        }
        fetch(`http://localhost:5100/api/accounts/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(response => {
            if(response.status === 200) {
                setToken(response.headers.get('authentication'), response.headers.get('adminStatus'));
                console.log("response: ", response)
                // setLoggedIn(true)
            } else {
                setMsg('Login Failed');
            }
        })
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
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        msg: {
            color: "red",
            fontSize: "20px"
        }
      }));

      useEffect(() => {
        const localEmail = localStorage.getItem('email');
        if(localEmail){
            setEmail(localEmail);
            setRemember(true);
        }
    }, [])


    const classes = useStyles();

    // const redirectAfterLogin = ( isLoggedIn() ? 
    //     <Redirect to="/inventory" />
    //     : <Route to='/' />
    // )


    return (
        <div id="login_container">
            {/* {redirectAfterLogin} */}

            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <span className={classes.msg}>{msg}</span>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox
                                    name="remember" 
                                    checked={remember} 
                                    color="primary"
                                    onChange={toggle} />}
                        label="Remember me"
                    />
                    
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => handleLogin()}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link to="/sign-up" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
    </Container>
        </div>
    )
};

export default Login;
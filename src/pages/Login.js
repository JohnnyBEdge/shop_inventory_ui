import React, {useState} from 'react';

const Login = (props) => {
    // form type currently displayed
    const [formType] = useState(props.formType);

    //Login form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    //Register form data
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    // const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const [isAdmin] =useState(false);
    //validation check
    const [fNameError, setFNameError] = useState(false);
    const [lNameError, setLNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    return (
        <div id="login_form_container">
            <h1>Login Page</h1>
        </div>
    )
}

export default Login
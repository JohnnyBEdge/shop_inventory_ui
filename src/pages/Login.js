import React, {useState} from 'react';
import RegisterForm from '../components/RegisterForm'

const Login = (props) => {
    // form type currently displayed
    const [formType] = useState(props.formType);

    return (
        <div id="login_form_container">
            <h1>Login Page</h1>
            {/* <RegisterForm /> */}
        </div>
    )
}

export default Login
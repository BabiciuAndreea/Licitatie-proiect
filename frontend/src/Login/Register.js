import React,{Component} from "react";
import './login.css';

class Register extends Component{
    render() {
        return (

            <div className="body">
                <div className="login-box">
                    <h1>Register</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email"/>
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Confirm Password"/>
                    </div>

                    <input type="button" className="btn" value="Sign in"/>

                </div>
            </div>

        );
    }
}

export default Register;
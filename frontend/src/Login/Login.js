import React,{Component} from "react";
import './login.css';


class Login extends Component{
    render() {
        return (


                <div className="login-box">
                    <h1>Login</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email"/>
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>



                    <input type="button" className="btn" value="Sign in"/>

                    <a href="/register">
                        <input type="button" className="btn" value="Register"/>
                    </a>
                </div>


        );
    }
}

export default Login;
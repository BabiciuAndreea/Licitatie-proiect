import React,{Component} from "react";
import './login.css';
import {Container, Form, FormGroup, Label} from "reactstrap";


class Login extends Component{


    emptyItem = {
        username: '',
        password: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
        console.log(item);
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then((response)=>response.text()).then((result)=>{
            if(result!="this user doesnt exist" ){
                // result = "Bearer " + result;
                localStorage.setItem('jwt', result);
                window.location.href="/logged-home";
            }else{
                alert("Wrong credentials!")
            }
        });
    }

    render() {

        const {item} = this.state;
        return (


            <div className="login-box">

                <Container>

                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <div className="login-box">
                                <h1>Login</h1>
                                <div className="textbox">
                                    <i className="fas fa-user"></i>
                                    <Label for="name">Username</Label>
                                    <input type="text" name="username" id="username" value={item.username} onChange={this.handleChange} autoComplete="username"/>
                                </div>


                                <div className="textbox">
                                    <i className="fas fa-lock"></i>
                                    <Label for="name">Password</Label>
                                    <input type="password" name="password" id="password" value={item.password} onChange={this.handleChange} autoComplete="password"/>
                                </div>

                                <button className="btn">Log In</button>
                                <a href="/register">
                                    <input type="button" className="btn" value="Register"/>
                                </a>

                            </div>

                        </FormGroup>
                    </Form>
                </Container>
            </div>

               /* <div className="login-box">
                    <h1>Login</h1>
                    <div className="textbox">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="textbox">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>



                    <input type="button" className="btn" value="Sign in"/>

                    <a href="/register">
                        <input type="button" className="btn" value="Register"/>
                    </a>
                </div>*/


        );
    }
}

export default Login;
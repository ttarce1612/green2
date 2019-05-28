import React from 'react';
import "./css/LoginPage.css";

import {Button, Form} from 'react-bootstrap';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valid: {
                email: true,
                password: true
            }
        }
        this.pRef = React.createRef();

        this.reset();
    }
    reset() {
        this.data = {
            email: "",
            password: ""
        };
    }
    keyUpHandle(event) {
        let keyCode = event.keyCode || event.which;
        if(keyCode === 13) {
            if(event.target.name === "email" && this.data.password === "") {
                this.pRef.current.focus();
            }
            event.preventDefault();
        } else {
            this.data[event.target.name] = event.target.value;
        } 
    }
    validate(event) {
        let name = event.target.name;
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
        
        if(name === "password") {
            pattern = /[^ ][a-zA-Z0-1]{6,}/;
        }
        let _valid = this.state.valid;
        if(!pattern.test(this.data[name])) {
            _valid[name] = false;
            this.setState({valid: _valid})
        } else {
            _valid[name] = true;
            this.setState({valid: _valid})
        }
    }
    loginHandle(event) {
        if(!this.state.valid.email || !this.state.valid.password) {
            event.preventDefault();
            return;
        }
    }
    render() {
        return (
            <div className="app-login-page">
                <Form name="loginForm">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{float:"left"}}>Email address</Form.Label>
                        <Form.Control onChange={this.validate.bind(this)} className={this.state.valid.email?"":"is-invalid"} onKeyUp={this.keyUpHandle.bind(this)} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="is-invalid" controlId="formBasicPassword">
                        <Form.Label style={{float:"left"}}>Password</Form.Label>
                        <Form.Control onChange={this.validate.bind(this)} className={this.state.valid.password?"":"is-invalid"} ref={this.pRef} onKeyUp={this.keyUpHandle.bind(this)} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.loginHandle.bind(this)} style={{width: "100%"}} variant="primary">
                        Login
                    </Button>
                    </Form>
            </div>
        )
    }
}

export default LoginPage;
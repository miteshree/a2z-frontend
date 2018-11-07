﻿import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            user_name: '',
            email: '',
            password: '',
            re_password: ''
        }
    }
    render() {
        return (
               <div>
                <form className="signup-form">
                    <div className="container">
                        <h1>SignUp </h1>
                        <p>Please fill in this form to create an account.</p>
                        <br/>
                        <label for="name" class="name">FullName</label>
                        <input
                            type={Text}
                            name="FullName"
                            placeholder="FullName*"
                            required="true"
                            onChange={(event, newValue) => this.setState({ name: newValue })}
                        />
                        <br />
                        <label for="UserName" class="username">UserName</label>
                        <input
                            type={Text}
                            name="UserName"
                            placeholder="UserName*"
                            required="true"
                            onChange={(event, newValue) => this.setState({ user_name: newValue })}
                        />
                        <br />
                        <label for="email" class="email">Email Address</label>
                        <input
                            placeholder="Email Address*"
                            required="true"
                            type="email"
                            name="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <label for="password" class="password">Password</label>
                        <input
                            type="password"
                            placeholder="Password*"
                            required="true"
                            name="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <label for="re-password" class="re-password">Re-Password</label>
                        <input
                            type="password"
                            placeholder="Re-Enter Password*"
                            required="true"
                            name="Password"
                            onChange={(event, newValue) => this.setState({ re_password: newValue })}
                        />
                        <br />
                        <label></label>
                          <input type="submit" value="Submit" />
                         </div>
                    </form>
                </div>
        );
    }
}

export default Signup;
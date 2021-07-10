import React, { Component } from 'react';

import axios from 'axios';

export class Login extends Component {
    state = {
        credentials:{
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div className="login">
                <h4>Log in to access Friends List</h4>
                <form className="loginForm">
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                    />
                    <input 
                        type="text"
                        name="username"
                        placeholder="Password"
                        value={this.state.credentials.password}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login


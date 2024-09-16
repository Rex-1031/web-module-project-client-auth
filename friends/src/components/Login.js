import React, { Component } from 'react';

import axios from 'axios';

export class Login extends Component {
    state = {
        credentials:{
            username: '',
            password: ''
        }
    };

    handleChange = e=>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e =>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", this.state.credentials)
        .then(res =>{
            localStorage.setItem("token", res.data.payload);
            console.log("logged in")
            this.props.history.push("/protected")
        })
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div className="login">
                <h4>Log in to access Friends List</h4>
                <form 
                    onSubmit={this.login}
                    className="loginForm"
                >
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login


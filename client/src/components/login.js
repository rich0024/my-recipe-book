import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userAction'

export class login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.loginUser({
            email: this.state.email,
            password: this.state.password
        })
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleOnSubmit}>
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleOnChange} />
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { loginUser }) (login)

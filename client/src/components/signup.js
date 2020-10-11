import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/userAction'

export class signUp extends Component {
    state = {
        username: "",
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
        this.props.createUser({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        })
        this.setState({
            username: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h2>Sign Up!</h2>
                    <input type="username" name="username" placeholder="username" value={this.state.username} onChange={this.handleOnChange} />
                    <br></br>
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

export default connect(null, { createUser })(signUp)
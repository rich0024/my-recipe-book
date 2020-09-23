import React, { Component } from 'react'

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
            email: "",
            password: ""
        }) 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleOnSubmit} />
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnSubmit} />
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default login

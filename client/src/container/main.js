import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import SignUp from '../components/signup';
import {loginUser} from '../actions/userAction';
import {createUser} from '../actions/userAction'


class Main extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser}/>
                <p>or</p>
                <SignUp createUser={this.props.createUser}/>
            </div>
        )
    }
}
 

export default connect(null, loginUser, createUser)(Main)

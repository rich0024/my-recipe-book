import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../components/login';
import SignUp from '../components/signup';
import SignOut from '../components/signout';
import {loginUser} from '../actions/userAction';
// import {logoutUser} from '../actions/userAction';
import {createUser} from '../actions/userAction'


class Main extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser}/>
                <p>or</p>
                <SignUp createUser={this.props.createUser}/>
                <SignOut />
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return{
        user: user
    }
}

export default connect(mapStateToProps, {loginUser, createUser})(Main)

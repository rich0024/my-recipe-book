import React, { Component } from 'react';
//import {connect} from 'react-redux';
import Login from '../components/login';
import SignUp from '../components/signup';
//import SignOut from '../components/signout';
//import {loginUser} from '../actions/userAction';
//import {createUser} from '../actions/userAction'


class Main extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to RecipeBook!</h1>
                <Login />
                <p>or</p>
                <SignUp />
            </div>
        )
    }
}

// const mapStateToProps = ({ user }) => {
//     return{
//         user: user
//     }
// }

export default Main

import React, { Component } from 'react';
//import {connect} from 'react-redux';
import Login from '../components/login';
import SignUp from '../components/signup';
//import SignOut from '../components/signout';
//import {loginUser} from '../actions/userAction';
//import {createUser} from '../actions/userAction'
import Menu from '../assets/menu.png'

class Main extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
            <div className="login-menu">
                <h1>Welcome to RecipeBook!</h1>
                <img className='menu-img' src={Menu}></img>
                <Login />
                <p>or</p>
                <SignUp />
            </div>
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

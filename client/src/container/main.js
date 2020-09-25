import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../components/login'
import {loginUser} from '../actions/userAction'

class Main extends Component {
    render() {
        return (
            <div>
                <Login loginUser={this.props.loginUser}/>
            </div>
        )
    }
}
 

export default connect(null, loginUser)(Main)

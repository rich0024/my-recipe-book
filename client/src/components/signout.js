import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { logoutUser } from '../actions/userAction'

export class signout extends Component {

    handleOnClick = () => {
            this.props.logoutUser(() => {this.props.history.push("/")})
    }
        

    render() {
        return (
            <div>
                <button  className='signout-button' onClick={this.handleOnClick}>Sign Out</button>
            </div>
        )
    }
}

export default connect(null, {logoutUser}) (withRouter(signout))

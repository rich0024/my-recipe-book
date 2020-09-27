import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { logoutUser } from '../actions/userAction'

export class signout extends Component {
    handleOnClick = () => {
        return fetch(`http://localhost:3000/logout`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}>Sign Out</button>
            </div>
        )
    }
}
export default connect(null) (signout)

import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoggedInMenu from '../components/loggedInMenu';
import UserFeed from '../components/userFeed';
import SignOut from '../components/signout';
import { getUser } from '../actions/userAction';

class User extends Component {
    componentWillMount() {
        this.props.getUser()
    }

    // shouldComponentUpdate() {
    //     return true
    // }
    
    render() {
        return (
            <div className='user-container'>
                <LoggedInMenu />
                <SignOut />
                <UserFeed currentUser={this.props.user[0]} />
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return{
        user: user
    }
}

export default connect(mapStateToProps, { getUser })(User)


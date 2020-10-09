import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoggedInMenu from '../components/loggedInMenu';
import UserFeed from '../components/userFeed';
import SignOut from '../components/signout';
import {getUser, logoutUser} from '../actions/userAction';
import { fetchRecipes } from '../actions/recipeAction';

class User extends Component {
    componentWillMount() {
//        this.props.fetchRecipes()
        this.props.getUser()
    }

    shouldComponentUpdate() {
        return true
    }
    
    render() {
        return (
            <div>
                <LoggedInMenu />
                <SignOut />
                <UserFeed currentUser={this.props.user[0]} />
            </div>
        )
    }
}

const mapStateToProps = ({ user }) => {
    return{
//        recipes: recipes,
        user: user
    }
}

export default connect(mapStateToProps, { getUser, logoutUser, fetchRecipes })(User)


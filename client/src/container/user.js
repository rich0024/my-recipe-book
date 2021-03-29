import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoggedInMenu from '../components/loggedInMenu';
import UserFeed from '../components/userFeed';
import SignOut from '../components/signout';
import {getUser} from '../actions/userAction';
import {fetchRecipes} from '../actions/recipeAction';

class User extends Component {
    componentWillMount() {
        this.props.fetchRecipes()
        this.props.getUser()
    }
    
    render() {
        return (
            <div className='user-container'>
                <LoggedInMenu />
                <br></br>
                <br></br>
                <h1>{this.props.user[0].username}'s Recipe Book</h1>
                <UserFeed currentUser={this.props.user[0]} />
            </div>
        )
    }
}

const mapStateToProps = ({ recipes, user }) => {
    return{
        recipes: recipes,
        user: user
    }
}

export default connect(mapStateToProps, { getUser, fetchRecipes })(User)


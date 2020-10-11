import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cook from '../components/cook';
import LoggedInMenu from '../components/loggedInMenu';
import Feed from '../components/feed';
import SignOut from '../components/signout';
import {getUser} from '../actions/userAction';
import {fetchRecipes} from '../actions/recipeAction';
// import {fetchMyRecipes} from '../actions/myRecipeAction';


class Recipes extends Component {
    componentWillMount() {
        this.props.fetchRecipes()
        this.props.getUser()
    }

    // shouldComponentUpdate() {
    //     return true
    // }

    render() {
        return (
            <div className='recipe-container'>
                <LoggedInMenu />
                <SignOut />
                <Cook />
                <Feed 
                recipes={this.props.recipes}
                currentUser={this.props.user[0]} />
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

export default connect(mapStateToProps, {getUser, fetchRecipes })(Recipes)

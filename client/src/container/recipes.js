import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cook from '../components/cook';
import LoggedInMenu from '../components/loggedInMenu';
import Feed from '../components/feed';
import SignOut from '../components/signout';
import {getUser, logoutUser} from '../actions/userAction';
import {createRecipe, fetchRecipes} from '../actions/recipeAction';
// import {fetchMyRecipes} from '../actions/myRecipeAction';


class Recipes extends Component {
    componentWillMount() {
        this.props.fetchRecipes()
        this.props.getUser()
    }

    render() {
        return (
            <div>
                <LoggedInMenu />
                <Cook createRecipe={this.props.createRecipe}/>
                <Feed 
                recipes={this.props.recipes}
                currentUser={this.props.user} />
                <SignOut />
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

export default connect(mapStateToProps, {getUser, logoutUser, createRecipe, fetchRecipes })(Recipes)

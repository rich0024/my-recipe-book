import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cook from '../components/cook';
import LoggedInMenu from '../components/loggedInMenu';
import Feed from '../components/feed';
import SignOut from '../components/signout';
import {getUser, logoutUser} from '../actions/userAction';
import {createRecipe, fetchRecipes} from '../actions/recipeAction';
import {fetchMyRecipes} from '../actions/myRecipeAction';


class Recipes extends Component {
    componentDidMount() {
        this.props.fetchRecipes()
        this.props.getUser()
        this.props.fetchMyRecipes(this.props.user.id)
    }

    render() {
        return (
            <div>
                <LoggedInMenu />
                <Cook createRecipe={this.props.createRecipe}/>
                <Feed recipes={this.props.recipes} />
                <SignOut />
            </div>
        )
    }
}

const mapStateToProps = ({ recipes, user, myRecipes }) => {
    return{
        recipes: recipes,
        user: user,
        myRecipes: myRecipes
    }
}

export default connect(mapStateToProps, {getUser, logoutUser, createRecipe, fetchRecipes, fetchMyRecipes})(Recipes)

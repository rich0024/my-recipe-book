import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cook from '../components/cook';
import Feed from '../components/feed';
import SignOut from '../components/signout';
import {createRecipe, fetchRecipes} from '../actions/recipeAction';


class Recipes extends Component {
    componentDidMount() {
        this.props.fetchRecipes()
    }

    render() {
        return (
            <div>
                <Cook createRecipe={this.props.createRecipe}/>
                <Feed recipes={this.props.recipes} />
                <SignOut />
            </div>
        )
    }
}

const mapStateToProps = ({ recipes }) => {
    return{
        recipes: recipes
    }
}

export default connect(mapStateToProps, {createRecipe, fetchRecipes})(Recipes)

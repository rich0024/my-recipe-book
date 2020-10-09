import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/myRecipeAction'

class Feed extends Component {
    handleOnClick = event => {
        this.props.addRecipe({
            recipeId: event.target.value,
            userId: this.props.currentUser.user.id
        })
    }

    renderRecipes = (recipes) => {
    return recipes.reverse().map(recipe => {
        return (
            <div className="display-linebreak">
                <h1>{recipe.name}</h1>
                <br></br>
                <img src={recipe.recipe_img} alt="new"/>
                <br></br>
                <h3>Ingredients</h3>
                <text>{recipe.ingredients}</text>
                <br></br>
                <h3>Instructions</h3>
                <text>{recipe.instructions}</text>
                <br></br>
                <button onClick={this.handleOnClick} value={recipe.id}>Add Recipe</button>
            </div>
            )
        })
    }

    render() {
        return(
            <div className="recipe-container">
                {this.renderRecipes(this.props.recipes)}
            </div>
            )
        }
}

export default connect(null, {addRecipe})(Feed)

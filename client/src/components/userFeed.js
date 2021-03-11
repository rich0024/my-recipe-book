import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions/userAction'

class UserFeed extends Component {
    // shouldComponentUpdate() {
    //     return true
    // }

    handleOnClick = event => {
        let joint = this.props.currentUser.my_recipes.find(join => join.recipe_id == event.target.value)
        let id = joint.id
        let recipeId = event.target.value
        this.props.removeRecipe(id, recipeId)
    }

    renderMyRecipes = (props) => {
        return props.recipes.map(recipe => {
            return (
                <div className="display-linebreak">
                    <h2>{recipe.name}</h2>
                    <br></br>
                    <img className="feed" src={recipe.recipe_img} alt="new"/>
                    <br></br>
                    <h3>Ingredients</h3>
                    <p>{recipe.ingredients}</p>
                    <br></br>
                    <h3>Instructions</h3>
                    <p>{recipe.instructions}</p>
                    <br></br>
                    <button onClick={this.handleOnClick} value={recipe.id}>Remove Recipe</button>
                </div>
                )
            }
        )
    }

    render() {
        return(
            <div className="recipe-container">
                <h1>{this.props.currentUser.username}'s Recipe Book</h1>
                {this.renderMyRecipes(this.props.currentUser)}
            </div>
            )
        }
}

const mapStateToProps = ({ user }) => {
    return{
        user: user
    }
}

export default connect(mapStateToProps, {removeRecipe})(UserFeed)
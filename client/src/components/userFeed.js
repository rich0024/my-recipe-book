// import React from 'react'

// const renderMyRecipes = (props) => {
//     return props.user.user.recipes.reverse().map(recipe => {
//         return (
//             <div className="display-linebreak">
//                 <h1>{recipe.name}</h1>
//                 <br></br>
//                 <img src={recipe.recipe_img} alt="new"/>
//                 <br></br>
//                 <h3>Ingredients</h3>
//                 <text>{recipe.ingredients}</text>
//                 <br></br>
//                 <h3>Instructions</h3>
//                 <text>{recipe.instructions}</text>
//             </div>
//         )
//     })
// }

// const userFeed = props => {
//     return(
//         <div className="recipe-container">
//             {renderMyRecipes(props)}
//         </div>
//     )
// }

// export default userFeed

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeRecipe } from '../actions/userAction'

class UserFeed extends Component {
    shouldComponentUpdate() {
        return true
    }

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
                    <button onClick={this.handleOnClick} value={recipe.id}>Remove Recipe</button>
                </div>
                )
            }
        )
    }

    render() {
        return(
            <div className="recipe-container">
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
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
import { removeRecipe } from '../actions/myRecipeAction'

class UserFeed extends Component {
    handleOnClick = event => {
        let joint = this.props.currentUser.user.my_recipes.filter(join => join.user_id == this.props.currentUser.user.id)
        let id = joint.find(table => table.recipe_id == event.target.value).id
        this.props.removeRecipe(id)
    }

    renderMyRecipes = (props) => {
        return props.user.recipes.reverse().map(recipe => {
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

export default connect(null, {removeRecipe})(UserFeed)
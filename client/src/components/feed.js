import React from 'react'

const renderRecipes = (props) => {
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
            </div>
        )
    })
}

const Feed = props => {
    return(
        <div className="recipe-container">
            {renderRecipes(props)}
        </div>
    )
}

export default Feed

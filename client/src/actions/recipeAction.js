export const createRecipe = (newRecipe) => {
    return (dispatch) => {
        return fetch("https://warm-island-73271.herokuapp.com/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe: {
                    name: newRecipe.name,
                    recipe_img: newRecipe.picture,
                    ingredients: newRecipe.ingredients,
                    instructions: newRecipe.instructions
                }
            })
        })
        .then(res => res.json())
        .then(Recipedata => {
            if (Recipedata.error) {
                alert(Recipedata.details)
            } else {
                // const authentication_token = Recipedata.data.attributes.authentication_token;
                // localStorage.setItem('token', authentication_token);
                dispatch({ type: "CREATE_RECIPE", recipe: Recipedata})
            }
        })
    };
}

export const fetchRecipes = () => async(dispatch) => {
    const res = await fetch('https://warm-island-73271.herokuapp.com/recipes')
    .then(res => res.json())
    dispatch({type: 'ADD_RECIPES', recipes: res}) 
}

export const createRecipe = (newRecipe) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/recipes", {
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
                dispatch({ type: "CREATE_RECIPE", payload:Recipedata})
            }
        })
    };
}
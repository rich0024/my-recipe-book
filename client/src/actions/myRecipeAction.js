export const createRecipe = (addRecipe) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/myrecipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipe: {
                    recipe_id: addRecipe.recipeId,
                    user_id: addRecipe.userId,
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
                dispatch({ type: "CREATE_MY_RECIPE", recipe: Recipedata})
            }
        })
    };
}

export const fetchMyRecipes = (id) => async(dispatch) => {
    const res = await fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    dispatch({type: 'GET_MY_RECIPES', recipes: res}) 
}
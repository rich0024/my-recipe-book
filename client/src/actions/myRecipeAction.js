export const addRecipe = (addRecipe) => {
    return (dispatch) => {
        return fetch("https://warm-island-73271.herokuapp.com/my_recipes", {
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
                alert("Recipe Added")
                dispatch({ type: "CREATE_MY_RECIPE"})
            }
        })
    };
}

// export const removeRecipe = (id, recipeId) => {
//     return async dispatch => {
//         const data = await fetch(`http://localhost:3000/my_recipes/${id}`, {
//             method: "DELETE",
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json",
//             }
//         })
//         dispatch({ type: "REMOVE_RECIPE", id: id, recipeId: recipeId })
//     }
// }

// export const fetchMyRecipes = (id) => async(dispatch) => {
//     const res = await fetch(`http://localhost:3000/users/${id}`)
//     .then(res => res.json())
//     dispatch({type: 'GET_MY_RECIPES', myRecipes: res}) 
// }
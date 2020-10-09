const userReducer = (state=[], action) => {
    // switch(action.type) {
    //     case 'LOGIN_USER':
    //         return {user: action.user, loggedIn: true}
    //     case 'CREATE_USER':
    //         return {user: action.user, loggedIn: true}
    //     case 'LOGOUT_USER':
    //         return {user: {}, loggedIn: false}
    //     case 

    //     default:
    //         return state;
    // }

    let newState = [...state];
        
    if(action.type === 'LOGIN_USER'){
        newState.shift()
        newState.push(action.user)
        }
    if(action.type === 'CREATE_USER'){
        newState.shift()
        newState.push(action.user)
    }
    if(action.type === 'LOGOUT_USER'){
        newState.shift()
    }
    if(action.type === 'REMOVE_RECIPE'){
        newState[0].recipes = newState[0].recipes.filter(recipe => recipe.id != action.recipeId)
        newState[0].my_recipes = newState[0].my_recipes.filter(recipe => recipe.id !== action.id)
    }
    return newState
}

export default userReducer
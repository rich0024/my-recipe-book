const myRecipeReducer = (state= [], action) => {
    switch(action.type) {
        
        case 'CREATE_MY_RECIPE':
            return (
                action.recipe
            )
        case 'ADD_MY_RECIPES':
            return (
                action.recipes
            )
        default:
            return state
    }
}

export default myRecipeReducer
const recipeReducer = (state= [], action) => {
    switch(action.type) {
        
        case 'CREATE_RECIPE':
            return (
                action.recipe
            )
        case 'ADD_RECIPES':
            return (
                action.recipes
            )
        default:
            return state
    }
}

export default recipeReducer
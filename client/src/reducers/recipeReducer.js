const recipeReducer = (state= [], action) => {
    const newState = [...state];
        
        if(action.type === 'CREATE_RECIPE'){
                newState.unshift(action.recipe)
            }
        if(action.type === 'ADD_RECIPES'){
            action.recipes.forEach(recipe => {
                newState.unshift(recipe)
            });
            }
        return newState
}

export default recipeReducer
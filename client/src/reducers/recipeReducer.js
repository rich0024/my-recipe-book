const recipeReducer = (state= [], action) => {
    switch(action.type) {
        
        case 'CREATE_RECIPE':
            return (
                action.jobs
            )

        default:
            return state
    }
}

export default recipeReducer
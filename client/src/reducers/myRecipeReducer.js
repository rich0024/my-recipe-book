const myRecipeReducer = (state= [], action) => {
    switch(action.type) {
        
        case 'CREATE_MY_RECIPE':
            return (
                action.myrecipe
            )
        default:
            return state
    }
}

export default myRecipeReducer
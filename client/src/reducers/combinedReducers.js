import { combineReducers } from 'redux'
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
// import savedRecipesReducer from './savedRecipesReducer'

const rootReducer = combineReducers({
    user: userReducer,
    recipes: recipeReducer
    // savedRecipes: savedRecipesReducer
})

export default rootReducer
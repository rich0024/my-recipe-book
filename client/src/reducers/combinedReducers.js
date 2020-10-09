import { combineReducers } from 'redux'
import userReducer from './userReducer'
import recipeReducer from './recipeReducer'
import myRecipeReducer from './myRecipeReducer'

const rootReducer = combineReducers({
    user: userReducer,
    recipes: recipeReducer,
    myRecipes: myRecipeReducer
})

export default rootReducer
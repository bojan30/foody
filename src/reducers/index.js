import {combineReducers} from 'redux';
import {categoriesReducer} from './categoriesReducer';
import {loginModalReducer} from './loginModalReducer';
import {loginReducer} from './loginReducer';
import {singleCategoryReducer} from './singleCategoryReducer';
import {singleMealReducer} from './singleMealReducer';
import {randomMealsReducer} from './randomMealsReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    isLoginModalActive: loginModalReducer,
    isLoggedIn: loginReducer,
    categoryRecipes: singleCategoryReducer,
    singleMeal: singleMealReducer,
    randomMeals: randomMealsReducer
})

export default rootReducer;
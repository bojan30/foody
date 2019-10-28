import {combineReducers} from 'redux';
import {categoriesReducer} from './categoriesReducer';
import {loginModalReducer} from './loginModalReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    isLoginModalActive: loginModalReducer
})

export default rootReducer;